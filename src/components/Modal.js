import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "./Home";

const Modal = (props) => {
const [modal,setModal]=useState(true);
const [view, setview] = useState(false)
const [first, setfirst] = useState(null)
const [second, setsecond] = useState(null)
const [third, setthird] = useState(null)
const [fourth, setfourth] = useState(null)
const [fifth, setFifth] = useState(null)
const [sixth, setSixth] = useState(null)
const HandleSubmit=()=>{
  setfirst('')
  setsecond('')
  setthird('')
  setfourth('')
  setFifth('')
  setSixth('')
}
    const handleCancel=()=>{

       setModal(false)
    }
  return (

    <>    
    {!modal ? <Home/>:<div className="main-wrapper">
      <form action="" onSubmit={HandleSubmit}>
      <div className="main-container">
        <div className="first-div">
          <h2 className="heading-1">Download Paper </h2>
          <button className="button-cross" onClick={handleCancel}>
            <h2 className="heading-1 cross">×</h2>
          </button>
        </div>

        {/* cardss */}
        <div className="cards-wrapper">
          <div className="card-1">
            <h2 className="heading-Logo">
              <span className="span-s">S</span> Subject Code:{" "}
              <span className="span-s-2">4110343181</span>
            </h2>
            <h2 className="heading-1 card-heading ">
              Indian Knowledge System -Yoga
            </h2>
            <div className="date-container">
              <h3>
                Exam Date <a href="">01-01-2025</a>
              </h3>
            </div>
          </div>

          <div className="card-2">
            <h2 className="c2-head">Paper Print Requirement</h2>
            <div className="c2-insider">
              <div className="insider-1">
                <h2>iconn</h2>
                <h1 className="num-in1">58</h1>
                <h3 className="txt-in1">Paper Set</h3>
              </div>

              <div className="insider-2">
                <h2 className="inn2-h">
                  <input type="radio" />
                  57 Eligible Student{" "}
                </h2>
                <h2 className="inn3-h">
                  <input type="radio" />1 Extra seat{" "}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* types */}

        <div className="type-container">
          <h2 className="type-head">Select Download Type </h2>
          <div className="main-type-wrapper">
            <div className="type-1">
                <div className="boc">
                    <div className="inside-box"></div>
                </div>
                <h2 className="type-text">Without Basic Information  </h2>
            </div>

            <div className="type-2">
            <div className="boc  box-2">
                    <div className="inside-box"></div>
                </div>
                <h2 className="type-text">Without Basic Information  </h2>
            </div>
          </div>
        </div>


        {/* category */}
        <div className="category-container">
            <div></div>
            <h2 className="main-c-head">Select Required Information</h2>
            <div className="category-wrapper">
            <div className="cat-1">
           <div className="chek">
            <h2>✓</h2>
           </div>
           <h2 className="st-name">student name </h2>
        </div>
        <div className="cat-2 cat-1">
        <div className="chek chek-2">
            <h2>✓</h2>
           </div>
           <h2 className="st-name">Enrollment Number</h2>
        </div>
        <div className="cat-3 cat-1">
        <div className="chek">
            <h2>✓</h2>
           </div>
           <h2 className="st-name">Barcode </h2>
        </div>
            </div>
       
        </div>

        <div className="border"> 
        </div>

        <div className="footer ">
            <h2 className="email-text">Enter the OTP sent to priyam@skill.college <span className="span-12">|</span></h2>
            <a href="" className="anchor"><h3>Resend OTP</h3></a>
        </div>
      <div className="boxes">
         <input type="num" className="box1" value={first}  onChange={(e)=>setfirst(e.target.value)}/>
         <input type="num" className="box1" value={second} onChange={(e)=>setsecond(e.target.value)}/>
         <input type="num" className="box1" value={third} onChange={(e)=>setthird(e.target.value)}/>
         <input type="num" className="box1" value={fourth} onChange={(e)=>setfourth(e.target.value)}/>
         <input type="num" className="box1" value={fifth} onChange={(e)=>setFifth(e.target.value)}/>
         <input type="num" className="box1" value={sixth} onChange={(e)=>setSixth(e.target.value)}/>
        </div>
        

        <div className="download">
            <button className="btn-dn">Download Paper </button>
        </div>
      </div>
      </form>
    </div>}
    
    </>
  );
};

export default Modal;
