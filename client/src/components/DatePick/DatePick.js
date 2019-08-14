import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 

export default function DatePick (props) {
  console.log(props)

  return (      
    <div className="DatePick">
      <DatePicker
        onChange={(event) => props.setrented_from(event)}
        selected={props.rented_from}
      />
       <DatePicker
        onChange={(event) => props.setrented_to(event)}
        selected={props.rented_to}
         />
     </div>
    )

  }