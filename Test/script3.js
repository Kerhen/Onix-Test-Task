
let image1 = document.querySelector(".image_content1")
let image2 = document.querySelector(".image_content2")
let image3 = document.querySelector(".image_content3")
let image4 = document.querySelector(".image_content4")
let num= document.getElementById("num")
let imgArray = []

imgArray.push(image1, image2, image3, image4)

for(let i = 0; i < imgArray.length; i++) {
imgArray[i].addEventListener("click", function() {
    num.innerText = imgArray.indexOf(imgArray[i])
})
}
