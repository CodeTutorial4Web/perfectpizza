const parallaxElements = document.querySelectorAll(".parallax");
const cursorFollower = document.querySelector("#cursorFollower");
let mousePositionX = 0,
mousePositionY = 0;

$(window).scroll(()=>{
    if($(window).scrollTop() > $("#offers").offset().top - 100){
        $("header nav .menu ul li a").css({"color" : "var(--dark-color)"});
        $("header nav .burger div").css({"background" : "var(--dark-color)"});

    }else{
        $("header nav .menu ul li a").css({"color" : "var(--light-color)"});
        $("header nav .burger div").css({"background" : "var(--light-color)"});

    }
})


function update(mousePosition) {
    parallaxElements.forEach(el => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotateSpeed = el.dataset.rotation ;
        let rotateDegree = (mousePositionX / (window.innerWidth / 2)) * 20;
        let isInLeft = parseFloat(getComputedStyle(el).left)<window.innerWidth / 2 ? 1 : -1 
        let mousePositionz = (mousePosition - parseFloat(getComputedStyle(el).left)) * isInLeft * 0.1;
        console.log()
        el.style.transform = `          
        translateX(calc(-50% + ${- mousePositionX * speedx}px))
        translateY(calc(-50% + ${- mousePositionY * speedy}px))
        perspective(2500px) translateZ(${mousePositionz * speedz}px)
        rotateY(${rotateDegree * rotateSpeed}deg)`;      
    })
} 

window.addEventListener("mousemove" , (e)=> {
    mousePositionX = e.clientX - innerWidth / 2;
    mousePositionY = e.clientY - innerHeight / 2;
    cursorFollower.style.left =` calc(${e.clientX}px + 5px)`;
    cursorFollower.style.top = ` calc(${e.clientY}px + 5px)`;
    update(e.clientX);
})


$("header nav .burger").click(() => {
    $("header nav .burger div").toggleClass("close-animation");
    $("header nav .small-menu").toggleClass("slide");
    $("header").toggleClass("nav-header-animation");
});

$("header nav .small-menu ul li a").click(()=>{
    $("header nav .small-menu").removeClass("slide");
    $("header nav .burger div").removeClass("close-animation");
    $("header").removeClass("nav-header-animation");



});

// TESTIMONIALS



const testimonialsData = [
    {
        name: "mohamed salah",
        profession: "engineer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur consequuntur debitis dolorum eaque earum eligendi enim error est explicabo fuga fugiat hic impedit in inventore ipsa iure, laudantium magnam magni maxime minima molestiae mollitia natus nemo nesciunt nihil nisi nulla obcaecati officia omnis perferendis perspiciatis"

    },
    {
        name: "mariam sabry",
        profession: "food blogger",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur consequuntur debitis dolorum eaque earum eligendi enim error est explicabo fuga fugiat hic impedit in inventore ipsa iure, laudantium magnam magni maxime minima molestiae mollitia natus nemo nesciunt nihil nisi nulla obcaecati officia omnis perferendis perspiciatis"

    },
    {
        name: "islam maher",
        profession: "programmer",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aspernatur consequuntur debitis dolorum eaque earum eligendi enim error est explicabo fuga fugiat hic impedit in inventore ipsa iure, laudantium magnam magni maxime minima molestiae mollitia natus nemo nesciunt nihil nisi nulla obcaecati officia omnis perferendis perspiciatis"

    }


]
const testimonials = document.querySelectorAll('.parallax__el2, .parallax__el3, .parallax__el4');
const hero = document.querySelector('.hero')
const testimonialContainer = document.createElement('div'); 

testimonials.forEach(testimonial => {

    testimonial.addEventListener('click', (e) => {
        testimonialContainer.classList.add('testimonial-container');


            testimonialContainer.innerHTML = `
                <i onclick="" class="fas fa-xmark"></i>
                <img src="${e.target.src}" alt="testimonial1"/>
                <div class="desc">
                    <h3>${testimonialsData[testimonial.dataset.index].name}</h3>
                    <span>${testimonialsData[testimonial.dataset.index].profession}</span>
                    <p>${testimonialsData[testimonial.dataset.index].description}</p>
                </div>`;
        document.body.appendChild(testimonialContainer);


       
    })



})

testimonialContainer.addEventListener("mouseenter", (e)=>{
    const closingMark = e.target.firstElementChild;
    closingMark.addEventListener("click", (b)=>{
        b.target.parentElement.remove()
    })
})

// SMOTH SCROLL

$("a[href^='#']").click((e)=>{


    let hrefVal = $(e.target).attr('href');
    let sectionsOffset = $(hrefVal).offset().top;
    $("body,html").animate({scrollTop: sectionsOffset} , 1500)
         
});



// GREETING

const greeting = document.querySelector('#greeting')

let clock = document.getElementById('time');


let date = document.getElementById('date');

function showTime() {
    let time = new Date(),
    hours = time.getHours(),
    mins = time.getMinutes(),
    seconds = time.getSeconds();
    console.log(hours);
    

    if(hours < 13) {
        greeting.textContent = 'GOOD MORNING';
    } else if(hours < 19) {
        greeting.textContent = 'GOOD AFTERNOON';
    } else {
        greeting.textContent = 'GOOD EVENING';
    };

    setTimeout(showTime, 1000);

}

showTime()
