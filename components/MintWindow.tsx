import React, { useEffect, useRef, useState } from "react";
import "../styles/dropup.css";
import "../styles/styles.css";
import "../styles/window.css";
import { Address } from "./scaffold-eth";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { Howl, Howler } from "howler";
import { useAccount } from "wagmi";
import ApproveButton from "~~/app/ApproveButton";
import MintButton from "~~/app/MintButton";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const MintWindow = () => {
  Howler.volume(0.05);
  const sound = new Howl({
    src: ["vibes.mp3"],
  });
  sound.play();
  const windowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null); // Reference for the title bar

  useEffect(() => {
    const wwindow = windowRef.current;
    if (!wwindow) return;

    const dragrd = wwindow.querySelector<HTMLDivElement>(".drag-rd");
    const dragru = wwindow.querySelector<HTMLDivElement>(".drag-ru");
    const draglu = wwindow.querySelector<HTMLDivElement>(".drag-lu");
    const dragld = wwindow.querySelector<HTMLDivElement>(".drag-ld");

    const resizeMouseDown = (event: MouseEvent, corner: string) => {
      event.preventDefault();
      const startX = event.clientX;
      const startY = event.clientY;
      const startWidth = wwindow.offsetWidth;
      const startHeight = wwindow.offsetHeight;
      const startPosLeft = wwindow.offsetLeft;
      const startPosTop = wwindow.offsetTop;

      const onMouseMove = (event: MouseEvent) => {
        let newWidth = startWidth;
        let newHeight = startHeight;
        let newLeft = startPosLeft;
        let newTop = startPosTop;

        switch (corner) {
          case "rd":
            newWidth = startWidth + event.clientX - startX;
            newHeight = startHeight + event.clientY - startY;
            break;
          case "ru":
            newWidth = startWidth + event.clientX - startX;
            newHeight = startHeight - (event.clientY - startY);
            newTop = startPosTop + (event.clientY - startY);
            break;
          case "lu":
            newWidth = startWidth - (event.clientX - startX);
            newHeight = startHeight - (event.clientY - startY);
            newLeft = startPosLeft + (event.clientX - startX);
            newTop = startPosTop + (event.clientY - startY);
            break;
          case "ld":
            newWidth = startWidth - (event.clientX - startX);
            newHeight = startHeight + event.clientY - startY;
            newLeft = startPosLeft + (event.clientX - startX);
            break;
        }

        if (newWidth > 100) {
          wwindow.style.width = newWidth + "px";
          wwindow.style.left = newLeft + "px";
        }
        if (newHeight > 100) {
          wwindow.style.height = newHeight + "px";
          wwindow.style.top = newTop + "px";
        }
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    };

    dragrd?.addEventListener("mousedown", event => resizeMouseDown(event, "rd"));
    dragru?.addEventListener("mousedown", event => resizeMouseDown(event, "ru"));
    draglu?.addEventListener("mousedown", event => resizeMouseDown(event, "lu"));
    dragld?.addEventListener("mousedown", event => resizeMouseDown(event, "ld"));

    // Draggable functionality
    const titleBar = titleRef.current;
    let isDragging = false;
    let dragStartX = 0;
    let dragStartY = 0;

    const onTitleMouseDown = (event: MouseEvent) => {
      isDragging = true;
      dragStartX = event.clientX - wwindow.offsetLeft;
      dragStartY = event.clientY - wwindow.offsetTop;
      event.preventDefault(); // Prevent text selection
    };

    const onTitleMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;
      wwindow.style.left = `${event.clientX - dragStartX}px`;
      wwindow.style.top = `${event.clientY - dragStartY}px`;
    };

    const onTitleMouseUp = () => {
      isDragging = false;
    };

    titleBar?.addEventListener("mousedown", onTitleMouseDown);
    document.addEventListener("mousemove", onTitleMouseMove);
    document.addEventListener("mouseup", onTitleMouseUp);

    return () => {
      dragrd?.removeEventListener("mousedown", event => resizeMouseDown(event, "rd"));
      dragru?.removeEventListener("mousedown", event => resizeMouseDown(event, "ru"));
      draglu?.removeEventListener("mousedown", event => resizeMouseDown(event, "lu"));
      dragld?.removeEventListener("mousedown", event => resizeMouseDown(event, "ld"));
      titleBar?.removeEventListener("mousedown", onTitleMouseDown);
      document.removeEventListener("mousemove", onTitleMouseMove);
      document.removeEventListener("mouseup", onTitleMouseUp);
    };
  }, []);

  return (
    <div id="desktop" className="bg desktop">
      <div ref={windowRef} id="window" className="window">
        <div ref={titleRef} className="title no-select" id="windowTitle">
          <img className="img" src="/iexp.png" alt="" />
          Enjoy Explorer
        </div>
        <div className="drag-rd"></div>
        <div className="drag-ru"></div>
        <div className="drag-lu"></div>
        <div className="drag-ld"></div>
        <div className="p-12 content overflow-y-auto bg-[url(/ture.jpg)] bg-cover">
          <ApproveButton contractName={"Token"} spenderAddress={"0x0A65EB7B31Ad4b0b9fd73cC0e2bb1788eBb393b8"} />
        </div>
      </div>
    </div>
  );
};

export default MintWindow;
