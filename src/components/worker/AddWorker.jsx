import React, { useState } from "react";
import Card from "../ui/Card";

export default function AddWorker({ setWorkers }) {
  const [enteredWorkerName, setEnteredWorkerName] = useState("");
  const [enteredWage, setEnteredWage] = useState("");
  const minimumWage = 1000;

  const addWorkerHandler = (e) => {
    e.preventDefault();
    if (
      enteredWage.trim().length === 0 ||
      enteredWorkerName.trim().length === 0
    )
      return;
    if (+enteredWage < minimumWage) {
      return;
    }

    setEnteredWage("");
    setEnteredWorkerName("");
    setWorkers((prevState) => [
      {
        id: Math.floor(Math.random() * 1000),
        name: enteredWorkerName,
        wage: enteredWage,
      },
      ...prevState,
    ]);
  };
  return (
    <Card>
      <form
        action=""
        className="flex flex-col gap-y-2"
        onSubmit={addWorkerHandler}
      >
        <label htmlFor="name" className="text-black">
          employee name
        </label>
        <input
          type="text"
          placeholder="enter employee name"
          className="font-medium max-w-[40rem] w-full mx-auto border p-2"
          id="name"
          onChange={(e) => setEnteredWorkerName(e.target.value)}
          value={enteredWorkerName}
        />
        <label htmlFor="wage" className="text-black">
          salary amount
        </label>
        <input
          type="number"
          placeholder="enter salary amount"
          className="font-medium max-w-[40rem] w-full mx-auto border p-2"
          id="wage"
          onChange={(e) => setEnteredWage(e.target.value)}
          value={enteredWage}
        />
        <button
          type="submit"
          className="hover:bg-green-700 transition-all bg-gray-500 w-full p-2 text-white text-lg"
        >
          Add
        </button>
      </form>
    </Card>
  );
}
