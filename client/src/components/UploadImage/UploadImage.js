import React, { Component } from 'react';

export default function UploadImage(props) {

  return (
    <div>
        <center>
          <h1>UPLOAD AN IMAGE</h1>
          <input onChange={props.handleInputChange} name="image" value={props.image} type="file"/>
        </center>
      </div>
  )
}