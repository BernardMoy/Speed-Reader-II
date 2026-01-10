import { Topbar } from "./components/Topbar";
import { Content } from "./components/Content";

export default function Home() {
  return (
    <div className="box-border px-2 py-4 flex flex-col justify-start gap-2 h-screen w-screen">
      {/* The top navigation bar */}
      {Topbar()}

      {/* Main content */}
      <div className="flex grow">{Content()}</div>
    </div>
  );
}
