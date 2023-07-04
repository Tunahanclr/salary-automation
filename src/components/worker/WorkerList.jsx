import React from "react";

export default function WorkerList({ workers, setWorkers }) {
  const deleteWorker = (id) => {
    setWorkers(workers.filter((item) => item.id !== id));
  };
  if(workers.length < 1){
    return;
  }
  return (
    <div className="mt-10 rounded bg-white w-full h-full">
      <div className="flex p-4 justify-between">
        <div className="text-xl">Name</div>
        <div className="text-xl">Wage</div>
      </div>
      {workers.map((worker) => (
        <div
          key={worker.id}
          onClick={() => deleteWorker(worker.id)}
          className="flex  pr-4 pl-4 cursor-pointer pb-5 justify-between"
        >
          <span className="font-bold">{worker.name}</span>
          <span className="font-bold">{worker.wage}$</span>
        </div>
      ))}
    </div>
  );
}
