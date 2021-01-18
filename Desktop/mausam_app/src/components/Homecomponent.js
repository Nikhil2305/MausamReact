import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Magnifier, SideBySideMagnifier, MagnifierContainer, MagnifierPreview, MagnifierZoom, GlassMagnifier } from "react-image-magnifiers"

class Home extends Component {

    render() {

        return (
            <div className="Container-fluid">
                {/* <MagnifierContainer>
  <div className="example-class">
    <MagnifierPreview imageSrc="./Images/background.jpg" />
  </div>
    <MagnifierZoom style={{ height: "400px" }} imageSrc="./Images/background.jpg"/>
</MagnifierContainer> */}
{/*             
                     <img style={{ 'height': "800px" }}
                        className="d-block w-50"
                        src={'./Images/background.jpg'} /> */}
                        
<GlassMagnifier
  imageSrc="./Images/background.jpg"
  imageAlt="Example"
/>
                
            </div>  

        );
    }
}

export default Home;