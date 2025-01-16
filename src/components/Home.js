// src/components/Home.js
import React from "react";
import { FaTelegram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./Home.css";
import { IoStatsChartSharp } from "react-icons/io5";
import useIsMobile from "../hooks/isMobile";
import { DexScreenerIcon } from "./icons/DexScreenerIcon";

function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="home">
      <a className="ca" href="https://ape.store/base/0x9a9dd2e5167d2473a76e367e9b9b9b9fe6e15470">
        <b>CA: </b>
        0x9a9dd2e5167d2473a76e367e9b9b9b9fe6e15470
      </a>
      <h2>🇺🇸 Welcome to the $BTRUMP movement! 🇺🇸</h2>
      <p>Following in his father’s iconic footsteps, Barron stands poised to guide America into a new era. The future begins with him! Join us!</p>
      <div className="icons">
        <a href="https://x.com/BarronTrumpBase">
          <FaSquareXTwitter
            className="icon"
            color="white"
            size={isMobile ? 40 : 80}
          />
        </a>
        <a href="https://t.me/btrumpbase">
          <FaTelegram
            className="icon"
            color="white"
            size={isMobile ? 40 : 80}
          />
        </a>
        <a href="https://ape.store/base/0x9a9dd2e5167d2473a76e367e9b9b9b9fe6e15470">
          <IoStatsChartSharp
            className="icon"
            color="white"
            size={isMobile ? 40 : 80}
          />
        </a>
        <a href="#">
          <DexScreenerIcon className="icon dex-icon" />
        </a>
      </div>
    </div>
  );
}

export default Home;
