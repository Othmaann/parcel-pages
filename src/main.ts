const img = document.createElement("img");
document.body.appendChild(img);

const imgUrl = new URL("./img/blomma.jpg", import.meta.url );

img.src = imgUrl.href;

console.log(imgUrl)
