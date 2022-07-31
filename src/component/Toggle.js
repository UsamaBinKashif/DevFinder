import React, {useState} from 'react'
import { FaSun, FaMoon } from "react-icons/fa";

export default function Toggle() {
  const [darkMode, setDarkMode] = useState(false)
  const changeTheme =()=>{
    document.body.classList.toggle("dark")
    setDarkMode(!darkMode)
  }
  return (
    <>
    <div className="flex gap-2 justify-center font-semibold cursor-pointer" onClick={changeTheme}>
    <h4 className='mt-1.5'>{darkMode?"Light":"Dark"}</h4>
    <button className='mt-1'>{darkMode ? <FaMoon />:<FaSun />}</button>
    </div>
    </>
  )
}