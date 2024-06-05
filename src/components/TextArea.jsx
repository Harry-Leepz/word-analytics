import { useState } from "react";
import Warning from "./Warning";

export default function TextArea({ textValue, setTextValue }) {
  const [warningText, setWarningText] = useState("");

  function handleChange(event) {
    let textInput = event.target.value;

    // Check if the input contains the string "<script>"
    if (textInput.includes("<script>")) {
      setWarningText("Scripts are not allowed!");
      textInput = textInput.replace("<script>", "");
    } else {
      setWarningText("");
    }
    setTextValue(textInput);
  }

  return (
    <div className='textarea'>
      <textarea
        value={textValue}
        onChange={handleChange}
        placeholder='Enter your text...'
        spellCheck='false'
      />
      {warningText && <Warning warningText={warningText} />}
    </div>
  );
}
