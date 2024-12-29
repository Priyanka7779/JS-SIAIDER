let slider = [
    {
        image: "imges/tarak1.webp",
        title: "SESON 1",
        description: "TARAK MEHTA KA ULTA CHASHMA "
    }, {
        image: "imges/tarak2.jpg",
        title: "SESON 2",
        description: "TARAK MEHTA KA ULTA CHASHMA",
    }, {
        image: "imges/tarak3.avif",
        title: "SESON 3",
        description: "TARAK MEHTA KA ULTA CHASHMA",
    }, {
        image: "imges/tarak4.avif",
        title: "SESON 4",
        description: "TARAK MEHTA KA ULTA CHASHMA",
    }]

let currentIndex = 0

const showSlide = () => {
    let slide = slider[currentIndex]
    let img = document.getElementById("img-slide")
    img.src = slide.image
    let title = document.getElementById("title")
    title.innerHTML = slide.title
    let desc = document.getElementById("desc")
    desc.innerHTML = slide.description
}


document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex++
    console.log(currentIndex)
    if (currentIndex >= slider.length) {
        currentIndex = 0
    }
    showSlide()
})

document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex--
    console.log(currentIndex)
    if (currentIndex <= slider.length) {
        currentIndex - 1
    }
    showSlide()
})
