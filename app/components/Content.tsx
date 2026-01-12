"use client";

import { CustomInput } from "./CustomInput";
import { PlayIcon } from "@heroicons/react/16/solid";
import { ArrowPathIcon } from "@heroicons/react/16/solid";
import { StopIcon } from "@heroicons/react/16/solid";
import { useEffect, useRef, useState } from "react";
import split from "../split";

export const Content = () => {
  // store the text input
  const [text, setText] = useState<string>("");

  // store the initial wpm, final wpm and also the duration
  const [initialWpm, setInitialWpm] = useState<number>(200);
  const [finalWpm, setFinalWpm] = useState<number>(200);
  const [duration, setDuration] = useState<number>(10);
  const [currentWpm, setCurrentWpm] = useState<number>(200);

  // store the current word number to be displayed, or none if there aren't any
  // if current word is none, then it is not in a displaying state
  const [currentWordNumber, setCurrentWordNumber] = useState<number>(0);
  const [totalWordNumber, setTotalWordNumber] = useState<number>(0);
  const [currentWord, setCurrentWord] = useState<String | null>(null);

  // state to check if it is playing
  const [playing, setPlaying] = useState(false);

  // use ref to avoid closure problems remembering the previous runs
  // to be updated using setTimeout
  const wordNumberRef = useRef<number>(0);
  const wpmRef = useRef<number>(initialWpm);
  const timeElapsed = useRef<number>(0);

  // trigger the function when the play button is clicked
  useEffect(() => {
    // function called when finished playing or stopped
    function exit() {
      setCurrentWordNumber(0);
      setTotalWordNumber(0);
      setCurrentWord(null);
      setCurrentWpm(0);
    }

    // if not playing, return
    if (!playing) {
      return;
    }

    // split the paragraph
    const wordList = split(text);

    // set current word to be the first word initially
    setCurrentWord(wordList[0]);

    // set current word number to be 0
    wordNumberRef.current = 0;
    setCurrentWordNumber(0);

    // set current wpm to be initial wpm
    wpmRef.current = initialWpm;
    setCurrentWpm(initialWpm);

    // set time elapsed 0
    timeElapsed.current = 0;

    // set total word number
    setTotalWordNumber(wordList.length);

    // recursive play function that plays faster gradually
    let timeout: NodeJS.Timeout | null = null;
    let interval: number = 60000 / initialWpm;
    function play() {
      // display the current word
      setCurrentWord(wordList[wordNumberRef.current]);

      // modify word number
      wordNumberRef.current += 1;
      setCurrentWordNumber(wordNumberRef.current);

      // calculate the next increased wpm
      // solve for x in (final-initial)/duration = (x-initial)/time
      interval = 60000 / wpmRef.current; // in ms - depend on the current wpm
      timeElapsed.current += interval;

      // cap the wpm to the final wpm
      // calculate only when current wpm is less than it
      if (wpmRef.current < finalWpm) {
        wpmRef.current = Math.min(
          finalWpm,
          initialWpm +
            ((finalWpm - initialWpm) / (duration * 1000)) * timeElapsed.current
        );
      }

      // update the displayed current wpm
      setCurrentWpm(wpmRef.current);

      // recursively call play function if the word number does not exceed text length
      if (wordNumberRef.current > wordList.length) {
        exit();
        setPlaying(false);
      } else if (wordNumberRef.current == wordList.length) {
        // give a 1 second delay before exiting
        timeout = setTimeout(play, interval + 1000);
      } else {
        // immediately display the next word
        timeout = setTimeout(play, interval);
      }
    }

    // call the play function
    play();
    return () => {
      exit();
      // clear timeout
      if (timeout !== null) {
        clearTimeout(timeout);
      }
    };
  }, [playing]);

  // the handle start and handle stop functions
  const handleStart = () => {
    // first check if final wpm is >= initial wpm
    if (initialWpm > finalWpm) {
      alert("The final WPM must not be less than the initial WPM.");
      return;
    }

    // then check if text is empty
    if (split(text).length === 0) {
      alert("The text is empty");
      return;
    }

    // set playing to true
    setPlaying(true);
  };

  const handleStop = () => {
    // stop playing, include resetting the fields
    setPlaying(false);
  };

  const handleGenerate = () => {};

  return (
    <div className="flex flex-col gap-8 w-full">
      {/* Info that is only shown when the words are playing */}
      {playing && (
        <div className="flex flex-row gap-4 w-full">
          <p className="font-bold grow">
            Word: {currentWordNumber} / {totalWordNumber}
          </p>
          <p className="font-bold">
            Current wpm: {Math.round(currentWpm * 10) / 10}
          </p>
        </div>
      )}

      {/* The main textfield */}
      {!playing && (
        <textarea
          id="main-textfield"
          placeholder="Type or paste your paragraph here..."
          value={text}
          onChange={(t) => setText(t.target.value)}
          className="h-64 min-h-[4em] p-4 rounded-lg outline-none border focus:border-2 focus:border-primary"
        />
      )}

      {/* The generate paragraph button */}
      {/* self-start to override align-content stretch */}
      {playing && (
        <button
          className="self-start flex flex-row px-4 py-2 h-12 gap-2 cursor-pointer hover:opacity-80 items-center rounded-lg min-h-0 bg-primary text-white"
          onClick={handleGenerate}
        >
          <ArrowPathIcon className="h-6 w-6 " />
          <div className="text-base">Generate paragraph</div>
        </button>
      )}

      {/* Displaying large text when playing */}
      {playing && <p className="text-center py-16 text-8xl">{currentWord}</p>}

      {/* Buttons */}
      <div className="flex flex-row items-end justify-start gap-4 ">
        {/* The from, to, duration buttons */}

        <div className="flex flex-col sm:flex-row grow items-start justify-start gap-4">
          {
            <CustomInput
              label="From WPM"
              value={initialWpm}
              disabled={playing}
              onChange={(n) => setInitialWpm(Number(n.target.value))}
            />
          }
          {
            <CustomInput
              label="To WPM"
              value={finalWpm}
              disabled={playing}
              onChange={(n) => setFinalWpm(Number(n.target.value))}
            />
          }
          {
            <CustomInput
              label="Duration"
              value={duration}
              disabled={playing}
              onChange={(n) => setDuration(Number(n.target.value))}
            />
          }
        </div>

        {/* Start button with icon */}
        {!playing && (
          <button
            className="flex flex-row px-8 py-4 cursor-pointer hover:opacity-80 gap-2 items-center h-16 rounded-lg min-h-0 bg-primary text-white"
            onClick={handleStart}
          >
            <PlayIcon className="h-6 w-6 " />
            <div className="text-xl">Start</div>
          </button>
        )}

        {/* Stop button with icon */}
        {playing && (
          <button
            className="flex flex-row px-8 py-4 cursor-pointer hover:opacity-80 gap-2 items-center h-16 rounded-lg min-h-0 bg-secondary text-white"
            onClick={handleStop}
          >
            <StopIcon className="h-6 w-6 " />
            <div className="text-xl">Stop</div>
          </button>
        )}
      </div>
    </div>
  );
};
