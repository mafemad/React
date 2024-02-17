import React, {useState} from "react";

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){

        setNewTask(event.target.value);

    }

    function addTask(){
        
        if(newTask.trim() !==""){
        
        setTasks(t =>[...t, newTask]);
        setNewTask("");

        }
    }

    function deleteTask(index){

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

    }

    function moveTaskUp(index){
       
        if(index > 0){

        const updatedTasks = [...tasks];
        [updatedTasks[index], updatedTasks[index - 1]] =[updatedTasks[index - 1],updatedTasks[index]];
        setTasks(updatedTasks); 

        }
    }

    function moveTaskDown(index){

        if(index < tasks.length - 1){

            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =[updatedTasks[index + 1],updatedTasks[index]];
            setTasks(updatedTasks); 
            
            }

    }

    return(
        <div className="to-do-list">
            <h1>To Do List</h1>

            <div>
                <input type="text"
                placeholder="insira uma tarefa"
                value ={newTask}
                onChange={handleInputChange}/>

                <button className="add-button" onClick={addTask}>Adicionar</button>
            </div>

            <ol>
                {tasks.map((task, index)=>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete" onClick={() => deleteTask(index)}>Deletar</button>
                        <button className="move" onClick={() => moveTaskUp(index)}>Subir☝️</button>
                        <button className="move" onClick={() => moveTaskDown(index)}>Descer👇</button>
                    </li>

                )}
            </ol>
        </div>
    )


}

export default ToDoList;