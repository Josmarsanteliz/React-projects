import React, { useState, useEffect } from 'react'
import List from './List';
import Alert from './Alert';

function App() {
  const [name,setName] = useState('');
  const [list,setList] = useState([]);
  const [isEditing,setEditing] = useState(false);
  const [editID,setEditID] = useState(null);
  const [alert,setAlert] = useState({show:false,msg:'',type:''});

  const handleSubmit  = (e) => {
    e.preventDefault();
    if (!name) {
      //display alert
      showAlert(true,'danger','please enter value')
    }
    else if(name && isEditing){
      //deal with edit
    }
    else {
      showAlert(true,'success', 'item added to the list')
      const newItem = {id: new Date().getTime().toString(), title: name}
      setList([...list,newItem])
      setName('');
    }
  }
  //remove items
  const removeItem = (id) => {
    showAlert(true,'danger', 'deleted item')
    setList(list.filter((item)=> item.id !== id))
  }
  //clear all

  const handleClearAll = () => {
    showAlert(true,'danger','empty list')
    setList('');
    
  }
  //editing
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setEditing(true);
    setEditID(id);
    setName(specificItem.title)
  }
  //funcion for alert
  const showAlert = (show=false,type='',msg='') => {
    setAlert({show:show,type,msg})
  }
  return <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
      <h3>Grocery bud</h3>
      <div className="form-control">
        <input type="text" className='grocery' placeholde='e.g eggs'  onChange={(e)=> setName(e.target.value)}/>
        <button type="submit" className='submit-btn'>{isEditing? 'edit': 'submit'}</button>
      </div>
    </form>
    {list.length > 0 &&(
     <div className='grocery-container'>
    <List items={list} removeItem={removeItem} editItem={editItem}/>
    <button className='clear-btn' onClick={()=> handleClearAll()}>clear list</button>
    
    </div>
    )}
   
    </section>
}

export default App