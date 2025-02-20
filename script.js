let boxx1 = document.getElementById("boxx1");
let boxx2 = document.getElementById("boxx2");
let boxx3 = document.getElementById("boxx3");
let boxx4 = document.getElementById("boxx4");
let boxx5 = document.getElementById("boxx5");

let leftArrow = document.getElementById("left-arrow");
let rightArrow = document.getElementById("right-arrow");
let boxWidth = 340;
let currentBox = 1;

leftArrow.addEventListener('click', () => {
    if (currentBox > 1) {
        currentBox--;
        updateBoxes();
    }
});

rightArrow.addEventListener('click',
    () => {
        if (currentBox < 5) {
            currentBox++;
            updateBoxes();
        }
    });

function updateBoxes() {
    let boxWidth = 340;
    let leftPosition = (currentBox - 1) * boxWidth;
    boxx1.style.left = (leftPosition - 0 * boxWidth) + "px";
    boxx2.style.left = (leftPosition - 1 * boxWidth) + "px";
    boxx3.style.left = (leftPosition - 2 * boxWidth) + "px";
    boxx4.style.left = (leftPosition - 3 * boxWidth) + "px";
    boxx5.style.left = (leftPosition - 4 * boxWidth) + "px";

}


const faqQuestions1 = document.querySelectorAll(".faq1");

faqQuestions1.forEach((question1) => {
    question1.addEventListener('click', () => {
        const answer1 = question1.nextElementSibling;
        const chevron1 = question1.querySelector('i');
        question1.classList.toggle('active');
        if (answer1.style.display === 'block') {
            answer1.style.display = 'none';
            chevron1.classList.remove('fa-chevron-up');
            chevron1.classList.add('fa-chevron-down');
        }else {
            answer1.style.display = 'block';
            chevron1.classList.remove('fa-chevron-down');
            chevron1.classList.add('fa-chevron-up');
        }
    })
})
const faqQuestions2 = document.querySelectorAll(".faq2");
faqQuestions2.forEach((question2) => {
    question2.addEventListener('click', () => {
        const answer2 = question2.nextElementSibling;
        const chevron2 = question2.querySelector('i');
        question2.classList.toggle('active');
        if (answer2.style.display === 'block') {
            answer2.style.display = 'none';
            chevron2.classList.remove('fa-chevron-up');
            chevron2.classList.add('fa-chevron-down');
        }else {
            answer2.style.display = 'block';
            chevron2.classList.remove('fa-chevron-down');
            chevron2.classList.add('fa-chevron-up');
        }
    })
})

const faqQuestions3 = document.querySelectorAll(".faq3");
faqQuestions3.forEach((question3) => {
    question3.addEventListener('click', () => {
        const answer3 = question3.nextElementSibling;
        const chevron3 = question3.querySelector('i');
        question3.classList.toggle('active');
        if (answer3.style.display === 'block') {
            answer3.style.display = 'none';
            chevron3.classList.remove('fa-chevron-up');
            chevron3.classList.add('fa-chevron-down');
        }else {
            answer3.style.display = 'block';
            chevron3.classList.remove('fa-chevron-down');
            chevron3.classList.add('fa-chevron-up');
        }
    })
})

const faqQuestions4 = document.querySelectorAll(".faq4");
faqQuestions4.forEach((question4) => {
    question4.addEventListener('click', () => {
        const answer4 = question4.nextElementSibling;
        const chevron4 = question4.querySelector('i');
        question4.classList.toggle('active');
        if (answer4.style.display === 'block') {
            answer4.style.display = 'none';
            chevron4.classList.remove('fa-chevron-up');
            chevron4.classList.add('fa-chevron-down');
        }else {
            answer4.style.display = 'block';
            chevron4.classList.remove('fa-chevron-down');
            chevron4.classList.add('fa-chevron-up');
        }
    })
})

