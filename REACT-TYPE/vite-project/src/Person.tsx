import { useState } from "react";

interface Person {
  name: string;
  age: number;
  isMarried: boolean;
}

const Person = (props: Person) => {
//   const [isShow, setIsShow] = useState< Boolean | null >(true);
const [showBio, setShowBio] = useState <string | null > (null);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShowBio(e.target.value)
};

// const handleSubmit = (event : React.ChangeEvent<HTMLFormElement>) {

// }
  return (
        <>
          <p>{props.name}</p>
          <p>{props.age}</p>
          <p>{props.isMarried}</p>

    <p>
        {props.name} : { !showBio ? "No Bio" : showBio }
        <input type="text" name="bio" onChange={handleChange} />
    </p>
    </>
  );
};

export default Person;
