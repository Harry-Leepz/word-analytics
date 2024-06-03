import { useState } from "react";
import Warning from "./Warning";

export default function TextArea() {
  const [textValue, setTextValue] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  function handleChange(event) {
    let textInput = event.target.value;

    // Check if the input contains the string "<script>"
    if (textInput.includes("<script>")) {
      setShowWarning(true);
      textInput = textInput.replace("<script>", "");
    }
    setTextValue(textInput);
  }

  return (
    <div className='textarea'>
      <textarea
        value={textValue}
        onChange={handleChange}
        placeholder='Enter you text...'
        spellCheck='false'
      />
      {showWarning && <Warning />}
    </div>
  );
}