const faqQuestions5 = document.querySelectorAll(".faq5");
faqQuestions5.forEach((question5) => {
    question5.addEventListener('click', () => {
        const answer5 = question5.nextElementSibling;
        const chevron5 = question5.querySelector('i');
        question5.classList.toggle('active');
        if (answer5.style.display === 'block') {
            answer5.style.display = 'none';
            chevron5.classList.remove('fa-chevron-up');
            chevron5.classList.add('fa-chevron-down');
        }else {
            answer5.style.display = 'block';
            chevron5.classList.remove('fa-chevron-down');
            chevron5.classList.add('fa-chevron-up');
        }
    })
})

const faqQuestions6 = document.querySelectorAll(".faq6");
faqQuestions6.forEach((question6) => {
    question6.addEventListener('click', () => {
        const answer6 = question6.nextElementSibling;
        const chevron6 = question6.querySelector('i');
        question6.classList.toggle('active');
        if (answer6.style.display === 'block') {
            answer6.style.display = 'none';
            chevron6.classList.remove('fa-chevron-up');
            chevron6.classList.add('fa-chevron-down');
        }else {
            answer6.style.display = 'block';
            chevron6.classList.remove('fa-chevron-down');
            chevron6.classList.add('fa-chevron-up');
        }
    })
})

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {

    link.addEventListener("click", event => {
        event.preventDefault();

        const sectionId = link.getAttribute("href");

        const section = document.querySelector(sectionId);

        section.scrollIntoView({ behaviour: "smooth" })
    });
});

