import { useState } from "react";

import Statistics from "./Statistics";
import TextArea from "./TextArea";

export default function Container() {
  const [textValue, setTextValue] = useState("");

  const statValues = {
    numberOfCharacters: textValue.length,
    numberOfWords: textValue
      .trim()
      .split(/\s+/) // Split the text by one or more whitespace characters
      .filter((word) => word.match(/^[a-zA-Z0-9]+$/)).length, // Filter out non-alphanumeric sequences,
    numberOfInstagramCharsLeft: 280 - textValue.length,
    numberOfFacebookCharsLeft: 2200 - textValue.length,
  };

  return (
    <main className='container'>
      <TextArea textValue={textValue} setTextValue={setTextValue} />
      <Statistics stats={statValues} />
    </main>
  );
}
