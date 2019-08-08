import React, { Component } from 'react';

export default function UploadImage(props) {
  

    return (
      <div className="UploadImage">
        <center>
          <h1>UPLOAD A FILE</h1>
          <input onChange={props.handleInputChange} name="image" value={props.image} type="file"/>
          <br/>
        </center>
      </div>
    );

}