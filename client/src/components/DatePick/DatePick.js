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
        // onChange={(event) => console.log(event)}
        selected={props.rented_from}
      />
       <DatePicker
         selected={props.rented_to}
         onChange={props.handleEndDate}
         value={props.date}
         />
     </div>
    )

  }