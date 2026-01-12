import { AiFillGithub } from "react-icons/ai";
export default function About() {
  return (
    <>
      <div className="flex flex-col justify-start items-start gap-8">
        <h1 className="text-4xl">About the App</h1>

        <p>
          <a
            href="https://en.wikipedia.org/wiki/Rapid_serial_visual_presentation"
            target="_blank"
            className="text-blue-500 hover:text-blue-700 hover:underline active:text-blue-300"
          >
            Rapid serial visual presentation (RSVP)
          </a>{" "}
          is where a sequence of stimuli is shown to the observer at one same
          location to their visual field. This app applies this idea to display
          words one by one in the same position, with customisable, gradually
          increasing speeds, and investigate if we can read faster than the
          average reading speed (200-300wpm) if presented this way.
        </p>

        <a
          href="https://github.com/BernardMoy"
          target="_blank"
          className="flex flex-row gap-2 items-center text-gray-700 hover:text-gray-500 hover:underline"
        >
          <AiFillGithub />
          <p className="">Link to my Github</p>
        </a>
      </div>
    </>
  );
}
