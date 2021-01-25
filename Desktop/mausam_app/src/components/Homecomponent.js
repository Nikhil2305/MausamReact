import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Magnifier, SideBySideMagnifier, MagnifierContainer, MagnifierPreview, MagnifierZoom, GlassMagnifier } from "react-image-magnifiers"

class Home extends Component {

  render() {

    return (
      <div className="Container-fluid">
        <img style={{ 'height': "700px" }}
          className="d-block w-100 "
          src={'./Images/cover.jpg'} />
          <div class="centered">
              <h1>Mausam</h1>
              <p className="lead" >We Check The WEATHER Wherever You Are</p>
          </div>
      </div>

    );
  }
}

export default Home;