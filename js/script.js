//função que adiciona tarefa
function addTask(){

    //titulo da tarefa
    const taskTitle  = document.querySelector('#task-title').value;
    //console.log(taskTitle)

    if (taskTitle) {
        
        //clona template
        const template = document.querySelector('.template');
        const newTask = template.cloneNode(true)//está copiando a li no html
        //adiciona título
        newTask.querySelector('.task-title').textContent = taskTitle;
        //remover as classes desnecessárias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');
        //adicionar tarefa na lista
        const list = document.querySelector('#task-list');
        list.appendChild(newTask);
        //adicionar o evento de remover
        const removeBtn = newTask.querySelector('.remove-btn').addEventListener('click', function(){
            removeTask(this);
        })
        //adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector('.done-btn').addEventListener('click', function(){
            completeTask(this)
        })
        //limpar texto
        document.querySelector('#task-title').value='';
    }
}

//função de remover tarefa
function removeTask(task){
    //parentNode está alcançando um elemento acima, ou seja o elemento pai
    task.parentNode.remove(true);
}
//função de completar tarefa
function completeTask(task){
    const taskToComplete = task.parentNode;
    //toggle verificará se tem ou não a classe especificada e irá adicionar na ausencia ou retirar na presença.  
    taskToComplete.classList.toggle('done')
}

//evento adicioanr tarefa
const addBtn = document.querySelector('#add-btn');

addBtn.addEventListener('click', function(e){
   
    e.preventDefault();//event.preventDefault(); como o nome já dá ideia previne o comportamento default do objeto, ou seja cancela o comportamento que os elementos geralmente tem na página.

    addTask();
})