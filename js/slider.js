const nextslide = document.getElementById('nextslide');
const lastslide = document.getElementById('lastslide');
const tothirdslide = document.getElementById('tothirdslide');
const backtosecond = document.getElementById('backtosecond');


nextslide.addEventListener("click", function() {
    const slideslist = document.querySelectorAll('.slide')
    const slides = Array.from(slideslist);
    console.log(slides);
    const currentSlides = slides.slice(0, 3);
    console.log(currentSlides)
    const nextSlides = slides.slice(3, 6);
    console.log(nextSlides)
    currentSlides.forEach(function(slides) {
        slides.style.display = "none";
    })
    nextSlides.forEach(function(slides) {
        slides.style.display = "block";
    })
    nextslide.style.display = "none";
    lastslide.style.display = "block";
    tothirdslide.style.display = "block";
    postgrid.style.setProperty('margin-left', '0')

})
lastslide.addEventListener("click", function() {
    lastslide.style.display = "none";
    tothirdslide.style.display = "none";
    nextslide.style.display = "block";
    const slideslist = document.querySelectorAll('.slide')
    const slides = Array.from(slideslist);
    console.log(slides);
    const nextSlides = slides.slice(3, 6);
    nextSlides.forEach(function(slides) {
        slides.style.display = "none";
    })
    const currentSlides = slides.slice(0, 3);
    currentSlides.forEach(function(slides) {
        slides.style.display = "block";
    })
    console.log(currentSlides);
    postgrid.style.setProperty('margin-left', '80px')

})
tothirdslide.addEventListener("click", function() {
    tothirdslide.style.display = "none";
    backtosecond.style.display = "block";
    lastslide.style.display = "none";
    const slideslist = document.querySelectorAll('.slide')
    const slides = Array.from(slideslist);
    console.log(slides);
    const thirdslides = slides.slice(7, 10);
    const nextSlides = slides.slice(3, 6);
    nextSlides.forEach(function(slides) {
        slides.style.display = "none";
    })
    thirdslides.forEach(function(slides) {
        slides.style.display = "block";
    })
    postgrid.style.setProperty('margin-left', '0')
    postgrid.style.setProperty('margin-right', '80px')

    
})
backtosecond.addEventListener("click", function() {
    tothirdslide.style.display = "block";
    backtosecond.style.display = "none";
    lastslide.style.display = "block";
    const slideslist = document.querySelectorAll('.slide')
    const slides = Array.from(slideslist);
    const nextSlides = slides.slice(3, 6);
    nextSlides.forEach(function(slides) {
        slides.style.display = "block";
    })
    const thirdslides = slides.slice(7, 10);
    thirdslides.forEach(function(slides) {
        slides.style.display = "none";
        console.log('removing one')
    })
    postgrid.style.setProperty('margin-left', '0')
    postgrid.style.setProperty('margin-right', '0')



})