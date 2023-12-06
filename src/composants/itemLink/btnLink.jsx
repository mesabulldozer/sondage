import React from 'react'
import './btnLink.css'
import { Link } from 'react-router-dom';
export default function btnLink(props) {
  
  return (
    <div >
        <Link to={props.root} className='btnlink' type="submit">{props.name}</Link>
    </div>
  )
}
