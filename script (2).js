// document.addEventListener('DOMContentLoaded', () => {
//     const title = document.getElementById('gurukilli-title');
//     const underline = document.getElementById('underline');
//     const description = document.getElementById('gurukilli-description');
    
//     const englishText = 'GURUKILLI';
//     const marathiText = 'गुरुकिल्ली';
//     const englishDescription = 'Education is the key to success, We found it -<b>GURUKILLI</b>';
//     const marathiDescription = 'शिक्षा एव सफलतायाः कुञ्जी, अस्माभिः प्राप्ता -<b>गुरुकिल्ली</b>';
    
//     let isEnglish = true;

//     function toggleLanguage() {
//         title.style.opacity = '0';
//         description.style.opacity = '0';
//         underline.style.width = '0';

//         setTimeout(() => {
//             title.textContent = isEnglish ? marathiText : englishText;
//             description.innerHTML = isEnglish ? marathiDescription : englishDescription;
//             isEnglish = !isEnglish;

//             title.style.opacity = '1';
//             description.style.opacity = '1';
//             underline.style.width = '100px';
//         }, 500);
//     }

//     // Initial display
//     title.textContent = englishText;
//     description.innerHTML = englishDescription;
//     title.style.opacity = '1';
//     description.style.opacity = '1';
//     underline.style.width = '100px';

//     // Toggle language every 3 seconds
//     setInterval(toggleLanguage, 3000);

//     // Sticky navbar functionality
//     const navbar = document.querySelector('.navbar');
//     const sticky = navbar.offsetTop;

//     function makeNavbarSticky() {
//         if (window.pageYOffset >= sticky) {
//             navbar.classList.add("sticky")
//         } else {
//             navbar.classList.remove("sticky");
//         }
//     }

//     window.onscroll = function() {
//         makeNavbarSticky();
//     };
// });
// //step 1: get DOM
// let nextDom = document.getElementById('next');
// let prevDom = document.getElementById('prev');

// let carouselDom = document.querySelector('.carousel');
// let SliderDom = carouselDom.querySelector('.carousel .list');
// let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
// let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
// let timeDom = document.querySelector('.carousel .time');

// thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
// let timeRunning = 3000;
// let timeAutoNext = 7000;

// nextDom.onclick = function(){
//     showSlider('next');    
// }

// prevDom.onclick = function(){
//     showSlider('prev');    
// }
// let runTimeOut;
// let runNextAuto = setTimeout(() => {
//     next.click();
// }, timeAutoNext)
// function showSlider(type){
//     let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
//     let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
//     if(type === 'next'){
//         SliderDom.appendChild(SliderItemsDom[0]);
//         thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
//         carouselDom.classList.add('next');
//     }else{
//         SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
//         thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
//         carouselDom.classList.add('prev');
//     }
//     clearTimeout(runTimeOut);
//     runTimeOut = setTimeout(() => {
//         carouselDom.classList.remove('next');
//         carouselDom.classList.remove('prev');
//     }, timeRunning);

//     clearTimeout(runNextAuto);
//     runNextAuto = setTimeout(() => {
//         next.click();
//     }, timeAutoNext)
// }

document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('gurukilli-title');
    const underline = document.getElementById('underline');
    const description = document.getElementById('gurukilli-description');
    
    const englishText = 'GURUKILLI';
    const marathiText = 'गुरुकिल्ली';
    const englishDescription = 'Education is the key to success, We found it -<b>GURUKILLI</b>';
    const marathiDescription = 'शिक्षा एव सफलतायाः कुञ्जी, अस्माभिः प्राप्ता -<b>गुरुकिल्ली</b>';
    
    let isEnglish = true;

    function toggleLanguage() {
        title.style.opacity = '0';
        description.style.opacity = '0';
        underline.style.width = '0';

        setTimeout(() => {
            if (isEnglish) {
                title.textContent = marathiText;
                description.innerHTML = marathiDescription;
                title.style.fontFamily = '"Baloo 2", "Mukta", "Poppins Devanagari", sans-serif';// Apply Marathi font
            } else {
                title.textContent = englishText;
                description.innerHTML = englishDescription;
                title.style.fontFamily = '"Roboto Slab", "Martel", serif'; // Apply English font
            }
            isEnglish = !isEnglish;

            title.style.opacity = '1';
            description.style.opacity = '1';
            underline.style.width = '100px';
        }, 500);
    }

    // Initial display
    title.textContent = englishText;
    description.innerHTML = englishDescription;
    title.style.opacity = '1';
    description.style.opacity = '1';
    underline.style.width = '100px';

    // Toggle language every 3 seconds
    setInterval(toggleLanguage, 3000);

    // Sticky navbar functionality
    // const navbar = document.querySelector('.navbar');
    // const sticky = navbar.offsetTop;

    // function makeNavbarSticky() {
    //     if (window.pageYOffset >= sticky) {
    //         navbar.classList.add("sticky")
    //     } else {
    //         navbar.classList.remove("sticky");
    //     }
    // }

    // window.onscroll = function() {
    //     makeNavbarSticky();
    // };

    // Carousel functionality
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');

    let carouselDom = document.querySelector('.carousel');
    let SliderDom = carouselDom.querySelector('.carousel .list');
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    let timeDom = document.querySelector('.carousel .time');

    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    let timeRunning = 3000;
    let timeAutoNext = 7000;

    nextDom.onclick = function() {
        showSlider('next');    
    }

    prevDom.onclick = function() {
        showSlider('prev');    
    }

    let runTimeOut;
    let runNextAuto = setTimeout(() => {
        nextDom.click();
    }, timeAutoNext);

    function showSlider(type) {
        let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
        
        if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        } else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
        }
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextDom.click();
        }, timeAutoNext);
    }
});
