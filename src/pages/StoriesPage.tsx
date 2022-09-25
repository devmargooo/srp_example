import {useState} from "react";
import {InputStories} from "../ui-kit/Input/InputStories";

export const StoriesPage = () => {
    const [input, setInput] = useState("");
    const props = {
      value: input,
      setValue: setInput,
      icon: "🌸"
    };
    return (
        <InputStories {...props}/>
    );
};
