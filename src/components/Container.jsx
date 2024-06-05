import { useState } from "react";

import Statistics from "./Statistics";
import TextArea from "./TextArea";

export default function Container() {
  const [textValue, setTextValue] = useState("");

  // stat values
  const numberOfCharacters = textValue.length;
  const numberOfWords = textValue
    .trim()
    .split(/\s+/) // Split the text by one or more whitespace characters
    .filter((word) => word.match(/^[a-zA-Z0-9]+$/)).length; // Filter out non-alphanumeric sequences
  const numberOfInstagramCharsLeft = 280 - numberOfCharacters;
  const numberOfFacebookCharsLeft = 2200 - numberOfCharacters;

  return (
    <main className='container'>
      <TextArea textValue={textValue} setTextValue={setTextValue} />
      <Statistics
        numberOfCharacters={numberOfCharacters}
        numberOfWords={numberOfWords}
        numberOfFacebookCharsLeft={numberOfFacebookCharsLeft}
        numberOfInstagramCharsLeft={numberOfInstagramCharsLeft}
      />
    </main>
  );
}
