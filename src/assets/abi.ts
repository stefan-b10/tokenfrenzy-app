const abi = [
	{
		inputs: [
			{
				internalType: "address",
				name: "_linkAddress",
				type: "address",
			},
			{
				internalType: "address",
				name: "_vrfWrapperAddress",
				type: "address",
			},
			{
				internalType: "address",
				name: "_WETH",
				type: "address",
			},
		],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "sender",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "EnteredLottery",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
		],
		name: "OwnershipTransferRequested",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "to",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "requestId",
				type: "uint256",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "index",
				type: "uint256",
			},
		],
		name: "RandomRequest",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "uint256",
				name: "requestId",
				type: "uint256",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "index",
				type: "uint256",
			},
		],
		name: "RandomResult",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "winner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "uint256",
				name: "index",
				type: "uint256",
			},
		],
		name: "Winner",
		type: "event",
	},
	{
		inputs: [],
		name: "WETH",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "acceptOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "closeLottery",
		outputs: [
			{
				internalType: "uint256",
				name: "requestId",
				type: "uint256",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "enterLottery",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "findWinner",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "getAcceptedTokens",
		outputs: [
			{
				internalType: "address[]",
				name: "",
				type: "address[]",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "target",
				type: "address",
			},
		],
		name: "getOdds",
		outputs: [
			{
				internalType: "uint256",
				name: "odds",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "index",
		outputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "linkAddress",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "lotteryOpen",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_requestId",
				type: "uint256",
			},
			{
				internalType: "uint256[]",
				name: "_randomWords",
				type: "uint256[]",
			},
		],
		name: "rawFulfillRandomWords",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address[]",
				name: "_acceptedTokens",
				type: "address[]",
			},
			{
				internalType: "address[]",
				name: "_pairs",
				type: "address[]",
			},
			{
				internalType: "uint256",
				name: "_minBet",
				type: "uint256",
			},
			{
				internalType: "uint8",
				name: "_ownersFee",
				type: "uint8",
			},
			{
				internalType: "uint64",
				name: "_lotteryClosingTime",
				type: "uint64",
			},
		],
		name: "startLottery",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "statuses",
		outputs: [
			{
				internalType: "uint256",
				name: "fees",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "randomWord",
				type: "uint256",
			},
			{
				internalType: "bool",
				name: "fulfilled",
				type: "bool",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "",
				type: "uint256",
			},
		],
		name: "tokenFrenzy",
		outputs: [
			{
				internalType: "uint16",
				name: "ownersFee",
				type: "uint16",
			},
			{
				internalType: "uint64",
				name: "lotteryClosingTime",
				type: "uint64",
			},
			{
				internalType: "address",
				name: "lotteryWinner",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "totalBets",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "minBet",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "vrfWrapperAddress",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "_index",
				type: "uint256",
			},
		],
		name: "withdrawTokens",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];
export default abi;