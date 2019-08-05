import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function PriceInput(props) {
  return (

    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <span className="input-group-text">$</span>
      </div>
      <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
    <div className="input-group-append">
      <span className="input-group-text">.00</span>
    </div>
    </div>

  );
}

export function EmailInput(props) {
  return (
    <div className="form-group">
      <input className="form-control" type="email" {...props} />
    </div>
  );
}

export function FileInput (props) {
  return (
    <form>
      <div class="form-group">
        <label for="exampleFormControlFile1">Upload Image</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
      </div>
    </form>
  );
}

export function PasswordInput(props) {
  return (
    <div className="form-group">
      <input className="form-control" type="password" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="5" {...props} />
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
