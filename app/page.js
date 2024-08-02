"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(title);
    // console.log(desc);
    setMainTask([...mainTask, { title, desc }]); //used spread operator so that the older tasks also stays when some new task is added
    setTitle("");
    setDesc("");
    // console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = (
    <h2 className="text-2xl font-semibold">No Task Available</h2>
  );

  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between mb-5 w-2/3">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-medium">{t.desc}</h6>
          </div>
          <button
            onClick={() => {
              deleteHandler(i);
            }}
            className="bg-red-400 px-4 py-2 text-white rounded font-bold "
          >
            Delete
          </button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className="bg-black text-white p-5 text-4xl font-bold text-center">
        My ToDo List
      </h1>

      <form onSubmit={submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Title here ..."
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            // console.log(title);
          }}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Description here ..."
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          value={desc}
        />

        <button className="bg-black text-white px-4 py-2 text-3xl font-bold rounded m-5">
          Add task
        </button>
      </form>

      <hr />

      <div className="p-8 bg-slate-200">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
