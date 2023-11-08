const fs = require("fs");
const jimp = require("jimp");
let file = fs.readFileSync("image.png");
console.log(file);
let str = file.toString("base64");
fs.writeFileSync("image2.txt", str);
str = fs.readFileSync("image2.txt", { encoding: "utf-8" });
let newstrbuffer = Buffer.from(str, "base64");
console.log(newstrbuffer);
fs.writeFileSync("newimage.png", newstrbuffer);
jimp.read("newimage.png", (err, image) => {
  if (err) throw err;
  image.resize(256, 256).quality(80).write("newimagecompressed.png");
});
