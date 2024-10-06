import Image from "next/image";
import Navbar from "./compoents/Navbar";
import Main from "./compoents/Main";

export default function Home() {
  return (
    <>
      <div className="xl:container xl:mx-auto">
        <Navbar />
        <Main />
      </div>
    </>
  );
}
