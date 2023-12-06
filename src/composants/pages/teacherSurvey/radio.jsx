
import React from 'react'




export default function radio() {
  return (
    
    <div>
      
      <div>
          <p> 
            <span>1.</span> 
            Votre Professeur se sentait-il concerné par le fait question
            les étudiants apprennent leur cours?
          </p>
        <label>
          <input type="radio" name="myRadio" value="option1" />
          <span>Tres concernes</span> 
        </label>
        <label>
          <input
            type="radio"
            name="myRadio"
            value="option2"
            defaultChecked={true} 
          />
         <span>Pas tres concernes</span> 
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          <span>Pas du tout concernes</span> 
        </label>
     </div>
     
     <div className='radio2'>
          <p> 
            <span>2.</span> 
            
            Les explications de votre professeur(e) pendant le cours étaient-elles claires&nbsp;?
          </p>
        <label>
          <input type="radio" name="myRadio" value="option1" />
          <span>Tres claires</span> 
        </label>
        <label>
          <input
            type="radio"
            name="myRadio"
            value="option2"
           defaultChecked={true} 
          />
         <span>Pas tres claires</span> 
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          <span>Pas du tout claires</span> 
        </label>
     </div>
     
     <div className='radio2'>
          <p> 
            <span>3.</span> 
            
            Dans l'ensemble, Comment avez-vous trouvé le cours&nbsp;?
          </p>
        <label>
          <input type="radio" name="myRadio" value="option1" />
          <span>Tres bien</span> 
        </label>
        <label>
          <input
            type="radio"
            name="myRadio"
            value="option2"
           defaultChecked={true} 
          />
         <span>Bien</span> 
        </label>
        <label>
          <input type="radio" name="myRadio" value="option3" />
          <span>Mauvais</span> 
        </label>
     </div>

     <div className='radio2'>
          <p> 
            <span>4.</span> 
            
            Les explications de votre professeur(e) pendant le cours étaient-elles claires&nbsp;?
          </p>
        

    
     </div>

    </div>
  )
}
