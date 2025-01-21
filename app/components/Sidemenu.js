import React from "react";

const Sidemenu = ({ height, handleHome, handleAbout, handleEducation, handleContact, handleService, handleDesign }) => {
  return <div className={`side-menu ${height} fixed top-[54px] w-full duration-300 bg-[#5777ff] bg-opacity-10 backdrop-blur-lg overflow-hidden flex flex-col font-semibold items-center justify-center gap-4 p-2`}>
    <div className="home" onClick={handleHome}>Home</div>
    <div className="about" onClick={handleAbout}>About</div>
    <div className="eduactoion" onClick={handleEducation}>Education</div>
    <div className="contact" onClick={handleContact}>Contact</div>
    <div className="design" onClick={handleDesign}>Works</div>
    <div className="services" onClick={handleService}>Services</div>
  </div>;
};

export default Sidemenu;
