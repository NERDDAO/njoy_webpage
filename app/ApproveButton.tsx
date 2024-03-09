import React, { useEffect, useState } from "react";
import Image from "next/image";
import MintButton from "./MintButton";
import { ethers } from "ethers";
import { Howl, Howler } from "howler";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth/useScaffoldContractWrite";

type ApproveButtonProps = {
    contractName: string; // This should match the key used in your contract configurations
    spenderAddress: string; // The address that will be approved to spend tokens
};

const ApproveButton: React.FC<ApproveButtonProps> = ({ contractName, spenderAddress }) => {
    const { address: connectedAddress } = useAccount();
    const [stakeAmount, setStakeAmount] = useState(0);
    const [isApproved, setIsApproved] = useState(false);
    const spender = '0x2Cd4fD0d124Ed30186B13ef96F7A8671d3cE6CCB'

    const mint = useScaffoldContractWrite({
        contractName: "gaslite_nJoy",
        functionName: "publicMint",
        args: [BigInt(stakeAmount)],
    });

    const allowance = useScaffoldContractRead({
        contractName: "Token",
        functionName: "allowance",
        args: [connectedAddress, spender],
    });
    const balance = useScaffoldContractRead({
        contractName: "Token",
        functionName: "balanceOf",
        args: [connectedAddress],
    });

    const price = useScaffoldContractRead({
        contractName: "gaslite_nJoy",
        functionName: "price",
    });

    useEffect(() => {
        if (allowance.data && allowance.data > BigInt(0)) {
            setIsApproved(true);
            return
        }
        setIsApproved(false);
    }, [connectedAddress, allowance]);


    const toHumanReadable = (num: number) => {
        const amount = num / 1000000000000000000;
        if (isNaN(amount)) {
            return 0;
        }
        return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    };


    const callDeposit = async () => {
        await mint.writeAsync();
    };

    const sound = new Howl({
        src: ['clicky.mp3']
    });
    const { writeAsync, isMining } = useScaffoldContractWrite({
        contractName: "Token",
        functionName: "approve",
        args: [spenderAddress, ethers.MaxUint256] as any,
    });


    const handleApprove = async () => {
        sound.play();
        try {
            const tx = await writeAsync();
            if (tx) {
                setIsApproved(true);
            }
            console.log("Transaction result:", tx);
        } catch (error) {
            console.error("Approval error:", error);

            setIsApproved(false);
        }

    };

    return (
        <div className="absolute ml-4 flex flex-row  bg-cover p-4  h-full font-bold text-2xl text-white">


            <p className="relative align-middle top-0 w-1/3 justify-center p-12 backdrop-blur-lg">
                <span className="text-yellow-400"> GM ENJOYOORS</span> THE NERDS ARE HERE!!!
                WE SAW YOU ENJOY $ENJOY SO WE MADE SOME NFTS SO YOU CAN ENJOY WHILE YOU ENJOY!!1!!

                HERES THE DEAL: WE ARE RE ONLY ACCEPTING $ENJOY AND WILL USE IT TO CREATE SOME FARMS SO YOU CAN EARN ENJOY WHILE YOU $ENJOY OUR NFTS. ENJOY!</p>

            <div className="relative backdrop-blur-2xl p-12  bg-cover bg-no-repeat h-96 w-96 top-0 flex flex-col" >

                <Image src="/temp.png" alt="backdrop" className="relative top-0" width={384} height={384} />

                {!isApproved &&
                    <button
                        className="relative bg-no-repeat h-24 w-52  border-2 bg-cover top-2 left-12 p-4 bg-[url(/vwave.jpg)] text-blue-500 pt-12"
                        onClick={handleApprove}
                        disabled={isMining}
                    >

                        {isMining ? "Approving..." : "Approve"}
                    </button>
                }
                {isApproved &&
                    <button
                        className="relative bg-no-repeat h-24 w-52  border-2 bg-cover top-2 left-12 p-4 bg-[url(/car.jpg)] text-blue-500 pt-2"
                        disabled={isMining}
                    >

                        <MintButton contractName={"gaslite_nJoy"} mintAmount={1} mintPrice={"0"} value={"0"} />
                    </button>
                }
            </div>

            <ul className="backdrop-blur-lg relative items-center flex flex-col pt-24 p-12 align-middle snap-center">

                BALANCE:{toHumanReadable(Number(balance.data))}<br />
                PRICE:{toHumanReadable(Number(price.data))}
                <p className="my-2 font-medium">Connected Address:</p>
                <Address address={connectedAddress} />


                <button onClick={() => Howler.stop()}>MUTE</button>

            </ul>


        </div>


    );
};

export default ApproveButton;

//       <ApproveButton contractName={"Token"} spenderAddress={"0x0A65EB7B31Ad4b0b9fd73cC0e2bb1788eBb393b8"} />