window.addEventListener('scroll', () => {
    const elementTen1 = document.querySelector(".navBtn2");
    const rect = elementTen1.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen1.classList.add("animateTen1");
    }
});
window.addEventListener('scroll', () => {
    const elementTen2 = document.querySelector(".navBtn1");
    const rect = elementTen2.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen2.classList.add("animateTen2");
    }
});
window.addEventListener('scroll', () => {
    const elementTen3 = document.querySelector(".navBtn3 button");
    const rect = elementTen3.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen3.classList.add("animateTen3");
    }
});
window.addEventListener('scroll', () => {
    const elementTen4 = document.querySelector(".icon");
    const rect = elementTen4.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen4.classList.add("animateTen4");
    }
});
window.addEventListener('scroll', () => {
    const elementTen5 = document.querySelector(".happy");
    const rect = elementTen5.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen5.classList.add("animateTen5");
    }
});
window.addEventListener('scroll', () => {
    const elementTen6 = document.querySelector("h1 span");
    const rect = elementTen6.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen6.classList.add("animateTen6");
    }
});
window.addEventListener('scroll', () => {
    const elementTen7 = document.querySelector(".from");
    const rect = elementTen7.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen7.classList.add("animateTen7");
    }
});
window.addEventListener('scroll', () => {
    const elementTen8 = document.querySelector(".order");
    const rect = elementTen8.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen8.classList.add("animateTen8");
    }
});
window.addEventListener('scroll', () => {
    const elementTen9 = document.querySelector(".ord1");
    const rect = elementTen9.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen9.classList.add("animateTen9");
    }
});
window.addEventListener('scroll', () => {
    const elementTen10 = document.querySelector(".buy");
    const rect = elementTen10.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen10.classList.add("animateTen10");
    }
});
window.addEventListener('scroll', () => {
    const elementTen11 = document.querySelector(".how");
    const rect = elementTen11.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen11.classList.add("animateTen11");
    }
});
window.addEventListener('scroll', () => {
    const elementTen12 = document.querySelector(".box1");
    const rect = elementTen12.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen12.classList.add("animateTen12");
    }
});
window.addEventListener('scroll', () => {
    const elementTen13 = document.querySelector(".box11");
    const rect = elementTen13.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen13.classList.add("animateTen13");
    }
});
window.addEventListener('scroll', () => {
    const elementTen14 = document.querySelector(".navbody2");
    const rect = elementTen14.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen14.classList.add("animateTen14");
    }
});
window.addEventListener('scroll', () => {
    const elementTen15 = document.querySelector(".stock1");
    const rect = elementTen15.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen15.classList.add("animateTen15");
    }
});
window.addEventListener('scroll', () => {
    const elementTen16 = document.querySelector(".stock2");
    const rect = elementTen16.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen16.classList.add("animateTen16");
    }
});
window.addEventListener('scroll', () => {
    const elementTen17 = document.querySelector(".with");
    const rect = elementTen17.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen17.classList.add("animateTen17");
    }
});
window.addEventListener('scroll', () => {
    const elementTen18 = document.querySelector(".boxp5");
    const rect = elementTen18.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen18.classList.add("animateTen18");
    }
});
window.addEventListener('scroll', () => {
    const elementTen19 = document.querySelector(".boxp7");
    const rect = elementTen19.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen19.classList.add("animateTen19");
    }
});
window.addEventListener('scroll', () => {
    const elementTen20 = document.querySelector(".boxp");
    const rect = elementTen20.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen20.classList.add("animateTen20");
    }
});
window.addEventListener('scroll', () => {
    const elementTen21 = document.querySelector(".trad");
    const rect = elementTen21.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen21.classList.add("animateTen21");
    }
});
window.addEventListener('scroll', () => {
    const elementTen22 = document.querySelector(".trad2");
    const rect = elementTen22.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen22.classList.add("animateTen22");
    }
});
window.addEventListener('scroll', () => {
    const elementTen23 = document.querySelector(".trad3");
    const rect = elementTen23.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen23.classList.add("animateTen23");
    }
});
window.addEventListener('scroll', () => {
    const elementTen24 = document.querySelector(".trad4");
    const rect = elementTen24.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen24.classList.add("animateTen24");
    }
});
window.addEventListener('scroll', () => {
    const elementTen25 = document.querySelector(".icon1 img");
    const rect = elementTen25.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen25.classList.add("animateTen25");
    }
});
window.addEventListener('scroll', () => {
    const elementTen26 = document.querySelector(".icon1");
    const rect = elementTen26.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen26.classList.add("animateTen26");
    }
});
window.addEventListener('scroll', () => {
    const elementTen27 = document.querySelector(".icon2");
    const rect = elementTen27.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen27.classList.add("animateTen27");
    }
});
window.addEventListener('scroll', () => {
    const elementTen28 = document.querySelector(".icon3");
    const rect = elementTen28.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen28.classList.add("animateTen28");
    }
});
window.addEventListener('scroll', () => {
    const elementTen29 = document.querySelector(".icon4");
    const rect = elementTen29.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen29.classList.add("animateTen29");
    }
});
window.addEventListener('scroll', () => {
    const elementTen30 = document.querySelector(".icon5");
    const rect = elementTen30.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen30.classList.add("animateTen30");
    }
});
window.addEventListener('scroll', () => {
    const elementTen32 = document.querySelector(".icon6");
    const rect = elementTen31.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen31.classList.add("animateTen31");
    }
});
window.addEventListener('scroll', () => {
    const elementTen32 = document.querySelector(".icon7");
    const rect = elementTen32.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen32.classList.add("animateTen32");
    }
});
window.addEventListener('scroll', () => {
    const elementTen33 = document.querySelector(".test2");
    const rect = elementTen33.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen33.classList.add("animateTen33");
    }
});
window.addEventListener('scroll', () => {
    const elementTen34 = document.querySelector("#boxx1");
    const rect = elementTen34.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen34.classList.add("animateTen34");
    }
});
window.addEventListener('scroll', () => {
    const elementTen34a = document.querySelector("#boxx2");
    const rect = elementTen34a.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen34a.classList.add("animateTen34a");
    }
});
window.addEventListener('scroll', () => {
    const elementTen34b = document.querySelector("#boxx3");
    const rect = elementTen34b.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen34b.classList.add("animateTen34b");
    }
});
window.addEventListener('scroll', () => {
    const elementTen34c = document.querySelector("#boxx4");
    const rect = elementTen34c.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen34c.classList.add("animateTen34c");
    }
});
window.addEventListener('scroll', () => {
    const elementTen34d = document.querySelector("#boxx5");
    const rect = elementTen34d.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen34d.classList.add("animateTen34d");
    }
});
window.addEventListener('scroll', () => {
    const elementTen34e = document.querySelector("#boxx6");
    const rect = elementTen34e.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen34e.classList.add("animateTen34e");
    }
});
window.addEventListener('scroll', () => {
    const elementTen34 = document.querySelector("#boxx1");
    const rect = elementTen34.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen34.classList.add("animateTen34");
    }
});
window.addEventListener('scroll', () => {
    const elementTen35 = document.querySelector(".freq2");
    const rect = elementTen35.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen35.classList.add("animateTen35");
    }
});
window.addEventListener('scroll', () => {
    const elementTen36 = document.querySelector(".faq1");
    const rect = elementTen36.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen36.classList.add("animateTen36");
    }
});
window.addEventListener('scroll', () => {
    const elementTen37 = document.querySelector(".faq1 p");
    const rect = elementTen37.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen37.classList.add("animateTen37");
    }
});
window.addEventListener('scroll', () => {
    const elementTen38 = document.querySelector(".faq2");
    const rect = elementTen38.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen38.classList.add("animateTen38");
    }
});
window.addEventListener('scroll', () => {
    const elementTen39 = document.querySelector(".faq3");
    const rect = elementTen39.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen39.classList.add("animateTen39");
    }
});
window.addEventListener('scroll', () => {
    const elementTen40 = document.querySelector(".faq4");
    const rect = elementTen40.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen40.classList.add("animateTen40");
    }
});
window.addEventListener('scroll', () => {
    const elementTen41 = document.querySelector(".faq5");
    const rect = elementTen41.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen41.classList.add("animateTen41");
    }
});
window.addEventListener('scroll', () => {
    const elementTen42 = document.querySelector(".faq6");
    const rect = elementTen42.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen42.classList.add("animateTen42");
    }
});
window.addEventListener('scroll', () => {
    const elementTen43 = document.querySelector(".faq7");
    const rect = elementTen43.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen43.classList.add("animateTen43");
    }
});
window.addEventListener('scroll', () => {
    const elementTen44 = document.querySelector(".faqBtn");
    const rect = elementTen44.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen44.classList.add("animateTen44");
    }
});
window.addEventListener('scroll', () => {
    const elementTen45 = document.querySelector(".connect1");
    const rect = elementTen45.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen45.classList.add("animateTen45");
    }
});
window.addEventListener('scroll', () => {
    const elementTen47 = document.querySelector(".connect6");
    const rect = elementTen47.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen47.classList.add("animateTen47");
    }
});
window.addEventListener('scroll', () => {
    const elementTen48 = document.querySelector(".revol2");
    const rect = elementTen48.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen48.classList.add("animateTen48");
    }
});
window.addEventListener('scroll', () => {
    const elementTen49 = document.querySelector(".revol3");
    const rect = elementTen49.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen49.classList.add("animateTen49");
    }
});
window.addEventListener('scroll', () => {
    const elementTen50 = document.querySelector(".revol4");
    const rect = elementTen50.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen50.classList.add("animateTen50");
    }
});
window.addEventListener('scroll', () => {
    const elementTen51 = document.querySelector(".freq1");
    const rect = elementTen51.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen51.classList.add("animateTen51");
    }
});
window.addEventListener('scroll', () => {
    const elementTen52 = document.querySelector(".test3 button");
    const rect = elementTen52.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen52.classList.add("animateTen52");
    }
});

