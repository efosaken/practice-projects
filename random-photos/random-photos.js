const imageContainer = document.querySelector(".image-container");
const button = document.querySelector(".btn");
let imageNumber = 50
//adding an event listener to the buttton to make it add more images
button.addEventListener("click", addImages)
 
 
//creating a function that will add more images

function addImages() {
    for (let index = 0; index < imageNumber; index++) {
    
    const newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 5000)}`   

     imageContainer.appendChild(newImage)
}

}
