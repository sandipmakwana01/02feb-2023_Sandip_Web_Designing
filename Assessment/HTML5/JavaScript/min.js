window.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".slider img");
    var currentIndex = 0;

    function showImage(index) {
        if (index < 0) {
            currentIndex = images.length - 1;
        } else if (index >= images.length) {
            currentIndex = 0;
        }

        for (var i = 0; i < images.length; i++) {
            images[i].style.display = "none";
        }

        images[currentIndex].style.display = "block";
    }

    function nextImage() {
        currentIndex++;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex--;
        showImage(currentIndex);
    }

    setInterval(nextImage, 3000); 

    showImage(currentIndex);
});
