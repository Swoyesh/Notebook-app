import React from "react";
import background from "../final.jpg";
import note from "../notes.jpg";
import note1 from "../notes1.jpg";
import note2 from "../notes2.jpeg";
import note3 from "../notes3.jpg";

const About = () => {
  const styler = {
    float: "left",
    width: "25%",
    height: "400px",
    padding: "100px"
  };
  return (
    <>
      <div
        className="d-flex"
        style={{
          justifyContent: "center",
          fontFamily: "Helvetica",
          backgroundImage: `url(${background})`,
          height: "300px",
          color: "black",
          position: "relative",
          top: "-50px",
          alignItems: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          fontSize: "50px",
        }}
      >
        <strong>ABOUT</strong>
      </div>
      <div className="album">
        <img src={note} alt="notes" style={styler}/>
        <img src={note1} alt="notes" style={styler}/>
        <img src={note2} alt="notes" style={styler}/>
        <img src={note3} alt="notes" style={styler}/>
      </div>
      <div className="container" style={{textAlign: "center", position: "relative", top: "-20px", listStylePosition: "inside"}}>
        <h3>iNotebook</h3>
        <ol>
          <li>The place where you can take notes and forget about it.</li>
          <li>Don't let others see your notes.</li>
          <li>Edit and delete notes as you like.</li>
        </ol>
      </div>
    </>
  );
};
export default About;
