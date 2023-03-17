
import './TodoList.css'
import ToDoInput from './ToDoInput'
import ToDoShowList from './ToDoShowList'
import { useState} from 'react';
function App() {
  const [currentList, setCurrentList] = useState([]);



// for add data in list
  const addList = (prop) => {
    setCurrentList([...currentList, prop]);
    alert('task added successfully   : )')
    console.log("add function call")

  }

// for delete data in list
  const deleteList = (listIndex) => {

    let newTodoList = [...currentList];

    newTodoList.splice(listIndex, 1);
    setCurrentList(newTodoList);
    console.log("Delete function call")
  }

  return (
    <>
      <div className='container'>
        <ToDoInput List={addList} />
        {currentList.map((ListTodo, i) => {
          return (
            <ToDoShowList key={i} index={i} item={ListTodo} dl={deleteList} />
          )
        })

        }
      </div>

    </>
  );
}



export default App;
