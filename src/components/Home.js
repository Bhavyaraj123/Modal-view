import React, { useState } from 'react'
import Modal from './Modal'
import { useLocation, useNavigate } from 'react-router-dom'

const Home = () => {
    const [modal, setModal] = useState(true)
    const HandleSubmit =()=>{
    setModal(false)
    }
  return (
    <>
    <div className='div-container open-closeform'>

           { modal ?<button onClick={HandleSubmit} className='open-button'>Submit</button>:" "}
          {!modal ?<Modal/>:null}
    </div>
    </>
  )
}

export default Home