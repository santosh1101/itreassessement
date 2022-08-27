
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());




const sectionHero = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
    (entries) => {
        const ent = entries[0];
        console.log(ent);
        !ent.isIntersecting ?
            document.body.classList.add("sticky") :
            document.body.classList.remove("sticky");
    }, {
        
        root: null,
        threshold: 0,
        rootMargin: "-100px",
    }
);

observer.observe(sectionHero);

function myFunction(widthSize) {
    if (widthSize.matches) {
        const swiper = new Swiper(".swiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },

            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    } else {
        const swiper = new Swiper(".swiper", {
            slidesPerView: 2,
            spaceBetween: 30,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
}

const widthSize = window.matchMedia("(max-width: 780px)");
myFunction(widthSize);
widthSize.addListener(myFunction);

const footerElm = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = ` <ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

footerElm.after(scrollElement);

const scrollTop = () => {
    sectionHero.scrollIntoView({ behavior: "smooth" });
};

document.querySelector(".scroll-top").addEventListener("click", scrollTop);



const portfolioSection = document.querySelector(".section-portfolio");
const contactSection = document.querySelector(".section-contact");

document.querySelector(".portfolio-link").addEventListener("click", (e) => {
    e.preventDefault();
    portfolioSection.scrollIntoView({ behavior: "smooth" });
});

document.querySelector(".hireme-btn").addEventListener("click", (e) => {
    e.preventDefault();
    contactSection.scrollIntoView({ behavior: "smooth" });
});


const port_btn = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const img_div = document.querySelectorAll(".img-ovelay");

port_btn.addEventListener("click", (e) => {

    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

    if (!p_btn_clicked.classList.contains("p-btn")) return;
    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
   

    p_btn_clicked.classList.add("p-btn-active");


    const btn_num = p_btn_clicked.dataset.btnNum;

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    img_div.forEach((curElem) =>
        curElem.classList.add("portfolio-image-not-active")
    );

    img_active.forEach((curElem) =>
        curElem.classList.remove(`portfolio-image-not-active`)
    );
});


const imgRef = document.querySelector("img[data-src]");
console.log(imgRef);

const lazyImg = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    entry.target.src = imgRef.dataset.src;
};

const imgObserver = new IntersectionObserver(lazyImg, {
    root: null,
    threshold: 0,
});

imgObserver.observe(imgRef);



const workSection = document.querySelector(".section-work-data");

const workSectionObserve = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    console.log(entries);


    const counterNum = document.querySelectorAll(".counter-numbers");
    const speed = 200;

    counterNum.forEach((curNumber) => {
        const updateNumber = () => {
            const targetNumber = parseInt(curNumber.dataset.number);
            const initialNumber = parseInt(curNumber.innerText);
            const incrementNumber = Math.trunc(targetNumber / speed);
            

            if (initialNumber < targetNumber) {
                curNumber.innerText = `${initialNumber + incrementNumber}+`;
                setTimeout(updateNumber, 10);
            } else {
                curNumber.innerText = `${targetNumber}+`;
            }

        };
        updateNumber();
    });
};

const workSecObserver = new IntersectionObserver(workSectionObserve, {
    root: null,
    threshold: 0,
});

workSecObserver.observe(workSection);