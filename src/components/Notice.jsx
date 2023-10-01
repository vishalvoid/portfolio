import React from "react";
import "./Notice.css";

const Notice = () => {
  return (
    <>
      <div className="div-notification">
        <div>
          <b>Important Notice : </b>Website is no longer maintained. and has
          been migrated to a new source. to see my portfolio please visit : -{" "}
          <a href="https://vishalvoid.com">https://vishalvoid.com</a> :
          September 2, 2023
        </div>
        <div>
          <b>X</b>
        </div>
      </div>
    </>
  );
};

export default Notice;
