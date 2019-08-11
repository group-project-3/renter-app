import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function LocationInput(props) {
  return (
    <div className="input-group mb-3">
      <div className="input-group-prepend">
        <label className="input-group-text" for="inputGroupSelect01">Choose Location</label>
      </div>
      <select  className="custom-select" id="inputGroupSelect01" {...props}>
        <option selected>Choose...</option>
        <option value="Chicago">Chicago</option>
        <option value="New York">New York</option>
        <option value="Los Angeles">Los Angeles</option>
      </select>
    </div>
  )
}

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function PriceInput(props) {
  return (

    <div className="form-group">
      <input className="form-control" type="number" {...props} />
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

export function FileInput(props) {
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
      <textarea className="form-control" rows="4" {...props} />
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
