import { useCallback, useMemo ,useState,useEffect} from "react";
import { useDropzone } from "react-dropzone";
import Head from "next/head";
import styles from "styles/style.module.css";
import { FaCloudUploadAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import axios from "axios";
import { toast } from "react-toastify";

function ImageFormatConverter() {
  const imageFormats=['png','jpeg','webp','gif','tiff']
  const [files,setFiles]=useState([]);
  const [outputFiles,setOutputFiles]=useState([]);
  const [isProcessing,setProcessing]=useState(false);
  const onDrop = useCallback((acceptedFiles) => {
    let values=[...files]
    setOutputFiles([])
    let haveInvalidData=false;
    acceptedFiles.forEach(file => {
      if(imageFormats.includes(file.type.split('/')[1])){
        let reader = new FileReader();
        reader.readAsDataURL(file)
        let dataUrlSizeKB =0;
        let dataUrl=0;
        reader.onload=()=>{
          dataUrl = reader.result;
          let dataUrlSizeBytes = dataUrl.length;
          dataUrlSizeKB = (dataUrlSizeBytes / 1024).toFixed(2)
          values.push({file:file,imgUrl:dataUrl,size:dataUrlSizeKB,convertTo:'png'})
          setFiles(values)
        }
      }
      else{
        haveInvalidData=true;
      }
    })
    if(haveInvalidData){
      Notification('Some files are invalid !','warning')
    }
  }, [files,setFiles]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });


  const Notification = (msg,type) => {
    if(type=='success'){
      toast.success(msg, {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
      });
    }
    else if(type=='warning'){
      toast.warning(msg, {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
      });
    }
    else if(type=='error'){
      toast.error(msg, {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
      });
    }
  };

  const dropzoneStyles = useMemo(
    () => ({
      ...(isDragActive ? { backgroundColor: "#5970f4",color:'white'} : {backgroundColor:'#3b82f6',}),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 200,
      border: "2px dashed white",
      cursor:'pointer',
    }),
    [isDragActive]
  );
  const removeFile=(index)=>{
    let values=[...files]
    values.splice(index, 1)
    setFiles(values)
  }
  const handleSelect=(e,index)=>{
    const values=[...files]
    values[index].convertTo=imageFormats[e.target.value]
    setFiles(values)
  }

  const downloadZip = async() => {
    const zip = new JSZip();
    outputFiles.forEach((file, index) => {
      zip.file(`image${index + 1}.${file.convertedTo}`,  file.imgUrl.split(',')[1], { base64: true });
    });
    const zipFileBlob = await zip.generateAsync({ type: 'blob' });
    saveAs(zipFileBlob, 'images.zip');
    setOutputFiles([]);
  };
const handleConvert=async()=>{
  setProcessing(true)
  axios.post('/api/image-tools/image-converter',{data:files}).then(res=>{
    setOutputFiles(res.data.res);
    Notification('Converted successfully','success');
    setFiles([]);
    setProcessing(false)
  }).catch(err=>{
    console.log(err);
    Notification('Something went wrong !','error')
    setProcessing(false)
  })
}



  return (
    <>
      <Head>
        <title>Image Converter</title>
      </Head>

      <div className="lg:w-[64rem] mx-auto w-full dark:text-white">
        <h1
          className={`md:text-5xl text-4xl text-blue-500 text-center font-semibold pb-5  pt-3 ${styles.textGrad}`}
        >
          Image Converter
        </h1>


       <div className="dark:bg-[#1d2537] bg-gray-100 p-4 relative">
        {isProcessing==true && <div className="w-full bg-gray-100 text-black h-[200px] flex items-center justify-center ">
          <p>Processing...</p>
        </div>}
          {isProcessing==false && <div {...getRootProps({ style: dropzoneStyles })}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <div className="flex items-center justify-center flex-col text-white gap-5 text-center">
                <FaCloudUploadAlt size={'3em'}/>
                <p>Drag and drop files here, or click to select files</p>
              </div>
            )}
          </div>}

          {files.length>0 && <div className="mt-4">
            <p className="mb-2">Selected Files</p>
            <div className="text-sm flex gap-1 flex-col justify-between">
              {
                files.map((file,index)=>{
                  return(
                   <div key={index} className="dark:bg-[#0f172a]  p-2 text-sm border dark:border-transparent  flex items-center justify-between">
                     <p>{file.file.path}</p>
                    <div className="flex items-center justify-center gap-4 text-sm">
                    <div>
                    <select id={`select-${index}`} defaultValue={0} onChange={(e)=>{handleSelect(e,index)}} className="p-2.5 w-full dark:text-white outline-none text-sm block  dark:bg-[#1d2537] cursor-pointer dark:border-none border-gray-200 border">
                        {imageFormats.map((format,index)=>{
                          return <option key={index} value={index}>{format}</option>
                        })}
                    </select>
                    </div>
                    <div>{file.size} KB</div>
                    <RxCross2 size="1.2em" className="hover:cursor-pointer" onClick={()=>{removeFile(index)}}/>
                    </div>
                   </div>
                  )
                })
              }
            </div>
          </div>}
          {files.length>0 && <button onClick={handleConvert} className="bg-blue-500 hover:bg-blue-600 font-medium text-white px-4 py-2 mt-4">Convert</button>}
          {(outputFiles.length>0 && isProcessing==false)&& <button className="mt-4 bg-[#07bc0c] font-medium text-white hover:bg-green-600 px-4 py-2 rounded-3xl" onClick={downloadZip}>Download images</button>}
        </div>
      </div>
    </>
  );
}

export default ImageFormatConverter;
  // {/* {outputFiles.length>0 && outputFiles.map((file,index)=>{
  //         return <a href={file.imgUrl} key={index} download={`image.${file.convertedTo}`}>Download Image</a>
  //       }) } */}