import { Content } from "./components/Content";

export default function Home() {
  return (
    <div className="box-border flex flex-col justify-start gap-8 h-full w-full">
      {/* Main content */}
      <div className="flex grow ">{<Content />}</div>
    </div>
  );
}
