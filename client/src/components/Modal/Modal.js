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

import React from "react";
export default class Modal extends React.Component {
    onClose = e => {
        console.log(this.props)
        // this.props.showModal();
      };
    render() {
        if(!this.props.show){
            return null;
        }
    return (
        <div>
                <div>{this.props.children}</div>
                <div>
                <button
                onClose={this.onClose()}
                    >
                Close
          </button>
        </div>


        </div>

        )
  }
}