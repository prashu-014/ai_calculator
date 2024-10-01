import Image from "next/image";
import Navbar from "./compoents/Navbar";
import Main from "./compoents/Main";

export default function Home() {
  return (
    <>
      <div className="xl:container xl:mx-auto bg-blue-700  px-4">
        <Navbar />
        <Main />
      </div>
    </>
  );
}
