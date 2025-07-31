import { use, useState } from 'react'
import './App.css'
import ModalForm from './components/ModalForm'
import Navbar from './components/Navbar'
import Tablelist from './components/Tablelist'

function App() {
  const [isOpen, setisOpen] = useState(false);
  const [ModalMode, setModalMode] = useState('add');

  const handleOpen = (mode) =>{
    setisOpen(true);
  }

  const handleSubmit = () =>{
    if(ModalMode === 'add'){
      console.log("modal mode add")
    }
    else{
      console.log("modal mode edit")
    }
  }

  return (
    <>
    <Navbar onOpen = {() => handleOpen('add')}/>
    <Tablelist />
    <ModalForm isOpen = {isOpen} onClose = {() => setisOpen(flase)}/>
    </>
  )
}

export default App
