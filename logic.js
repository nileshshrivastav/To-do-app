const inputBox = document.querySelector('.inputField input');
const addbtn = document.querySelector('.inputField button')
const todoList = document.querySelector('.todoList')
inputBox.onkeyup = ()=>{
    let userData = inputBox.value;
    if(userData.trim() != 0){
        addbtn.classList.add("active");
    }else{
        addbtn.classList.remove("active")
    }
}
showTasks();

addbtn.onclick = () =>{
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("new Todo");
    if (getLocalStorage == null) {
        listArr = [];
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("new Todo", JSON.stringify(listArr));
    showTasks();
}

function showTasks(){
    let getLocalStorage = localStorage.getItem("new Todo");
    if(getLocalStorage == null){
    listArr =[]
    }else{
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNum = document.querySelector('.pendingNum');
    pendingNum.textContent = listArr.length;
    let newliTag = '';
    listArr.forEach((element, index) => {
        newliTag += `<li>${element} <span onclick= "deleteTask(${index})";><i class="fas fa-trash"></i>X</span></li>`;
        
    });
    todoList.innerHTML = newliTag;
    inputBox.value =''; 
}
function deleteTask(index){
    let getLocalStorage = localStorage.getItem("new Todo"); 
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index,1 )
    localStorage.setItem("new Todo", JSON.stringify(listArr));
    showTasks();
}