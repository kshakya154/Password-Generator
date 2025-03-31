import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [value, setValue] = useState(5);
  const [number, addNumber] = useState(false);
  const [char, addChar] = useState(false);
  const [pass, showpass] = useState("");

  const passref = useRef(null);

  useEffect(() => {
    passGenerator();
  }, [number, char, value]);

  const passGenerator = () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (number) str += "1234567890";
    if (char) str += "!@#$%^&*()_";

    let password = "";
    for (let i = 0; i < value; i++) {
      let randomindex = Math.floor(Math.random() * str.length);
      password += str[randomindex];
    }
    showpass(password);
  };

  const copytoClip = () => {
    navigator.clipboard.writeText(pass);
    alert("Password successfully copied!");
  };

  return (
    <div className="bg-slate-950 min-h-screen flex items-center justify-center px-4">
      <div className="bg-slate-100 p-6 shadow-md rounded-lg w-full max-w-md">
        <h1 className="text-2xl text-center font-medium mb-4">
          Password Generator
        </h1>

        <div className="flex items-center gap-2 mb-4">
          <input
            className="flex-grow p-2 border rounded-md"
            type="text"
            readOnly
            value={pass}
            ref={passref}
          />
          <button
            className="px-4 py-2 bg-blue-800 text-white rounded-md hover:bg-blue-700"
            onClick={copytoClip}
          >
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Length: {value}</label>
          <input
            type="range"
            value={value}
            min={5}
            max={20}
            onChange={(e) => setValue(e.target.value)}
            className="w-full"
          />
        </div>

        <div className="flex justify-between mb-4">
          <label className="flex items-center gap-2">
            <input type="checkbox" onChange={() => addNumber(!number)} />{" "}
            Numbers
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" onChange={() => addChar(!char)} /> Characters
          </label>
        </div>

        <button
          className="w-full py-2 bg-slate-950 text-white rounded-lg hover:bg-slate-800"
          onClick={passGenerator}
        >
          Generate
        </button>
      </div>
    </div>
  );
};

export default App;
