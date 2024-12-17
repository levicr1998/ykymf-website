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
      <a className="ca" href="https://ape.store/base/0xaecc403c0f97e02f83a2550c27680afdf24bd523">
        <b>CA: </b>
        0xaecc403c0f97e02f83a2550c27680afdf24bd523
      </a>
      <h2>🚨 Attention, $YKYMF Operatives! 🚨</h2>
      <p className="description">
        <span>
          🎄 Just like McClane called in backup to take down Hans Gruber, we’ve
          deployed Base KOL reinforcements to push $YKYMF to the next level! 💥
        </span>
        <br />
        <br />
        <span>
          💎 These top-tier allies are locked, loaded, and ready to spread the
          word far and wide. The mission? UNISWAP Christmas Chaos!🚀
        </span>
        <br />
        <br />
        <span>
          This isn’t just another holiday token—it’s a full-scale operation. The
          Base community won’t know what hit them! 🧨
        </span>
        <br />
        <br />
        Yippee Ki Yay, Mother Fuckers! 🚀
        <br />
        <br />
        🎗 $YKYMF Supports The Association for Frontotemporal Degeneration 🎗
        <br />
        <br />
        <a className="link" href="https://www.theaftd.org/mnlstatement23/">
          https://www.theaftd.org/mnlstatement23/
        </a>
        <br />
        <br />
        $YKYMF has set up the Bruce Willis Fund as an intermediary and will
        forward all donations on your behalf.
        <br />
        <br />
        <span>
          <b className="ca-title">Donations can be sent to:</b>
        </span>
        <br />
        <br />
        <span className="ca">
          0xF16D2355D078291503ea0011C0B389D46277F6f1 Or use:
          brucewillisfund.base.eth
        </span>
      </p>
      <div className="icons">
        <a href="https://x.com/Y_K_Y_MF">
          <FaSquareXTwitter
            className="icon"
            color="white"
            size={isMobile ? 40 : 80}
          />
        </a>
        <a href="https://t.me/YKYMF1">
          <FaTelegram
            className="icon"
            color="white"
            size={isMobile ? 40 : 80}
          />
        </a>
        <a href="https://ape.store/base/0xaecc403c0f97e02f83a2550c27680afdf24bd523">
          <IoStatsChartSharp
            className="icon"
            color="white"
            size={isMobile ? 40 : 80}
          />
        </a>
        <a href="https://basescan.org/tx/0xb0304c4274e985890ded2b450f1b316fb763c9bdf1369820f849dd046588acbe ">
          <DexScreenerIcon className="icon dex-icon" />
        </a>
      </div>
    </div>
  );
}

export default Home;
