const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
    const targetElements = document.querySelectorAll('.animate');
    const targetAds = document.querySelectorAll('.ad-cont');
    const adContent = document.querySelectorAll('.ad-content');
    const targetAdsTop = document.querySelectorAll('.top-bg');
    const targetAdsBottom = document.querySelectorAll('.bottom-bg');
    const section = document.querySelector(".view-detector");
    const allAds = document.querySelectorAll(".advert-cont");
    
    let slideIndex = 0;

    console.log('Check Event Listener?');

    // Function to check if an element is in the viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    // Function to show ads in a slideshow format
    const showAdSlides = () => {
        // Hide all ad contents initially
        adContent.forEach(content => content.style.opacity = "0");
        targetAds.forEach(ad => {
            ad.style.opacity = "0"; // Make all ads invisible
            ad.classList.remove('visible-left', 'visible-right', 'show');  // Remove existing classes
            adContent[slideIndex].classList.remove('visible-left', 'visible-right', 'show');
            targetAdsTop[slideIndex].classList.remove('show');
            targetAdsBottom[slideIndex].classList.remove('show');
            console.log("Turned OFF: ", slideIndex);
            allAds[slideIndex].style.display = "none";
            
        });

        slideIndex = (slideIndex + 1) % targetAds.length; // Cycle through ads
        console.log("Turned ON: ", slideIndex);

        // Show the current ad and corresponding content
        allAds[slideIndex].style.display = "flex";
        targetAds[slideIndex].style.opacity = "1";
        targetAds[slideIndex].classList.add('visible-left'); // Trigger the left animation
        adContent[slideIndex].style.opacity = "1"; // Show corresponding content
        adContent[slideIndex].classList.add('visible-right'); // Trigger the right animation

        // Trigger show animation for top and bottom backgrounds
        targetAdsTop.forEach(top => {top.classList.add('show');});
        targetAdsBottom.forEach(bottom => bottom.classList.add('show'));

        setTimeout(showAdSlides, 7000); // Change slides every 4 seconds
    };

    const animateOnScroll1 = () => {
        targetAds.forEach((el,index) => {
            // indexOne = index[0]
            if (isInViewport(el)) {
                // Start the slideshow if the section is in view
                console.log("Section 3 detected, starting slideshow.");
                showAdSlides();
                
                // You might want to uncomment this line if you want to prevent the slideshow from starting multiple times
                window.removeEventListener('scroll', animateOnScroll1);
            }

        });
    };

    // Function to handle animations on scroll
    const animateOnScroll = () => {
        // targetAds.forEach((el,index) => {
        //     // indexOne = index[0]
        //     if (isInViewport(el)) {
        //         // Start the slideshow if the section is in view
        //         console.log("Section 3 detected, starting slideshow.");
        //         showAdSlides();
                
        //         // You might want to uncomment this line if you want to prevent the slideshow from starting multiple times
        //         window.removeEventListener('scroll', animateOnScroll);
        //     }

        // });
        

        // Check for animations on targetElements
        targetElements.forEach((element, index) => {
            // window.addEventListener('scroll', animateOnScroll);
            if (isInViewport(element) && element.classList.contains('animate')) {
                setTimeout(() => {
                    // Assign animation classes based on element IDs
                    switch (element.id) {
                        case "card-1":
                            element.classList.add('visible-left');
                            break;
                        case "card-2":
                        case "card-4":
                            element.classList.add('visible-down');
                            break;
                        case "card-3":
                        case "card-5":
                            element.classList.add('visible-up');
                            break;
                        case "card-6":
                            element.classList.add('visible-right');
                            break;
                    }
                    // Once the animation class is added, remove the 'animate' class
                    element.classList.remove('animate');
                }, index * 200); // Stagger animations by index
            }
        });
    };

    // Attach event listeners
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('resize', animateOnScroll); // Check on resize too
    animateOnScroll(); // Check initially when the page loads
    animateOnScroll1();
    window.addEventListener('scroll', animateOnScroll1);
    window.addEventListener('resize', animateOnScroll1); 
    
});


// var banners = document.querySelectorAll('.banner-cont');
// var dots = document.querySelectorAll('.dot');
// var currentImg = 0; // index of the first image 
// const interval = 3000; // duration(speed) of the slide


let slideIndex = 0;
const slides = document.getElementsByClassName("banner-cont");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";  
        // slides[i].classList.remove("active");
    }
    slideIndex = (slideIndex + 1) % slides.length; // Go to the next slide
    slides[slideIndex].style.opacity = "1";   
    // slides[i].classList.add("active");
    setTimeout(showSlides, 4000); // Change image every 3 seconds
}

// Start the slideshow
showSlides();

let img1 = document.getElementsByClassName("images");
let adCont = document.getElementsByClassName("ad-contents");


function showAds() {

    for (let i = 0; i < ads.length; i++) {
        img1[i].classList.remove = "0"; 
        adCont[i].classList.remove = "0";  
        // ads[i].classList.remove("active");
    }

    slideIndex = (slideIndex + 1) % ads.length; // Go to the next slide
    img1[i].classList.remove = "0"; 
     adCont[i].classList.remove = "0";  
    // ads[i].classList.add("active");
    setTimeout(showAds, 5000); // Change image every 3 seconds
}