window.addEventListener('scroll', () => {
    const elementTen53 = document.querySelector(".star");
    const rect = elementTen53.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen53.classList.add("animateTen53");
    }
});

window.addEventListener('scroll', () => {
    const elementTen54 = document.querySelector(".starImg");
    const rect = elementTen54.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen54.classList.add("animateTen54");
    }
});

window.addEventListener('scroll', () => {
    const elementTen55 = document.querySelector(".star2 p");
    const rect = elementTen55.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen55.classList.add("animateTen55");
    }
});
window.addEventListener('scroll', () => {
    const elementTen56 = document.querySelector(".boxxx");
    const rect = elementTen56.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen56.classList.add("animateTen56");
    }
});
window.addEventListener('scroll', () => {
    const elementTen57 = document.querySelector(".bobyVideop1");
    const rect = elementTen57.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen57.classList.add("animateTen57");
    }
});
window.addEventListener('scroll', () => {
    const elementTen58 = document.querySelector(".bodyVideop2");
    const rect = elementTen58.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen58.classList.add("animateTen58");
    }
});
window.addEventListener('scroll', () => {
    const elementTen59 = document.querySelector(".bodyVideo1");
    const rect = elementTen59.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen59.classList.add("animateTen59");
    }
});
window.addEventListener('scroll', () => {
    const elementTen60 = document.querySelector(".bodyVideop4");
    const rect = elementTen60.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen60.classList.add("animateTen60");
    }
});
window.addEventListener('scroll', () => {
    const elementTen61 = document.querySelector(".test");
    const rect = elementTen61.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen61.classList.add("animateTen61");
    }
});
window.addEventListener('scroll', () => {
    const elementTen62 = document.querySelector(".boxp1");
    const rect = elementTen62.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen62.classList.add("animateTen62");
    }
});
window.addEventListener('scroll', () => {
    const elementTen63 = document.querySelector(".boxp2");
    const rect = elementTen63.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen63.classList.add("animateTen63");
    }
});

