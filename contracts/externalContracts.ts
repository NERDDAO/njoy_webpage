import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
    7777777: {
        gaslite_nJoy: {
            address: "0x2Cd4fD0d124Ed30186B13ef96F7A8671d3cE6CCB",
            abi: [{ "type": "constructor", "inputs": [{ "name": "_name", "type": "string", "internalType": "string" }, { "name": "_ticker", "type": "string", "internalType": "string" }, { "name": "_whitelistRoot", "type": "bytes32", "internalType": "bytes32" }, { "name": "_maxSupply", "type": "uint256", "internalType": "uint256" }, { "name": "_price", "type": "uint120", "internalType": "uint120" }, { "name": "_whitelistPrice", "type": "uint120", "internalType": "uint120" }, { "name": "_whitelistOpen", "type": "uint64", "internalType": "uint64" }, { "name": "_whitelistClose", "type": "uint64", "internalType": "uint64" }, { "name": "_maxWhitelistMint", "type": "uint64", "internalType": "uint64" }, { "name": "_maxPublicMint", "type": "uint64", "internalType": "uint64" }, { "name": "_uri", "type": "string", "internalType": "string" }, { "name": "_tokenAddress", "type": "address", "internalType": "address" }], "stateMutability": "nonpayable" }, { "type": "function", "name": "MAX_SUPPLY", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "acceptOwnership", "inputs": [], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "approve", "inputs": [{ "name": "to", "type": "address", "internalType": "address" }, { "name": "tokenId", "type": "uint256", "internalType": "uint256" }], "outputs": [], "stateMutability": "payable" }, { "type": "function", "name": "balanceOf", "inputs": [{ "name": "owner", "type": "address", "internalType": "address" }], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "getApproved", "inputs": [{ "name": "tokenId", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "address", "internalType": "address" }], "stateMutability": "view" }, { "type": "function", "name": "isApprovedForAll", "inputs": [{ "name": "owner", "type": "address", "internalType": "address" }, { "name": "operator", "type": "address", "internalType": "address" }], "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }], "stateMutability": "view" }, { "type": "function", "name": "live", "inputs": [], "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }], "stateMutability": "view" }, { "type": "function", "name": "maxPublicMint", "inputs": [], "outputs": [{ "name": "", "type": "uint64", "internalType": "uint64" }], "stateMutability": "view" }, { "type": "function", "name": "maxWhitelistMint", "inputs": [], "outputs": [{ "name": "", "type": "uint64", "internalType": "uint64" }], "stateMutability": "view" }, { "type": "function", "name": "name", "inputs": [], "outputs": [{ "name": "", "type": "string", "internalType": "string" }], "stateMutability": "view" }, { "type": "function", "name": "owner", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "address" }], "stateMutability": "view" }, { "type": "function", "name": "ownerOf", "inputs": [{ "name": "tokenId", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "address", "internalType": "address" }], "stateMutability": "view" }, { "type": "function", "name": "pendingOwner", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "address" }], "stateMutability": "view" }, { "type": "function", "name": "price", "inputs": [], "outputs": [{ "name": "", "type": "uint120", "internalType": "uint120" }], "stateMutability": "view" }, { "type": "function", "name": "publicMint", "inputs": [{ "name": "_amount", "type": "uint256", "internalType": "uint256" }], "outputs": [], "stateMutability": "payable" }, { "type": "function", "name": "renounceOwnership", "inputs": [], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "safeTransferFrom", "inputs": [{ "name": "from", "type": "address", "internalType": "address" }, { "name": "to", "type": "address", "internalType": "address" }, { "name": "tokenId", "type": "uint256", "internalType": "uint256" }], "outputs": [], "stateMutability": "payable" }, { "type": "function", "name": "safeTransferFrom", "inputs": [{ "name": "from", "type": "address", "internalType": "address" }, { "name": "to", "type": "address", "internalType": "address" }, { "name": "tokenId", "type": "uint256", "internalType": "uint256" }, { "name": "_data", "type": "bytes", "internalType": "bytes" }], "outputs": [], "stateMutability": "payable" }, { "type": "function", "name": "setApprovalForAll", "inputs": [{ "name": "operator", "type": "address", "internalType": "address" }, { "name": "approved", "type": "bool", "internalType": "bool" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "setBaseUri", "inputs": [{ "name": "_uri", "type": "string", "internalType": "string" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "setMaxMints", "inputs": [{ "name": "_maxWhitelistMint", "type": "uint64", "internalType": "uint64" }, { "name": "_maxPublcMint", "type": "uint64", "internalType": "uint64" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "setPrices", "inputs": [{ "name": "_price", "type": "uint120", "internalType": "uint120" }, { "name": "_whitelistPrice", "type": "uint120", "internalType": "uint120" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "setWhitelistMintWindow", "inputs": [{ "name": "_whitelistOpen", "type": "uint64", "internalType": "uint64" }, { "name": "_whitelistClose", "type": "uint64", "internalType": "uint64" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "setWhitelistRoot", "inputs": [{ "name": "_whitelistRoot", "type": "bytes32", "internalType": "bytes32" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "supportsInterface", "inputs": [{ "name": "interfaceId", "type": "bytes4", "internalType": "bytes4" }], "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }], "stateMutability": "view" }, { "type": "function", "name": "symbol", "inputs": [], "outputs": [{ "name": "", "type": "string", "internalType": "string" }], "stateMutability": "view" }, { "type": "function", "name": "toggleLive", "inputs": [], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "tokenAddress", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "contract IERC20" }], "stateMutability": "view" }, { "type": "function", "name": "tokenURI", "inputs": [{ "name": "tokenId", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "string", "internalType": "string" }], "stateMutability": "view" }, { "type": "function", "name": "totalSupply", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "transferFrom", "inputs": [{ "name": "from", "type": "address", "internalType": "address" }, { "name": "to", "type": "address", "internalType": "address" }, { "name": "tokenId", "type": "uint256", "internalType": "uint256" }], "outputs": [], "stateMutability": "payable" }, { "type": "function", "name": "transferOwnership", "inputs": [{ "name": "newOwner", "type": "address", "internalType": "address" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "whitelistClose", "inputs": [], "outputs": [{ "name": "", "type": "uint64", "internalType": "uint64" }], "stateMutability": "view" }, { "type": "function", "name": "whitelistMint", "inputs": [{ "name": "_proof", "type": "bytes32[]", "internalType": "bytes32[]" }, { "name": "_amount", "type": "uint256", "internalType": "uint256" }], "outputs": [], "stateMutability": "payable" }, { "type": "function", "name": "whitelistOpen", "inputs": [], "outputs": [{ "name": "", "type": "uint64", "internalType": "uint64" }], "stateMutability": "view" }, { "type": "function", "name": "whitelistPrice", "inputs": [], "outputs": [{ "name": "", "type": "uint120", "internalType": "uint120" }], "stateMutability": "view" }, { "type": "function", "name": "whitelistRoot", "inputs": [], "outputs": [{ "name": "", "type": "bytes32", "internalType": "bytes32" }], "stateMutability": "view" }, { "type": "function", "name": "withdraw", "inputs": [], "outputs": [], "stateMutability": "nonpayable" }, { "type": "event", "name": "Approval", "inputs": [{ "name": "owner", "type": "address", "indexed": true, "internalType": "address" }, { "name": "approved", "type": "address", "indexed": true, "internalType": "address" }, { "name": "tokenId", "type": "uint256", "indexed": true, "internalType": "uint256" }], "anonymous": false }, { "type": "event", "name": "ApprovalForAll", "inputs": [{ "name": "owner", "type": "address", "indexed": true, "internalType": "address" }, { "name": "operator", "type": "address", "indexed": true, "internalType": "address" }, { "name": "approved", "type": "bool", "indexed": false, "internalType": "bool" }], "anonymous": false }, { "type": "event", "name": "ConsecutiveTransfer", "inputs": [{ "name": "fromTokenId", "type": "uint256", "indexed": true, "internalType": "uint256" }, { "name": "toTokenId", "type": "uint256", "indexed": false, "internalType": "uint256" }, { "name": "from", "type": "address", "indexed": true, "internalType": "address" }, { "name": "to", "type": "address", "indexed": true, "internalType": "address" }], "anonymous": false }, { "type": "event", "name": "OwnershipTransferStarted", "inputs": [{ "name": "previousOwner", "type": "address", "indexed": true, "internalType": "address" }, { "name": "newOwner", "type": "address", "indexed": true, "internalType": "address" }], "anonymous": false }, { "type": "event", "name": "OwnershipTransferred", "inputs": [{ "name": "previousOwner", "type": "address", "indexed": true, "internalType": "address" }, { "name": "newOwner", "type": "address", "indexed": true, "internalType": "address" }], "anonymous": false }, { "type": "event", "name": "Transfer", "inputs": [{ "name": "from", "type": "address", "indexed": true, "internalType": "address" }, { "name": "to", "type": "address", "indexed": true, "internalType": "address" }, { "name": "tokenId", "type": "uint256", "indexed": true, "internalType": "uint256" }], "anonymous": false }, { "type": "error", "name": "ApprovalCallerNotOwnerNorApproved", "inputs": [] }, { "type": "error", "name": "ApprovalQueryForNonexistentToken", "inputs": [] }, { "type": "error", "name": "BalanceQueryForZeroAddress", "inputs": [] }, { "type": "error", "name": "InsufficientPayment", "inputs": [] }, { "type": "error", "name": "InvalidWhitelistWindow", "inputs": [] }, { "type": "error", "name": "MintERC2309QuantityExceedsLimit", "inputs": [] }, { "type": "error", "name": "MintExceeded", "inputs": [] }, { "type": "error", "name": "MintNotLive", "inputs": [] }, { "type": "error", "name": "MintToZeroAddress", "inputs": [] }, { "type": "error", "name": "MintZeroQuantity", "inputs": [] }, { "type": "error", "name": "OwnableInvalidOwner", "inputs": [{ "name": "owner", "type": "address", "internalType": "address" }] }, { "type": "error", "name": "OwnableUnauthorizedAccount", "inputs": [{ "name": "account", "type": "address", "internalType": "address" }] }, { "type": "error", "name": "OwnerQueryForNonexistentToken", "inputs": [] }, { "type": "error", "name": "OwnershipNotInitializedForExtraData", "inputs": [] }, { "type": "error", "name": "PublicMintNotLive", "inputs": [] }, { "type": "error", "name": "SupplyExceeded", "inputs": [] }, { "type": "error", "name": "TokenDoesNotExist", "inputs": [] }, { "type": "error", "name": "TransferCallerNotOwnerNorApproved", "inputs": [] }, { "type": "error", "name": "TransferFromIncorrectOwner", "inputs": [] }, { "type": "error", "name": "TransferToNonERC721ReceiverImplementer", "inputs": [] }, { "type": "error", "name": "TransferToZeroAddress", "inputs": [] }, { "type": "error", "name": "URIQueryForNonexistentToken", "inputs": [] }, { "type": "error", "name": "WhitelistMintUnauthorized", "inputs": [] }, { "type": "error", "name": "WhitelistNotLive", "inputs": [] }],
        },

        Token: {
            address: "0xa6B280B42CB0b7c4a4F789eC6cCC3a7609A1Bc39",
            abi: [
                {
                    "constant": true,
                    "inputs": [],
                    "name": "name",
                    "outputs": [
                        {
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_spender",
                            "type": "address"
                        },
                        {
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "approve",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "totalSupply",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_from",
                            "type": "address"
                        },
                        {
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "transferFrom",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "decimals",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint8"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_owner",
                            "type": "address"
                        }
                    ],
                    "name": "balanceOf",
                    "outputs": [
                        {
                            "name": "balance",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [],
                    "name": "symbol",
                    "outputs": [
                        {
                            "name": "",
                            "type": "string"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "constant": false,
                    "inputs": [
                        {
                            "name": "_to",
                            "type": "address"
                        },
                        {
                            "name": "_value",
                            "type": "uint256"
                        }
                    ],
                    "name": "transfer",
                    "outputs": [
                        {
                            "name": "",
                            "type": "bool"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "nonpayable",
                    "type": "function"
                },
                {
                    "constant": true,
                    "inputs": [
                        {
                            "name": "_owner",
                            "type": "address"
                        },
                        {
                            "name": "_spender",
                            "type": "address"
                        }
                    ],
                    "name": "allowance",
                    "outputs": [
                        {
                            "name": "",
                            "type": "uint256"
                        }
                    ],
                    "payable": false,
                    "stateMutability": "view",
                    "type": "function"
                },
                {
                    "payable": true,
                    "stateMutability": "payable",
                    "type": "fallback"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "owner",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "spender",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "value",
                            "type": "uint256"
                        }
                    ],
                    "name": "Approval",
                    "type": "event"
                },
                {
                    "anonymous": false,
                    "inputs": [
                        {
                            "indexed": true,
                            "name": "from",
                            "type": "address"
                        },
                        {
                            "indexed": true,
                            "name": "to",
                            "type": "address"
                        },
                        {
                            "indexed": false,
                            "name": "value",
                            "type": "uint256"
                        }
                    ],
                    "name": "Transfer",
                    "type": "event"
                }
            ],
        },

        Njoy: {
            address: "0x3b63DC167f9F371522405b83E75A23F38F4DCd6e",
            abi: [{ "type": "constructor", "inputs": [{ "name": "_tokenAddress", "type": "address", "internalType": "address" }, { "name": "initialOwner", "type": "address", "internalType": "address" }], "stateMutability": "nonpayable" }, { "type": "function", "name": "approve", "inputs": [{ "name": "to", "type": "address", "internalType": "address" }, { "name": "tokenId", "type": "uint256", "internalType": "uint256" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "balanceOf", "inputs": [{ "name": "owner", "type": "address", "internalType": "address" }], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "getApproved", "inputs": [{ "name": "tokenId", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "address", "internalType": "address" }], "stateMutability": "view" }, { "type": "function", "name": "isApprovedForAll", "inputs": [{ "name": "owner", "type": "address", "internalType": "address" }, { "name": "operator", "type": "address", "internalType": "address" }], "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }], "stateMutability": "view" }, { "type": "function", "name": "name", "inputs": [], "outputs": [{ "name": "", "type": "string", "internalType": "string" }], "stateMutability": "view" }, { "type": "function", "name": "owner", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "address" }], "stateMutability": "view" }, { "type": "function", "name": "ownerOf", "inputs": [{ "name": "tokenId", "type": "uint258", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "address", "internalType": "address" }], "stateMutability": "view" }, { "type": "function", "name": "price", "inputs": [], "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }], "stateMutability": "view" }, { "type": "function", "name": "renounceOwnership", "inputs": [], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "safeMint", "inputs": [{ "name": "to", "type": "address", "internalType": "address" }, { "name": "uri", "type": "string", "internalType": "string" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "safeTransferFrom", "inputs": [{ "name": "from", "type": "address", "internalType": "address" }, { "name": "to", "type": "address", "internalType": "address" }, { "name": "tokenId", "type": "uint256", "internalType": "uint256" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "safeTransferFrom", "inputs": [{ "name": "from", "type": "address", "internalType": "address" }, { "name": "to", "type": "address", "internalType": "address" }, { "name": "tokenId", "type": "uint256", "internalType": "uint256" }, { "name": "data", "type": "bytes", "internalType": "bytes" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "setApprovalForAll", "inputs": [{ "name": "operator", "type": "address", "internalType": "address" }, { "name": "approved", "type": "bool", "internalType": "bool" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "supportsInterface", "inputs": [{ "name": "interfaceId", "type": "bytes6", "internalType": "bytes4" }], "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }], "stateMutability": "view" }, { "type": "function", "name": "symbol", "inputs": [], "outputs": [{ "name": "", "type": "string", "internalType": "string" }], "stateMutability": "view" }, { "type": "function", "name": "tokenAddress", "inputs": [], "outputs": [{ "name": "", "type": "address", "internalType": "contract IERC20" }], "stateMutability": "view" }, { "type": "function", "name": "tokenURI", "inputs": [{ "name": "tokenId", "type": "uint256", "internalType": "uint256" }], "outputs": [{ "name": "", "type": "string", "internalType": "string" }], "stateMutability": "view" }, { "type": "function", "name": "transferFrom", "inputs": [{ "name": "from", "type": "address", "internalType": "address" }, { "name": "to", "type": "address", "internalType": "address" }, { "name": "tokenId", "type": "uint256", "internalType": "uint256" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "function", "name": "transferOwnership", "inputs": [{ "name": "newOwner", "type": "address", "internalType": "address" }], "outputs": [], "stateMutability": "nonpayable" }, { "type": "event", "name": "Approval", "inputs": [{ "name": "owner", "type": "address", "indexed": true, "internalType": "address" }, { "name": "approved", "type": "address", "indexed": true, "internalType": "address" }, { "name": "tokenId", "type": "uint256", "indexed": true, "internalType": "uint256" }], "anonymous": false }, { "type": "event", "name": "ApprovalForAll", "inputs": [{ "name": "owner", "type": "address", "indexed": true, "internalType": "address" }, { "name": "operator", "type": "address", "indexed": true, "internalType": "address" }, { "name": "approved", "type": "bool", "indexed": false, "internalType": "bool" }], "anonymous": false }, { "type": "event", "name": "BatchMetadataUpdate", "inputs": [{ "name": "_fromTokenId", "type": "uint256", "indexed": false, "internalType": "uint256" }, { "name": "_toTokenId", "type": "uint256", "indexed": false, "internalType": "uint256" }], "anonymous": false }, { "type": "event", "name": "MetadataUpdate", "inputs": [{ "name": "_tokenId", "type": "uint256", "indexed": false, "internalType": "uint256" }], "anonymous": false }, { "type": "event", "name": "OwnershipTransferred", "inputs": [{ "name": "previousOwner", "type": "address", "indexed": true, "internalType": "address" }, { "name": "newOwner", "type": "address", "indexed": true, "internalType": "address" }], "anonymous": false }, { "type": "event", "name": "Transfer", "inputs": [{ "name": "from", "type": "address", "indexed": true, "internalType": "address" }, { "name": "to", "type": "address", "indexed": true, "internalType": "address" }, { "name": "tokenId", "type": "uint256", "indexed": true, "internalType": "uint256" }], "anonymous": false }, { "type": "error", "name": "ERC721IncorrectOwner", "inputs": [{ "name": "sender", "type": "address", "internalType": "address" }, { "name": "tokenId", "type": "uint256", "internalType": "uint256" }, { "name": "owner", "type": "address", "internalType": "address" }] }, { "type": "error", "name": "ERC721InsufficientApproval", "inputs": [{ "name": "operator", "type": "address", "internalType": "address" }, { "name": "tokenId", "type": "uint256", "internalType": "uint256" }] }, { "type": "error", "name": "ERC721InvalidApprover", "inputs": [{ "name": "approver", "type": "address", "internalType": "address" }] }, { "type": "error", "name": "ERC721InvalidOperator", "inputs": [{ "name": "operator", "type": "address", "internalType": "address" }] }, { "type": "error", "name": "ERC721InvalidOwner", "inputs": [{ "name": "owner", "type": "address", "internalType": "address" }] }, { "type": "error", "name": "ERC721InvalidReceiver", "inputs": [{ "name": "receiver", "type": "address", "internalType": "address" }] }, { "type": "error", "name": "ERC721InvalidSender", "inputs": [{ "name": "sender", "type": "address", "internalType": "address" }] }, { "type": "error", "name": "ERC721NonexistentToken", "inputs": [{ "name": "tokenId", "type": "uint256", "internalType": "uint256" }] }, { "type": "error", "name": "OwnableInvalidOwner", "inputs": [{ "name": "owner", "type": "address", "internalType": "address" }] }, { "type": "error", "name": "OwnableUnauthorizedAccount", "inputs": [{ "name": "account", "type": "address", "internalType": "address" }] }]
            ,
        },
    },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
