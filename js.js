var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) { 
    showSlides(slideIndex=slideIndex+n);
}
function currentSlide(n){ 
    showSlides(slideIndex = n);
}
function showSlides(n) { 
    var i;
    var myslides = document.getElementsByClassName("myslide"); 
    var slider_pointer =
    document.getElementsByClassName("slider_pointer");
    if (n > myslides.length){ 
    slideIndex = 1;
    }
    if (n<1) {
    slideIndex = myslides.length;
    }
    for (i=0; i < myslides.length; i++) { 
    myslides[i].style.display = "none";
    }
    for (i=0; i<slider_pointer.length; i++) { 
    slider_pointer[i].className =
    slider_pointer[i].className.replace(" active","");
    }
    myslides[slideIndex -1].style.display = "block"; 
    slider_pointer[slideIndex -1].className+= " active";
}
