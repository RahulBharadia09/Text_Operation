import React, { useState } from "react";

const TextForm = (props) => {
  const [text, seTtext] = useState("Enter Your Text");

  const handleOnChange = (event) => {
    console.log("Function handled");
    seTtext(event.target.value);
  };

  const ConverToUpperCase = () => {
    console.log("Convert To uppercase Clicked");
    let newtext = text.toUpperCase();
    seTtext(newtext);
  };
  const ConverToLowerCase = () => {
    console.log("Convert To Lower Clicked");
    let newtext = text.toLowerCase();
    seTtext(newtext);
  };

  const FirstWordCap = () => {
    var separateWord = text.toLowerCase().split(" ");
    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] =
        separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
    }
    seTtext(separateWord.join(" "));
  };

  const extraSpaces = () => {
    let newtext = text.replace(/\s{2,}/g, " ").trim();
    seTtext(newtext);
  };

  return (
    <>
      <div className="container">
        <h2 className="my-4">{props.heading}</h2>
        <textarea
          className="form-control mb-3"
          value={text}
          onChange={handleOnChange}
          id="mybox"
          rows="8"
        ></textarea>
        <button
          className="btn btn-outline-info my-2 text-dark"
          onClick={ConverToUpperCase}
        >
          Convert to Uppercase
        </button>
        <button
          className="btn btn-outline-info m-2 text-dark"
          onClick={ConverToLowerCase}
        >
          Convert to lowercase
        </button>
        <button
          className="btn btn-outline-info m-2 text-dark"
          onClick={FirstWordCap}
        >
          First word Capatilize
        </button>
        <button
          className="btn btn-outline-info m-2 text-dark"
          onClick={extraSpaces}
        >
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-2" style={{color: props.mode ==='dark'?'white':'dark'}}>
        <h3 className="mt-4" >Your Text Sunmmary</h3>
        <p > <b className="text-danger"> {text.split(" ").length} Word </b>and <b className="text-danger"> {text.length} Characters </b></p>
        <p > You can read the text in  <b className="text-danger">{0.008 * text.split(" ").length} min</b></p>
        <h6 className=""  >Preview of your text <br />{text}</h6>
      </div>
    </>

    
  );
};

export default TextForm;
