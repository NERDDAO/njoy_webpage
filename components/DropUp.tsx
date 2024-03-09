/* eslint-disable react/jsx-no-duplicate-props */

/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface DropupProps {
  contentId: string;
}

const Dropup: React.FC<DropupProps> = ({ contentId }) => {
  const dropupcontent = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement;

      if (
        dropupcontent.current &&
        dropupcontent.current.classList.contains("dropup-content") &&
        targetElement &&
        !targetElement.classList.contains("start-btn") &&
        targetElement.id !== dropupcontent.current.id &&
        targetElement.parentElement?.id !== dropupcontent.current.id
      ) {
        toggleUp();
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleUp = () => {
    if (dropupcontent.current) {
      dropupcontent.current.classList.toggle("dropup-show");
    }
  };

  return (
    <div ref={dropupcontent} className="dropup-content">
      <nav className="navbar fixed-bottom navbar-light no-padding no-margin-navbar no-select">
        <div className="dropup no-margin-navbar">
          <div onClick={toggleUp} className="start-btn no-padding">
            <Image src="/winxpstart.png" width="110" height="35" alt="" className="start-btn no-margin-navbar" />
          </div>
          <div className="dropup-content" id="start-content">
            <div className="start-title">
              <div className="start-title-img">
                <Image width="30" height="30" src="/chess.bmp" alt="" />
              </div>
              <div>
                <b>User</b>
              </div>
            </div>
            <div className="start-span"></div>
            <div className="start-linklist-left">
              <a className="start-link" target="_blank" href="https://enjoy.tech/">
                <div className="start-option">
                  <Image width="30" height="30" src="/zora.png" alt="" />
                  Enjoyyy
                </div>
              </a>
              <a className="start-link" target="_blank" href="https://explorer.zora.energy/">
                <div className="start-option">
                  <Image width="30" height="30" src="/zora-explora.png" alt="" />
                  Zora the Explora
                </div>
              </a>
              <a className="start-link" target="_blank" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                <div className="start-option">
                  <Image width="30" height="30" src="/rick.jpg" alt="" />
                  Troll line
                </div>
              </a>
            </div>
            <div className="start-linklist-right">
              <div className="start-option">
                <Image width="30" height="30" src="/Internet_Explorer_6_logo.png" alt="" />
                <a className="start-link" target="_blank" href="https://pixabay.com/images/search/cute%20cat/">
                  cat pix
                </a>
              </div>
            </div>
            <div className="start-footer"></div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Dropup;
