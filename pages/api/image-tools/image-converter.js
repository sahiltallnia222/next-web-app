import sharp from "sharp";
import { Buffer } from 'node:buffer';
// import fs from 'fs'
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb', // Increase the limit to 10 MB or a size of your choice
    },
  },
};

export default async function handler(req, res) {
    const {data}=req.body;
  try {
    // const inputImg=img;
    // const buf = Buffer.from(inputImg.split(',')[1], 'base64');
    // const sharpImage = sharp(buf);
    // sharpImage.jpeg({ mozjpeg: true })
    // res.status(200).json({ success: true, message: buf });
    let resImgs=[];
    for(let i=0;i<data.length;i++){
      const inputImg=data[i].imgUrl;
      const imgBuffer=Buffer.from(inputImg.split(',')[1], 'base64')
      const sharpImage=sharp(imgBuffer);
      const imageBuffer = await sharpImage.toFormat(data[i].convertTo).toBuffer()
      const imageDataUrl = `data:image/${data[i].convertTo};base64,${imageBuffer.toString('base64')}`;
      resImgs.push({imgUrl:imageDataUrl,convertedTo:data[i].convertTo});
    }
    return res.status(200).json({success:true,res:resImgs})
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: err.message });
  }
}

// const img='D:\\css gen next\\web-app\\public\\images\\img.png';
// const buf=fs.readFileSync(img);
// console.log(buf);
// sharpImage.toFile('D:\\css gen next\\web-app\\public\\images\\output.jpeg')