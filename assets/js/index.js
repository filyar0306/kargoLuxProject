// const theme__btn = document.getElementById("theme__btn")
// theme__btn.addEventListener("click", function(){
//     document.body.classList.toggle("light-theme");
//     localStorage.setItem("mode", document.body.classList)
// })
// if (localStorage.getItem("mode") != "") {

//      document.body.classList.add(localStorage.getItem("mode"));
// }

document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
  
    function showItem(index) {
      carouselItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  
    function nextItem() {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showItem(currentIndex);
    }
  
    function prevItem() {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showItem(currentIndex);
    }
  
    setInterval(nextItem, 5000); // Auto slide every 5 seconds
  
    // Optionally, you can add event listeners for left and right arrow keys
    document.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowRight') {
        nextItem();
      } else if (event.key === 'ArrowLeft') {
        prevItem();
      }
    });
  });