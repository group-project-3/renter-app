
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './style.css';
import { Modal, Button } from 'antd';

class App extends React.Component {
//  
state = { visible: false };

  showMod
  render() {
    return (
      <div id="modal">
            <Modal ></Modal>
            
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('container'));

export default Modal;