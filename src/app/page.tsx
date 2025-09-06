"use client";
import Loading from "./Components/Loading";
import LandingPage from "./Components/LandingPage";
import { useState } from "react";

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <div>
      {!loadingComplete && (
        <Loading
          topColor="bg-black"
          bottomColor="bg-black"
          barColor="bg-white"
          onFinish={() => setLoadingComplete(true)}
        />
      )}
      {loadingComplete && <LandingPage />}
    </div>
  );
}
