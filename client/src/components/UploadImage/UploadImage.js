import React, { Component } from 'react';

export default function UploadImage(props) {

  return (
    <div>
        <center>
          <h5>UPLOAD AN IMAGE</h5>
          <input onChange={props.handleImageChange} name="image" value={props.image} type="file"/>
          <br />
        </center>
      </div>
  )
}