window.addEventListener('scroll', () => {
    const elementTen64 = document.querySelector(".connect2");
    const rect = elementTen64.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen64.classList.add("animateTen64");
    }
});

window.addEventListener('scroll', () => {
    const elementTen65 = document.querySelector(".connect3");
    const rect = elementTen65.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen65.classList.add("animateTen65");
    }
});

window.addEventListener('scroll', () => {
    const elementTen66 = document.querySelector(".connect7");
    const rect = elementTen66.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen66.classList.add("animateTen66");
    }
});

window.addEventListener('scroll', () => {
    const elementTen67 = document.querySelector(".connect5");
    const rect = elementTen67.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen67.classList.add("animateTen67");
    }
});

window.addEventListener('scroll', () => {
    const elementTen68 = document.querySelector(".line");
    const rect = elementTen68.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen68.classList.add("animateTen68");
    }
});

window.addEventListener('scroll', () => {
    const elementTen69 = document.querySelector(".footer2");
    const rect = elementTen69.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen69.classList.add("animateTen69");
    }
});

window.addEventListener('scroll', () => {
    const elementTen70 = document.querySelector(".connect8");
    const rect = elementTen70.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen70.classList.add("animateTen70");
    }
});
window.addEventListener('scroll', () => {
    const elementTen71 = document.querySelector(".connect9");
    const rect = elementTen71.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen71.classList.add("animateTen71");
    }
});
window.addEventListener('scroll', () => {
    const elementTen72 = document.querySelector(".connect10 p");
    const rect = elementTen72.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen72.classList.add("animateTen72");
    }
});
window.addEventListener('scroll', () => {
    const elementTen73 = document.querySelector(".line2 hr");
    const rect = elementTen73.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen73.classList.add("animateTen73");
    }
});
window.addEventListener('scroll', () => {
    const elementTen74 = document.querySelector(".footer5");
    const rect = elementTen74.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        elementTen74.classList.add("animateTen74");
    }
});
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu")

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open")
    const isOpen = dropDownMenu.classList.contains("open")

    toggleBtnIcon.classList = isOpen
        ? "fa-solid fa-xmark"
        : "fa-solid fa-bars"
}

