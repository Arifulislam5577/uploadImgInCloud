import { v2 as cloudinary } from "cloudinary";

async function uploadProductImgToCloud({
  cloudName,
  apiKey,
  apiSecret,
  folderName,
  height,
  width,
  image,
}) {
  cloudinary.config({
    cloud_name: cloudName,
    api_key: apiKey,
    api_secret: apiSecret,
  });

  const imageConfig = {
    height: height,
    width: width,
    folderName: folderName,
    crop: "fit",
    quality: 100,
  };
  const imgObj = await cloudinary.uploader.upload(image, imageConfig);
  return imgObj.secure_url;
}

export default uploadProductImgToCloud;
