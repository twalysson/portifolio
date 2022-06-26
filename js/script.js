let time =  2000,
    currentImageIndex = 0,
    images = document
        .querySelectorAll("#slider img")
    max = images.length


function nextImagem(){

    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++

    console.log(currentImageIndex)

    if(currentImageIndex >= max){
        currentImageIndex = 0
    }

    images[currentImageIndex].classList.add("selected")

    
}

    function start(){
        setInterval(() => {
            nextImagem()
        }, time)
    }

    window.addEventListener("load", start)