import React,{useState} from "react"
import { Button, BUTTON_OPTIONS } from '../Button/index';
import icon from "./down-chevron.svg"

export const FeedbackForm=()=>{
 
    const [value,setVal]=useState({val:"",errorMsg:"",status:false,dropDownValue:""})
    const handleDropDown =()=>{
      setVal({val:value.val,errorMsg:"",status:!value.status})
    }
    const validationHandling=()=>{
      console.log(value.val)
      console.log(value.dropDownValue)
      if(!value.val||!value.dropDownValue){
          setVal({...value,errorMsg:"Problem field needed"})
      }
  }
    const handleValueFromDropDown=(e)=>{
      setVal({...value,status:false,dropDownValue:e.target.innerHTML})
    }
    return(
        <form className="relative mb-12 bg-c900" onSubmit={(e)=>e.preventDefault()}>
             
              <div className="absolute w-full h-16 flex justify-end mt-4">
                  <input type="text" defaultValue={value.dropDownValue} placeholder="Category" className="z-40 absolute w-full h-16 shadow-background text-c500 rounded-lg pl-4"/>
                  <div onClick={handleDropDown} className="absolute w-16 h-16 shadow-background text-c500 flex justify-center items-center z-40">
             
                <img src={icon} alt=""/>
              </div>
              </div>
              <div>
              {value.status?<div className={`absolute shadow-xl text-c500 w-full z-30 bg-white`}>
                <ul className=" mt-20 w-full">
                  <li 
                  onClick={handleValueFromDropDown}
                  className="pt-2 pb-2 pl-4 w-full hover:bg-c900 hover:pl-0 hover:text-black">Problem1</li>
                  <li onClick={handleValueFromDropDown} className="pt-2 pb-2 pl-4 w-full hover:bg-c900 hover:pl-0 hover:text-black">Problem2</li>
                  <li onClick={handleValueFromDropDown} className="pt-2 pb-2 pl-4 w-full hover:bg-c900 hover:pl-0 hover:text-black">Problem3</li>
                </ul>
              </div>:null}
              <textarea
              onChange={(e)=>{
                setVal({val:e.target.value,errorMsg:value.errorMsg})
                if(value.val===""){setVal({...value,errorMsg:"Problem field needed"})}
              }}
                defaultValue={value.val}
                className="absolute w-full h-16 shadow-background text-c500 rounded-lg pl-4 pt-4 resize-none block top-50 z-10"
                type="text"
                placeholder="Problem"
                style={{top:"6rem"}}
                
              ></textarea>
            {/* <p className="text-c200">{value.errorMsg}</p> */}
            <p className="text-c200" style={{padding:"12rem 0 0 0"}}>{value.errorMsg}</p>
            <div className="flex w-full h-full justify-center lg:justify-start">

              <Button handleClick={validationHandling} shadow={true} isRounded={true} backgroundColor={BUTTON_OPTIONS.BACKGROUND_COLOR.Blue} color={BUTTON_OPTIONS.COLOR.White} padding={BUTTON_OPTIONS.PADDING.BIG}>
                Send Your Feedback
              </Button>
              </div>
              </div>
            </form>
    )
}