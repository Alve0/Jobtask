import Image from "next/image";
import Loading from "./Components/Loading";
import LandingPage from "./Components/LandingPage";

export default function Home() {
  return (
    <div>
      <Loading topColor="bg-black" bottomColor="bg-black" barColor="bg-white" />
      <LandingPage />
    </div>
  );
}
