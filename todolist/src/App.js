
import {React,useState} from 'react';
import Todoform from './components/Todoform';
import Todo from './components/Todo';

function App() {

  //adding data in state then add them in realdom in browser.. so use usestate hook to manage data before displayed in dom

  let[todos,setTodos]=useState([])//todos => empty arr to determine its complete task or not so change todos that is completed or not
    //so todos has obj added by props that will be sent in todoform

const addTodo= (todo)=>{//todo => obj ele will be inside todo form
 setTodos([todo,...todos])//add to the arr obj => from add todo fn that comes from  props onsubmit comes ,
//  from component bt3e ,comes from  input ..  todos =>to save ahafez the tasks im entering them
}

const [todoToShow,setTodoToShow] = useState("all");// show all the tasks
const [toggleAllComplete,setToggleAllComplete] = useState(true); //  new state => complete todos

const handleDelete = (id) =>{
  setTodos(
      todos.filter(todo => todo.id !== id)// if id exists inside todos so filter it w the others remain
  )
}

const toggleComplete = id =>{
  setTodos(todos.map(todo =>{
      if (todo.id === id){// id sent like the one in todo
          // suppose to update
          return {
              ...todo,// obj has data inside todo
              complete : ! todo.complete
          };
       }else{
           return todo
       }
  }))
}

const updateTodoToShow = (s)=>{//string=> wheather its complete or not

  setTodoToShow(s)
}
if(todoToShow === "active"){
  todos = todos.filter(todo => (!todo.complete)); 
  
}else if(todoToShow === "complete"){
  todos = todos.filter(todo => (todo.complete));
}


const removeAllTodosThatAreComplete = () =>{
  setTodos(//edit state val
      todos.filter(todo => !todo.complete)// filter data completed
  )

}

  return (
    <div className="App">
      <div className="todo-container">
      <h1>Todo List</h1>
     <Todoform onSubmit={addTodo} />
     {
      todos.map((todo)=>(
     <Todo key={todo.id} todo ={todo} 
     onDelete={()=> handleDelete(todo.id)}
     toggleComplete={()=> toggleComplete(todo.id)}//what im clicking on => from todo in my arr or not
     />

      )
      )
     }
     
     <div className='btnn'>
                <button className='update-btn btn ' onClick={()=> updateTodoToShow("all")}>all</button>
                <button className='update-btn btn'onClick={()=> updateTodoToShow("active")}>active</button>
                <button className='update-btn btn'onClick={()=> updateTodoToShow("complete")}>complete</button>
            </div>

            <div className='remove'>
            <button className='all-btn btn' onClick={removeAllTodosThatAreComplete}>Remove all complete todos</button> 
            <button className='all-btn btn' onClick={
                    ()=>{
                        setTodos(
                            todos.map(todo =>({
                                ...todo,
                                complete : toggleAllComplete,
                                //edit complete val makes it takes val from toggleallcomp ..if   false so will become true ..viceversa
                            }
                            ))
                        )
                        setToggleAllComplete(
                            !toggleAllComplete//to take val incontrast with the one already exists
                        )
                         }}>Toggle all complete : {`${toggleAllComplete}`}</button> 
                         {/* //put  state name to gimme its val */}
      </div>
</div>

    </div>
  );
}

export default App;
