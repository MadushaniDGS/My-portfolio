let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('sections');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
           navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
           }) 
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

const USERID = {
    name: null,
    identity: null,
    image: null,
    message: null,
    date: null
}

const userComment = document.querySelector(".usercomment");
const publishBtn = document.querySelector("#publish");
const comments = document.querySelector(".comments");
const userName = document.querySelector(".user");
const notify = document.querySelector(".notifyinput");

    userComment.addEventListener("input", e => {
        if(!userComment.value) {
            publishBtn.setAttribute("disabled", "disabled");
            publishBtn.classList.remove("abled")
        }else {
            publishBtn.removeAttribute("disabled");
            publishBtn.classList.add("abled")
        }
    })

    function addPost() {
        if(!userComment.value) return;
        USERID.name = userName.value;
        if(USERID.name === "Anonymous") {
            USERID.identity = false;
            USERID.image = "anonymous.png"
        }else {
            USERID.identity = true;
            USERID.image = "user.png"
        }

        USERID.message = userComment.value;
        USERID.date = new Date().toLocaleString();
        let published = 
        `<div class="parents">
            <img src="${USERID.image}">
            <div>
                <h1>${USERID.name}</h1>
                <p>${USERID.message}</p>
                <div class="engagements"><img src="like.png" id="like"><img src="share.png" alt=""></div>
                <span class="date">${USERID.date}</span>
            </div>    
        </div>`

        comments.innerHTML += published;
        userComment.value = "";
        publishBtn.classList.remove("abled")

        let commentsNum = document.querySelectorAll(".parents").length;
        document.getElementById("comment").textContent = commentsNum;

    }

    publishBtn.addEventListener("click", addPost);