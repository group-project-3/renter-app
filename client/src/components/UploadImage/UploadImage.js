import React, { Component } from 'react';

export default function UploadImage(props) {

  return (
    <div>
        <center>
          <h1>UPLOAD A FILE</h1>
          <input onChange={props.handleInputChange} name="image" value="image" type="file"/>
        </center>
      </div>
  )
}