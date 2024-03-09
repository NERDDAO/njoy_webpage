"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Dropup from "~~/components/DropUp";
import MintWindow from "~~/components/MintWindow";
import { Address } from "~~/components/scaffold-eth";
import NerdSign from "~~/components/nerdSign";
import { Howl, Howler } from 'howler';

const Home: NextPage = () => {
    const { address: connectedAddress } = useAccount();

    return (
        <>
            <div className="flex items-center flex-col flex-grow pt-10 bgimg font-caveat">
                <div className="px-5">

                    <div className="bg-[url(/enjoy.png)] bg-fill h-96 w-full top-0" />
                    <div className="text-center text-lg font-caveat">
                        gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm <br />
                        gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm <br />
                        gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm <br />

                        <NerdSign />
                        gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm <br />
                        gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm gm <br />
                    </div>
                </div>
                <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
                    <MintWindow />
                </div>

            </div>
        </>
    );
};

export default Home;
