"use client";

import { CustomInput } from "./CustomInput";
import { PlayIcon } from "@heroicons/react/16/solid";
import { StopIcon } from "@heroicons/react/16/solid";

export const Content = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Info that is only shown when the words are playing */}
      <div className="flex flex-row gap-4 w-full">
        <p className="font-bold grow">Word: 2/2</p>
        <p className="font-bold">Current wpm: 211</p>
      </div>

      {/* The main textfield */}
      <textarea
        id="main-textfield"
        placeholder="Enter or paste your paragraph here"
        value={"Test"}
        onChange={() => {}}
        className="min-h-64 p-4 rounded-lg outline-none border focus:border-2 focus:border-primary"
      />

      {/* Displaying large text when playing */}
      <p className="text-center text-7xl">Show</p>

      {/* Buttons */}
      <div className="flex flex-row items-end justify-start gap-4">
        {/* The from, to, duration buttons */}
        <div className="flex flex-row grow justify-start gap-4">
          {<CustomInput label="From WPM" value={200} onChange={() => {}} />}
          {<CustomInput label="To WPM" value={500} onChange={() => {}} />}
          {<CustomInput label="Duration" value={10} onChange={() => {}} />}
        </div>

        {/* Start button with icon */}
        <button
          className="flex flex-row px-8 py-4 cursor-pointer hover:opacity-80 gap-2 items-center h-16 rounded-lg min-h-0 bg-primary text-white"
          onClick={() => {}}
        >
          <PlayIcon className="h-6 w-6 " />
          <div className="text-xl">Start</div>
        </button>

        {/* Stop button with icon */}
        <button
          className="flex flex-row px-8 py-4 cursor-pointer hover:opacity-80 gap-2 items-center h-16 rounded-lg min-h-0 bg-secondary text-white"
          onClick={() => {}}
        >
          <StopIcon className="h-6 w-6 " />
          <div className="text-xl">Stop</div>
        </button>
      </div>
    </div>
  );
};
