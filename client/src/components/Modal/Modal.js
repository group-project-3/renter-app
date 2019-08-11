
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';
import DatePick from "../DatePick/DatePick"
import { Modal, Button } from 'antd';

class App extends React.Component {
//  
state = { visible: false };

  showMod
  render() {
    return (
      <div>
        <Modal />
        <DatePick handleInputChange={this.props.handleInputChange} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));

export default Modal;