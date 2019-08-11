import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 

export default function DatePick (props) {
  return (      
    <div>
       <DatePicker
         selected={props.startDate}
         onChange={props.handleStartDate}
         value={props.date}
         />
       <DatePicker
         selected={props.endDate}
         onChange={props.handleEndDate}
         value={props.date}
       />
     </div>
    )

  }