import React, { useState } from "react";
import { ethers } from "ethers";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth/useScaffoldContractWrite";

type MintButtonProps = {
    contractName: string;
    mintAmount: number;
    mintPrice: string;
    value: string;
};

const MintButton: React.FC<MintButtonProps> = ({ contractName, mintPrice, value }) => {
    const [mintAmountSelected, setMintAmountSelected] = useState<number>(1); // Default mint amount is 1
    //   const mintPrice = "0.02"; // Default mint price per token in ETH
    const [isMinting, setIsMinting] = useState(false);

    const [mintAmount, setMintAmount] = useState(1);
    const { writeAsync } = useScaffoldContractWrite({
        contractName: "gaslite_nJoy",
        functionName: "publicMint",
        args: [BigInt(mintAmount)],
        value: BigInt((parseFloat(mintPrice) * mintAmountSelected).toString()),
    });


    const handleUpArrowClick = () => {
        setMintAmount(prevAmount => prevAmount + 1);
    }
    const handleDownArrowClick = () => {
        setMintAmount(prevAmount => prevAmount - 1);
    }



    const handleMint = async () => {
        setIsMinting(true);
        try {
            const tx = await writeAsync();
            console.log("Mint transaction successful:", tx);
        } catch (error) {
            console.error("Mint transaction error:", error);
        } finally {
            setIsMinting(false);
        }
    };

    return (
        <div className="flex flex-row p-4">
            <button className="backdrop-blur-sm" onClick={() => handleMint()}>
                MINT
            </button>
            <input
                type="number"
                className="relative overflow-hidden w-1/3"
                value={mintAmount}
                onChange={(e) => setMintAmount(parseInt(e.target.value, 10))}
                min="1"
            /><br />
            <button className="bg-[url(/up-arrow.png)] bg-cover" onClick={handleUpArrowClick} disabled={isMinting || mintAmount < 1}>
                ▲
            </button>
            <button className="bg-[url(/down-arrow.png)] bg-cover" onClick={handleDownArrowClick} disabled={isMinting || mintAmount < 1}>
                ▼
            </button>
        </div>
    );
};

export default MintButton;
