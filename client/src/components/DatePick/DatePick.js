import React from "react";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
 
// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
 
class DatePick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date()
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  
  callback = () => {
    console.log(this.state);
  }

  // handleChange(date) {
  //   this.setState({
  //     startDate: date
  //   });
  // }
 
  render() {
    return (      
       <div>
          <DatePicker
            selected={this.state.startDate}
            onChange={this.props.handleChange}
            value={this.props.sta}
            />
          <DatePicker
            selected={this.state.endDate}
            onChange={this.props.handleChange}
          />
        </div>
    )
  }
}

export default DatePick