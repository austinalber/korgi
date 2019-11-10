import React, { Component } from "react";

  class Uploader extends Component {
    render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Image Uplaoder</h1>
          <p className="lead">
            This is a simple application to upload and retrieve images from a database
          </p>
          <hr className="my-4" />
        </div>
        <div className="input-group mb-3">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id="inputGroupFile01"
              aria-describedby="inputGroupFileAddon01"
            />
            <label className="custom-file-label" htmlFor="inputGroupFile01">
              Choose file
            </label>
          </div>
        </div>
        <button type="button" className="btn btn-primary">
          Upload
        </button>
      </div>
        )
      }
    }; 

    export default Uploader; 

