var menu = document.querySelector(".menu")
var sideBar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
var iconList = document.querySelector('.icon-list')
var arrowIcon= document.querySelectorAll(".icon i");
var exporeIcon = document.querySelectorAll(".explore-icon");
var hidepara = document.querySelector(".hide-view");
var show = document.getElementById("show-more");

menu.onclick = function(){
    sideBar.classList.toggle("small-sidebar")
    container.classList.toggle("large-container")
}


let isDragging = false;

const handleIcons =() => {
    let scrollVal= iconList.scrollLeft;
    arrowIcon[0].parentElement.style.display = scrollVal > 0 ? "flex" : "none";
}
arrowIcon.forEach(icon =>{
 icon.addEventListener("click", () =>{
    // if clicked icon is left reduce 350 from list
    iconList.scrollLeft += icon.id === "left" ? -350 : 350;
    handleIcons();

 })
})


const dragging = (e) =>{
    if(!isDragging) return;
    iconList.classList.add("dragging");
    iconList.scrollLeft -= e.movementX;
}
const dragStop = () =>{
    isDragging =false;
    iconList.classList.remove("dragging");
}
iconList.addEventListener("mousedown",() => isDragging=true);
iconList.addEventListener("mousemove",dragging);
iconList.addEventListener("mouseup", dragStop);

// creating input list for suggestions

let availableKeywords = [
    'HTML',
    'CSS',
    'Easy Tutorials',
    'Web design tutorials',
    'Javascript',
    'Where to learn coding online',
    'how to create website',
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.getElementById("input");

inputBox.onkeyup = function(){
    let result =[]
    let input = inputBox.Value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());

        });
        console.log(result);
    }
    display(result);
}

function display(result){
    const content = result.map((list)=>{
        return "<li>" + list + "</li>"
    });
    resultBox.innerHTML = "<ul>" + content + "</ul>";
}



