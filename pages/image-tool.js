import { useState } from "react"
import axios from "axios";


export default function ImageTool(){
    const [image, setImage] = useState(null);

    const  handleImageInput=async(e)=>{
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImage(reader.result);
            axios.post('http://localhost:3000/api/image-tools/image-format-convertor',{img:reader.result}).then(res=>{
                console.log('Done');
            })
        }
    }
    
    console.log(image);
    return (
        <>
            <div>
                <input type="file" onChange={handleImageInput}/>
            </div>
            <div>
            {image && <img src={image} alt="uploaded image" />}
            </div>
           {image && <a href={image} download="out.jpeg"> Click to download </a>}
        </>
    )
}
