import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 

export default function DatePick (props) {

  return (      
    <div className="DatePick">
      <DatePicker
        selected={props.rented_from}
        onChange={props.handleStartDate}
        value={props.date}
      />
       <DatePicker
         selected={props.rented_to}
         onChange={props.handleEndDate}
         value={props.date}
         />
     </div>
    )

  }