
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    const updateCounter = (counter) => {
        const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 100; // Adjust this for smoother increments

      if (current < target) {
            counter.innerText = `${Math.ceil(current + increment)}`;
            setTimeout(() => updateCounter(counter), 20);
       } else {
            counter.innerText = target;
        }     };

    const handleIntersection = (entries, observer) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               updateCounter(entry.target);
              observer.unobserve(entry.target); // Stop observing once counter starts
          }
      });
   };

    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5 // Adjust the threshold as needed
    });

    counters.forEach(counter => {
        observer.observe(counter);
    });
});


 
$(document).ready(function(){
    $(".testimonial-content").owlCarousel({
   loop: true,
        items: 2,
        margin: 50,
        dots: true,
        nav: false,
        mouseDrag: true,
         autoplay: true, // Enable autoplay
         autoplayTimeout: 2000, // Set autoplay timeout in milliseconds (4 seconds)
        smartSpeed: 800, //Transition speed
       autoplayHoverPause: true  //Pause on hover
     });
   });
  