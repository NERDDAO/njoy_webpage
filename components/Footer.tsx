import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { hardhat } from "viem/chains";
import { CurrencyDollarIcon, HeartIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { SwitchTheme } from "~~/components/SwitchTheme";
import { BuidlGuidlLogo } from "~~/components/assets/BuidlGuidlLogo";
import { Faucet } from "~~/components/scaffold-eth";
import { useTargetNetwork } from "~~/hooks/scaffold-eth/useTargetNetwork";
import { useGlobalState } from "~~/services/store/store";
import NerdSign from "./nerdSign";

/**
 * Site footer with DropUp content integrated
 */
export const Footer = () => {
    const nativeCurrencyPrice = useGlobalState(state => state.nativeCurrencyPrice);
    const { targetNetwork } = useTargetNetwork();
    const isLocalNetwork = targetNetwork.id === hardhat.id;
    const dropupContentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropupContentRef.current && !dropupContentRef.current.contains(event.target as Node)) {
                dropupContentRef.current.classList.remove("dropup-content");
            }
        };

        window.addEventListener("click", handleClickOutside);

        return () => {
            window.removeEventListener("click", handleClickOutside);
        };
    }, []);

    const toggleUp = () => {
        dropupContentRef.current?.classList.toggle("dropup-show");
    };

    return (
        <div>
            {/* DropUp Content */}
            <div className="dropflex w-full">

                <nav className="navbar dropnav fixed-bottom navbar-light no-padding no-select">
                    <div className="dropup no-margin-navbar">
                        <div onClick={toggleUp} className="start-btn no-padding">
                            <Image src="/winxpstart.png" width="110" height="35" alt="" className="start-btn no-margin-navbar" />
                        </div>
                        <div ref={dropupContentRef} className="dropup-content" id="start-content">
                            <div className="start-span"></div>
                            <div className="start-linklist-left">
                                <a className="start-link" target="_blank" href="https://enjoy.tech/">
                                    <div className="start-option">
                                        <Image width="30" height="30" src="/chess.bmp" alt="" />
                                        User
                                    </div>
                                </a>
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
                                <a className="start-link" target="_blank" href="https://pixabay.com/images/search/cute%20cat/">
                                    <div className="start-option">
                                        <Image width="30" height="30" src="/Internet_Explorer_6_logo.png" alt="" />
                                        cat pix
                                    </div>
                                </a>
                            </div>
                            <div className="start-footer"></div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Footer;
