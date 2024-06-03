import { useState } from "react";

export default function TextArea() {
  const [textValue, setTextValue] = useState("");

  function handleChange(event) {
    let textInput = event.target.value;

    // Check if the input contains the string "<script>"
    if (textInput.includes("<script>")) {
      alert("No scripts allowed!");
      textInput = textInput.replace("<script>", "");
    }
    setTextValue(textInput);
  }

  return (
    <textarea
      value={textValue}
      onChange={handleChange}
      placeholder='Enter you text...'
      spellCheck='false'
      className='textarea'
    />
  );
}
