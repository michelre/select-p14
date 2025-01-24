import React, { useState } from 'react'
import Caret from './caret.svg'
import PropTypes from 'prop-types';
import './select.css'

const Select = ({options, onChange, defaultValue, placeholder}) => {
   const [isListOpen, setIsListOpen] = useState(false);

   const handleSelect = (e, value) => {
      e.preventDefault()
      onChange(value)
      setIsListOpen(false); // ferme la liste après la sélection
   }


   return <div className="custom-select" onClick={() => setIsListOpen(!isListOpen)}>
            
   <div className="select-selected">
     {defaultValue || placeholder}
     <img src={Caret} alt="caret" className="select-caret" />
   </div>
   {isListOpen && (
     <ul className="select-items">
       {options.map((s) => <li key={s.id}>
         <a href="" onClick={(e) => handleSelect(e, s.value)}>{s.value}</a>
       </li>)}                
     </ul>
   )}
   
 </div>
}

Select.propTypes = {
   options: PropTypes.array,
   onChange: PropTypes.func,
   defaultValue: PropTypes.string,
   placeholder: PropTypes.string,
}


export default Select;