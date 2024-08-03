let movies = [
    {
        name: "The Trial : Pyaar | Kanoon | Dhoka",
        des: `Noyonika Sengupta faces a trial by fire when her family
        Gets hit by a scandal. Watch her defend them in life and
        In the courtroom.`,
        image: "images2/Slider/ib71-hotstar.png"
    },

    {
        name: "IB-71",
        des: `It's 1971; enemies are closing in! IB Officer Dev Jammwal stratergies to avert impending attacks.But the plan derails,forcing him to improvise:better combat.`,
        image: "images2/Slider/the-night-manager.jpg"
    },

    {
        name: "The Night Manager",
        des: `A hotel's night manager is the only weapon against a dangerous arms dealer.With innocent lives at stake,Shaan is out to destroy Shelly's demonic world.`,
        image: "images2/Slider/coffee-with-karan.jpg"
    },

    {
        name: "Coffee With Karan",
        des: `Dig into fripping inside scoops with Karan Johar as he returns with your favourite celebs to explore what's brewing in B-Town.`,
        image: "images2/Slider/criminal-justice.jpg"
    },

    {
        name: "Criminal Justice : Adhoora Sach",
        des: `When a teenage star's brother becomes the prime
        Suspect in her murder, Madhav Mishra takes the case,
        Only to realise he has to first tackle his client's lies.`,
        image: "images2/Slider/gum-hai.jpg"
    },

    {
        name: "Ghum Hai Kisi key Pyaar Meiin",
        des: `Sai and Virat's daughter Savi meets Ishaan, and a
        Love-hate chemistry ensues. But Ishaan's old flame
        Enters, casting a shadow on this budding love story.`,
        image: "images2/Slider/ishqbaaz.jpg"
    },
    
    {
        name: "Ishqbaaz",
        des: `Brothers Shivaay,Omkara and Rudra share an unbreakable bond despite their dysfunctional family.What happens when cupid strikes each of them?`,
        image: "images2/Slider/sanak.jpg"
    },
    {
        name: "Sanak",
        des: `Trapped in a hostage crisis inside a hospital,Vivaan will move mountains for his wife,Anshika.But will they survive this race against time?`,
        image: "images2/Slider/Teri-Meri-Doriyaann.jpg"
    },
    {
        name: "Teri Meri Doriyaann",
        des: `It's hate at first sight for Sahiba and Angad! But destined
        To be together, their lives get intertwined by a marriage
        Alliance, and a love-hate story ensues`,
        image: "images2/Slider/the-trial.jpg"
    }
    
];


const carousel = document.querySelector('.carousel');

let sliders = [];

let slideIndex = 0; //track the current slide

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // create DOM elements 

    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');


    // Attaching all the elements 

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
    carousel.appendChild(content);

    // setting up the images 

    imgElement.src = movies[slideIndex].image;
    slideIndex++


    // setting elements classnames 

    slide.className = 'slider';
    content.className = 'slide-content';
    h1.className = 'movie-title';
    p.className = 'movie-des';


    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
            }px)`;

    }

};


for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 3000);


//video cards

const videoCards = [...document.querySelectorAll('.video-card')];
videoCards.forEach(item => {
    item.addEventListener('mouseover', () => {
        let video = item.children[1];
        video.play();
    });

    item.addEventListener('mouseleave', () => {
        let video = item.children[1];
        video.pause();
    });

});

//card sliders
let cardContainers=[...document.querySelectorAll('.card-container')];
let preBtns=[...document.querySelectorAll('.pre-btn')];
let nxtBtns=[...document.querySelectorAll('.nxt-btn')];

cardContainers.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nxtBtns[i].addEventListener('click',()=>{
        item.scrollLeft+=containerWidth-400;

    })
    preBtns[i].addEventListener('click',()=>{
        item.scrollLeft=containerWidth+400;
    })
    
})







