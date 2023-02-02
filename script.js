import data from "./data.js";
const TodoContainer = document.getElementsByClassName("todo-container")[0];
const hasib = document.getElementsByClassName("hasib")[0]


const CreteElement = (tagName, attr, attrValue) => {
  const element = document.createElement(tagName);
  element.setAttribute(attr, attrValue);
  return element;
};

data.forEach((groupTodo) => {
  const TodoGroup = CreteElement("div", "class", "todo-group");
  TodoGroup.innerHTML = `
    <div class="todo-group-hade d-flex justify-content-between align-items-center">
        <div class="todo-group-left d-flex align-items-center">
            <div class="heding-icon" style="background-color:${groupTodo.color}";></div>
            <h3>${groupTodo.heading}</h2>
        </div>
        <div class="todo-group-right">
            <h3>0</h3>
        </div>
    </div>`
  ;

  groupTodo?.cards.forEach((todoItem) => {
    const TodoItem = CreteElement("div", "class", "todo-item");
    TodoItem.innerHTML =`
    <div class="todo-item">
          <div class="todo-hade d-flex justify-content-between align-items-center">
            <div class="client d-flex justify-content-between align-items-center">
              <img src="${todoItem.clientPhoto}" alt="client photo">
              <h4>${todoItem.clientName}</h4>
            </div>
            <div class="proflie d-flex justify-content-between align-items-center">
              <img src="${todoItem.profilePhoto}" alt="profile photo">
              <h4>${todoItem.profileName}</h4>
            </div>
          </div>
          <div class="todo-ditels d-flex justify-content-between align-items-center">
            <div class="todo-ditels-left d-flex align-items-center">
              <i class="fa-solid fa-database"></i> <p>${todoItem.task}</p>
            </div>
            <div class="todo-ditels-right d-flex align-items-center">
              <i class="fa-solid fa-list-check"></i> <h4>${todoItem.taskCount}</h4>
            </div>
          </div>
          <div class="todo-footer d-flex justify-content-between align-items-center">
            <img src="${todoItem.clientPhoto}" alt="assigned Person">
            <img src="${todoItem.clientPhoto}" alt="assigned Person">
            <div class="comment d-flex align-items-center">
              <i class="fa-brands fa-weixin"></i><h4>15</h4>
            </div>
            <div class="attachments d-flex align-items-center">
              <i class="add_file fa-solid fa-paperclip"></i>
              <h4>25</h4>
            </div>
            <div class="date d-flex align-items-center">
              <i class="fa-solid fa-calendar-days"></i>
              <h4>30-12-2022</h4></div>
          </div>
    `
    
    TodoGroup.appendChild(TodoItem);
  }); 

  TodoContainer.appendChild(TodoGroup);
});

document.getElementsByClassName("add_file")[0].addEventListener("click", ()=>{
  const ModelContainer = CreteElement("div", "class", "model-container");
  ModelContainer.innerHTML = `
    <div class="model">
    <i class="model-remove fa-solid fa-x"></i>
    </div>`
  hasib.appendChild(ModelContainer);
});

document.getElementsByClassName("model-remove")[0].addEventListener("click", ()=>{
  hasib.remove()
})


// let TodoItem = ""
// console.log(data);


const fileInput = document.querySelector("input"); 
document.querySelector("form").addEventListener("click", ()=>{
  fileInput.click()
})
var fileName = ["ami", "tomi"]
fileInput.onchange = ({target}) =>{
  let file = target.files[0]
  fileName.push(file.name)
  console.log(fileName);
}

const uploadAria = document.getElementById("upload-aria");
fileName.forEach((files)=>{
  const UplodeData = CreteElement("div", "class", "upload");
  UplodeData.innerHTML = `
  <i class="fas fa-file-alt"></i>
  <h2>${files}</h2>
  `
  console.log(UplodeData);
  uploadAria.appendChild(UplodeData);
  
});
