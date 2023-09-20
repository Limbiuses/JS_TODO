const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const li = document.getElementsByTagName("li");


function addTask() {
    if (inputBox.value === "") {
        alert("Вы не ввели текст!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#9883";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("check");
        let Lil = document.querySelectorAll('.check');
        
         Lil.forEach((el) => {

            listContainer.appendChild(el);
  
        });
        saveData(); 
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false
);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
function clearList() {
    listContainer.innerHTML = "";
    saveData();
}
function clearLastEl() {
    let lastEl = li[li.length - 1];
    listContainer.removeChild(lastEl);
    saveData();
}

function clearFirstEl() {
    let firstEl = li[0];
    listContainer.removeChild(firstEl);
    saveData();
}

let flg = true;

function SelectOdd() {
    document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
        if (i % 2 !== 0) {
            li[i].style.background = flg ? "#c464eb" : "";
        }
    }
    flg = !flg;
}

let flg1 = true;
function SelectEven() {
    document.querySelectorAll("li");
    for (let i = 0; i < li.length; i++) {
        if (i % 2 == 0) {
            li[i].style.background = flg1 ? "#b910b9" : "";
        }
    }
    flg1 = !flg1;
}

showTask();

// localStorage.clear();
// localStorage.remove("Complite");
