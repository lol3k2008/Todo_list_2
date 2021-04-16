// -----------------DATE------------
const clock = document.querySelector(`.time`);
const Time = new Date();
const hours = Time.getHours()
const minutes = Time.getMinutes()


const getTime = () =>{
clock.textContent = `${hours}:${minutes}`;
if(minutes < 10){
clock.textContent =`${hours}: 0${minutes}`;
}
}

getTime()
setInterval(getTime,1000);



// ---------MAIN__-
const btnAdd = document.querySelector(`.btn_add`);
const ul = document.querySelector(`.task_area`);

// --------POPUP_ADD___-
const btnAddTask = document.querySelector(`.btn_addTask`);
const btnPopupAdd = document.querySelector(`.popup_add`);
const inputAdd = document.querySelector(`.input_add`);
const alert = document.querySelector(`.alert`);

// ------POPUP_EDIT___-
const popupEdit = document.querySelector(`.popup_edit`);
const inputEdit = document.querySelector(`.input_edit`);
const btnOk = document.querySelector(`.popup_edit_btn`);
const BtnAnuluj = document.querySelector(`.popup_anuluj_btn`);
let editedTodo;

const showPopupAdd = () =>{
    btnPopupAdd.classList.toggle(`showPopupAdd`);

}


// ---------------------_TASK_AREA_/_ADD_TASK--------------

let id = 0;
const addTask = () =>{
   if(inputAdd.value == ``){
    alert.textContent = `Musisz podać treść zadania!`;
   }else{
    id++;
    const newTask = document.createElement(`li`);
    ul.appendChild(newTask);
    newTask.classList.add('task');
    newTask.id = `${id}`
    newTask.innerHTML = `${inputAdd.value}
    <div class="tools_panel">

    <button class="btn btn_task btn_end"> 
    <i class="fas fa-check"></i>
    </button>
    
    <button class="btn btn_task btn_edit">
    <i class="far fa-edit"></i>
    </button>

    <button class="btn btn_task btn_delete">
    <i class="far fa-trash-alt"></i>
    </button>
    </div>
    `;
    alert.textContent = ``;
    inputAdd.value = '';
    showPopupAdd()
   }
}

// ----------------- __HANDLE__TASK__--------------

const handleTaskArea = e =>{
if(e.target.closest('button').classList.contains('btn_end')){
e.target.closest(`li`).classList.toggle(`CompleteTask`);
}

if(e.target.closest('button').classList.contains('btn_edit')){
    popupEdit.classList.toggle(`showPopupEdit`);
    editTask(e) 
}

if(e.target.closest('button').classList.contains('btn_delete')){
e.target.closest(`li`).remove();  
}

}

const showAndHidePopupEdit = () =>{
    popupEdit.classList.toggle(`showPopupEdit`);
}

const editTask = (e) =>{
const oldTask = e.target.closest(`li`).id;
editedTodo = document.getElementById(oldTask);
inputEdit.value = editedTodo.firstChild.textContent;
}

const acceptEditedTask = () =>{
    editedTodo.firstChild.textContent = inputEdit.value;
    showAndHidePopupEdit()
}


BtnAnuluj.addEventListener(`click`, showAndHidePopupEdit)
ul.addEventListener(`click`,handleTaskArea)
btnAddTask.addEventListener(`click`, addTask)
btnAdd.addEventListener(`click`, showPopupAdd)
btnOk.addEventListener(`click`, acceptEditedTask)