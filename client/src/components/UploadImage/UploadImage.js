import React, { Component } from 'react';

export default function UploadImage(props) {

  return (
    <div>
        <center>
          <h1>UPLOAD AN IMAGE</h1>
          <input onChange={props.handleImageChange} name="image" value={props.image} type="file"/>
        </center>
      </div>
  )
}