const fs = require("fs");
const jimp = require("jimp");
// ADD THE FILE IN THE DIRECTORY OR YOU CAN USE SOME FRONTEND TO GET IT FROM USER
let file = fs.readFileSync("image.png");
console.log(file);
//CONVERT TO STRING
let str = file.toString("base64");
fs.writeFileSync("image2.txt", str);
str = fs.readFileSync("image2.txt", { encoding: "utf-8" });

//CONVERTING BACK TO BUFFER
let newstrbuffer = Buffer.from(str, "base64");
console.log(newstrbuffer);
fs.writeFileSync("newimage.png", newstrbuffer);

//IMAGE COMPRESSION USING JIMP
jimp.read("newimage.png", (err, image) => {
  if (err) throw err;
  image.resize(256, 256).quality(80).write("newimagecompressed.png");
});
