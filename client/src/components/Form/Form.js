import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function EmailInput(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function PasswordInput(props) {
  return (
    <div className="form-group" type="password">
      <input className="form-control" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
}
