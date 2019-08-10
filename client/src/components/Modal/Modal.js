// import React from "react";
// import ReactDOM from "react-dom";


// const Modal = ({children, onClose, open}) => 
// open

// // ? ReactDOM.createPortal(
// //     <div className="modal">
// //         <div className="modal_close" onClick={onClose}>&times;</div>
// //         {children}
// //     </div>,
// //     document.body
// // )
// // :null
// ReactDOM.createPortal(Modal, document.querySelector("#modal"))


// export default Modal;

// import React from "react";
// // import "./modal.css";
// export default class Modal extends React.Component {
// //   onClose = e => {
// //     this.props.onClose && this.props.onClose(e);
// //   };
//   render() {
//     if (!this.props.show) {
//       return null;
//     }
//     return (
//       <div class="modal" id="modal">
//         <h2>Modal Window</h2>
//         <div class="content">{this.props.children}</div>
//         <div class="actions">
//           <button class="toggle-button" onClick={this.onClose}>
//             close
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

import { Modal, Button } from 'antd';

class App extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);