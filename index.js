const formEL = document.querySelector(".form")

const inputEL = document.querySelector(".input")

const ulEL = document.querySelector(".list")

let list = JSON.parse(localStorage.getItem("list"))

list.forEach(task=>{
  toDoList(task)
})

formEL.addEventListener("submit", (event)=>{
  event.preventDefault();
  console.log(inputEL.value);
  toDoList()
})

function toDoList(task){
  //Add new task
  let newTask = inputEL.value;
  if(task){
    newTask = task.name;
  }
  const liEl = document.createElement("li");

  if(task && task.checked){
    liEl.classList.add("checked");
  }
  liEl.innerText = newTask;
  ulEL.appendChild(liEl);
  inputEL.value = "";

  //Add checked button
  const checkBtnEl = document.createElement("div");
  checkBtnEl.innerHTML = '<i class="fa fa-check-square">';
  liEl.appendChild(checkBtnEl);

  //Add trash button
  const trashBtnEl = document.createElement("div");
  trashBtnEl.innerHTML = '<i class="fa fa-trash" ></i>';
  liEl.appendChild(trashBtnEl);

  //Add function for checked button
  checkBtnEl.addEventListener("click", ()=>{
    liEl.classList.toggle("checked");
    updateLocalStorage();
  });

  //Add function for checked button
  trashBtnEl.addEventListener("click", ()=>{
    liEl.remove();
    updateLocalStorage();

  });

  //Save date
  updateLocalStorage();
}

function updateLocalStorage(){
  const liELs = document.querySelectorAll("li")
  list = []
  liELs.forEach(liEL=>{
    list.push({
      name: liEL.innerText,
      checked: liEL.classList.contains("checked")
    })
  })
  localStorage.setItem("list", JSON.stringify(list))
}



