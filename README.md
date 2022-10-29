# UPLOAD TO CLOUD

`uploadimgtocloud` is a Node Js package for upload image in cloudinary cloud.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install uploadimgtocloud.

```bash
npm install uploadimgtocloud
```

## Usage

```
import uploadToCloud from 'uploadimgtocloud';

const imgUrl = uploadToCloud({

     cloudName : YOUR_cloudName,
     apiKey : YOUR_apiKey,
     apiSecret : YOUR_apiSecret,
     folderName : YOUR_folderName,
     height : YOUR_height,
     width : YOUR_width,
     image : YOUR_image// Image should be base64 bit

})

imgUrl will be a string like ,"https://res.cloudinary.com/YOUR_USERNAME/image/upload/v1667012769/cprhtb4bcl7wbrydwyah.png"
```

## Author

MD ARIFUL ISLAM
