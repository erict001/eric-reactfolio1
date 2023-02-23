import React, { Component } from 'react';
import picture from "../images/assets/picture.png"

const styles = {
  margin: {
    marginTop: "5%",
    marginLeft: "5%",
    marginRight: "40%"
  },
  text: {
    color: "white",
    textShadow: "1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000",
    fontFamily: "Impact", 
    letterSpacing: ".5rem"
  }
}


class About extends Component {
  render() {
    return (
      <div>
        {/* <div style={{ display: "flex", justifyContent: "center", height: "auto", width: "100vw", color: "white", backgroundColor: "black" }}>
          <h1 style={{ alignContent: "center", fontSize: "100px" }}>About Me</h1>
        </div> */}
        <hr></hr>
        <div class="flex flex-col">
          <div class="xl:columns-2 lg:columns-1 md:columns-1 sm:columns-1 h-min pt-20 pb-20 lg:pl-20 pr-20 w-100">
            <div class="lg:columns-1 md:columns-1 lg:w-4/5 md:w-4/5 sm:w-4/5">
              <img src={picture} class="border-2 rounded-xl" style={{ marginLeft: "8rem", marginRight: "1rem", height: "50rem", borderRadius: "80rem" }} alt="Eric Taylor"></img>
            </div>
            <div class="flex flex-col flex-wrap lg:columns-1 md:columns-1 sm:columns-1 xs:columns-1 lg:w-5/5 md:w-5/5 sm:w-5/5 xs:mt-20 text-black">
              <div class="flex flex-col lg:columns-1 md:columns-1 sm:columns-1 xs:columns-1 lg:w-5/5 md:w-5/5 sm:w-5/5 xs:mt-20 text-black md:justify-center">
                <h1 class="flex justify-center xl:text-5xl lg:text-6xl md:text-4xl sm:text-4xl xs:text-4xl text-black" style={{ fontFamily: "Zapfino", fontWeight: 900 }}>Hi, I'm</h1>
                <h1 class="text-8xl flex justify-center text-transparent" style={styles.text}>ERIC TAYLOR</h1>
              </div>
              <br></br>
              <br></br>
              <div>
                <h1 class="auto-cols-max xl:text-4.2xl lg:text-5xl md:text-5xl sm:text-5xl xs:text-3xl pr-10 lg:w-4/5 md:4/5">
                  I'm driven to help people and companies become their best selves through creative design, quality branding, and unparalleled customer service.
                  <br />
                  <br />
                  A recent full stack web developer graduate from the University of Washington. Experienced business operations manager with a track record of driving multiple businesses to successful outcomes.
                </h1>
                <br></br>
                {/* <button class="w-1/4 h-10 bg-black text-white">Education</button>
              <button class="w-1/4 h-10 bg-black text-white ml-1">Technologies</button>
              <button class="w-1/4 h-10 bg-black text-white ml-1">Career</button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default About;