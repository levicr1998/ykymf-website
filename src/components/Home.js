// src/components/Home.js
import React, { useEffect, useRef } from 'react';
import { FaTelegram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import './Home.css';
import { IoStatsChartSharp } from "react-icons/io5";
import useIsMobile from '../hooks/isMobile';
import { DexScreenerIcon } from './icons/DexScreenerIcon';

function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="home">
      <h2>Welcome to $Papa on Base</h2>
      <p className='description'>
        After the great success on the BSC network,
        Papa Bear arrived on the base network bringing
        Christmas joy and new hopes to the crypto world.
        Join the PAPA BEAR BASE community and 
        come be part of the blue bear base!
      </p>
      <p>
        <a className="ca" href="https://ape.store/base/0xb2779752b8abe50e2a06bddd774bf0a40353f867"><b>CA:</b> 0xd7943dbddcf5cca70e5787cf58f940fb98838d4e</a>
      </p>
      <div className='icons'>
        <a href='https://x.com/papabearbase'>
          <FaSquareXTwitter className='icon'  color="white" size={isMobile ? 40 : 80} />
        </a>
        <a href='https://t.me/papabearbase'>
          <FaTelegram className='icon' color="white" size={isMobile ? 40 : 80} />
        </a>
        <a href='https://ape.store/base/0xd7943dbddcf5cca70e5787cf58f940fb98838d4e'>
          <IoStatsChartSharp className='icon' color="white" size={isMobile ? 40 : 80} />
        </a>
        <a href=''>
          <DexScreenerIcon className="icon dex-icon" />
        </a>
      </div>
    </div>
  );
}

export default Home;
