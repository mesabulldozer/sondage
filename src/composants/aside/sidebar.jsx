// import React, { useState } from 'react'  
import { bool } from 'prop-types';
import BtnLink from '../itemLink/btnLink';
import './sidebar.css'
import React, { useEffect, useState } from 'react';

export default function sidebar() {

  const [isLoggedIn, setIsLogin] = useState('');
  
  useEffect(() => {
    if (!localStorage.getItem("etudiant")) {
      setIsLogin('true');
    }
  });
 
  return (
  
      <div className='menu'>
        <BtnLink root ="/homePage" name ="Accueil"/>
        <BtnLink root= "/teacherSurvey" name ="Sondage Prof"/>
        <BtnLink root= "/infraSurvey"name ="Sondage Infrastruture"/>
        {isLoggedIn && <BtnLink root= "/login"name ="Login"/>}
        {!isLoggedIn && <BtnLink root= "/logout"name ="Logout"/>}
      </div>
  );
}
