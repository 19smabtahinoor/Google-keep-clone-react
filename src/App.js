import './App.css';
import Header from './Header'
import Footer from './Footer'
import Createnote from './Createnote'
import Note from './Note'
import React,{useState} from 'react'

function App() {
  const [addItem,setAddItem] = useState([])
  const addNote = (note) => {
    setAddItem((preValue) => {
      return[
        ...preValue,note
      ]
    })

    if(note.title === '' || note.content === ''){
      alert('You must write something')
      setAddItem([])
    }
  }
  
  const onDelete = (id) => {
    setAddItem( (oldData) => {
     return oldData.filter( (currentValue,indx) => {
        return indx !== id
      })
    })
  }

  return (
    <>
      <div className="container">
        <Header />
        <div className="main_note">
          <Createnote passNote = {addNote}/>

{          addItem.map( (value,index) => {
            return(
              <Note
                key={index}
                id={index}
                titles={value.title}
                contents={value.content}
                deleteItem={onDelete}
              />
            )
            })
}
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
