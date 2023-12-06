import React, {useEffect} from 'react'
import './App.css'
import Asidebar from './composants/aside/sidebar'
import HomePage from './composants/pages/home/homePage'
import Studentinfo from './composants/pages/ListTeacher/ListTeacher'
import TeacherSurvey from './composants/pages/teacherSurvey/teacherSurvey'
import { Outlet } from 'react-router-dom'
import { Link, useNavigate } from "react-router-dom";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
    
  });

  return (
    <div className='container'>
        <div className='containerleft'>
           <Asidebar/>
        </div>
        <div className='containerrigth'>
           <Outlet/>
        </div>
       
    </div>
  )
}
