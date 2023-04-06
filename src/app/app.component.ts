import { Component } from "@angular/core";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { ethers, BigNumber } from "ethers";
import abi from "../assets/abi";
import ERC20abi from "../assets/ERC20abi";

declare global {
	interface Window {
		ethereum?: MetaMaskInpageProvider;
	}
}

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent {
	title = "TokenFrenzy-app";
	myName = "Token";
	blockNumber: number | string | undefined;
	provider: ethers.providers.BaseProvider | any;
	transactions: string[] | undefined;
	userWallet: any;
	walletAddress: string = "";
	contractAddress: string = "";
	contractAbi = abi;
	tokneAbi = ERC20abi;
	contractInstance: any;
	lotteryOpen: boolean = false;
	acceptedTokens: any;
	ownersFee: number = 0;
	minBet: number = 0;
	totalBets: number = 0;
	winner: string = "";
	odds: number = 0;

	constructor() {
		this.provider = ethers.getDefaultProvider("goerli");
	}

	connectMetamask() {
		window.ethereum
			?.request({
				method: "eth_requestAccounts",
			})
			.then((res) => {
				this.userWallet = res;
				this.userWallet = this.userWallet[0];
				this.walletAddress = this.userWallet
					.slice(0, 5)
					.concat("...")
					.concat(this.userWallet.slice(-4));
			});
	}

	getContract(_contractAddress: string) {
		this.contractAddress = _contractAddress;
		this.contractInstance = new ethers.Contract(
			this.contractAddress,
			this.contractAbi,
			this.provider
		);

		this.contractInstance.lotteryOpen().then((res: boolean) => {
			this.lotteryOpen = res;
		});

		this.contractInstance.lotteryOpen().then((res: any) => {
			this.lotteryOpen = res;
		});

		this.contractInstance.getAcceptedTokens().then((res: any) => {
			this.acceptedTokens = res;
		});

		this.contractInstance.index().then((res: number) => {
			const index = res;
			this.contractInstance.tokenFrenzy(index).then((res2: any) => {
				this.ownersFee = res2[0];
				this.totalBets = parseFloat(ethers.utils.formatEther(res2[3]));
				this.minBet = parseFloat(ethers.utils.formatEther(res2[4]));
				this.winner = res2[2];
			});
		});
	}

	enterLottery(tokenAddress: string, amount: string) {
		const tokenIface = new ethers.utils.Interface(this.tokneAbi);
		const approveData = tokenIface.encodeFunctionData("approve", [
			this.contractAddress,
			BigNumber.from(ethers.utils.parseEther(amount)),
		]);

		const approveParams = {
			nonce: "0x00", // ignored by MetaMask
			gasPrice: "", // customizable by user during MetaMask confirmation.
			gas: "", // customizable by user during MetaMask confirmation.
			to: tokenAddress, // Required except during contract publications.
			from: window.ethereum?.selectedAddress, // must match user's active address.
			value: "0x00", // Only required to send ether to the recipient from the initiating external account.
			data: approveData, // Optional, but used for defining smart contract creation and interaction.
			chainId: "0x3", // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
		};

		const approveTx = window.ethereum?.request({
			method: "eth_sendTransaction",
			params: [approveParams],
		});

		approveTx?.then((res) => {
			this.provider.waitForTransaction(res, 1).then(() => {
				const lotteryIface = new ethers.utils.Interface(this.contractAbi);
				const txData = lotteryIface.encodeFunctionData("enterLottery", [
					tokenAddress,
					BigNumber.from(ethers.utils.parseEther(amount)),
				]);

				const txParams = {
					nonce: "0x00", // ignored by MetaMask
					gasPrice: "", // customizable by user during MetaMask confirmation.
					gas: "", // customizable by user during MetaMask confirmation.
					to: this.contractAddress, // Required except during contract publications.
					from: window.ethereum?.selectedAddress, // must match user's active address.
					value: "0x00", // Only required to send ether to the recipient from the initiating external account.
					data: txData, // Optional, but used for defining smart contract creation and interaction.
					chainId: "0x3", // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
				};

				window.ethereum?.request({
					method: "eth_sendTransaction",
					params: [txParams],
				});
			});
		});
	}

	getOdds(address: string) {
		this.contractInstance.getOdds(address).then((res: number) => {
			this.odds = res / 100;
		});
	}

	closeLottery() {
		const lotteryIface = new ethers.utils.Interface(this.contractAbi);
		const txData = lotteryIface.encodeFunctionData("closeLottery");

		const txParams = {
			nonce: "0x00", // ignored by MetaMask
			gasPrice: "", // customizable by user during MetaMask confirmation.
			gas: "", // customizable by user during MetaMask confirmation.
			to: this.contractAddress, // Required except during contract publications.
			from: window.ethereum?.selectedAddress, // must match user's active address.
			value: "0x00", // Only required to send ether to the recipient from the initiating external account.
			data: txData, // Optional, but used for defining smart contract creation and interaction.
			chainId: "0x3", // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
		};

		window.ethereum?.request({
			method: "eth_sendTransaction",
			params: [txParams],
		});
	}

	findWinner() {
		const lotteryIface = new ethers.utils.Interface(this.contractAbi);
		const txData = lotteryIface.encodeFunctionData("findWinner");

		const txParams = {
			nonce: "0x00", // ignored by MetaMask
			gasPrice: "", // customizable by user during MetaMask confirmation.
			gas: "", // customizable by user during MetaMask confirmation.
			to: this.contractAddress, // Required except during contract publications.
			from: window.ethereum?.selectedAddress, // must match user's active address.
			value: "0x00", // Only required to send ether to the recipient from the initiating external account.
			data: txData, // Optional, but used for defining smart contract creation and interaction.
			chainId: "0x3", // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
		};

		window.ethereum?.request({
			method: "eth_sendTransaction",
			params: [txParams],
		});
	}

	withdrawTokens() {
		const lotteryIface = new ethers.utils.Interface(this.contractAbi);
		const txData = lotteryIface.encodeFunctionData("withdrawTokens");

		const txParams = {
			nonce: "0x00", // ignored by MetaMask
			gasPrice: "", // customizable by user during MetaMask confirmation.
			gas: "", // customizable by user during MetaMask confirmation.
			to: this.contractAddress, // Required except during contract publications.
			from: window.ethereum?.selectedAddress, // must match user's active address.
			value: "0x00", // Only required to send ether to the recipient from the initiating external account.
			data: txData, // Optional, but used for defining smart contract creation and interaction.
			chainId: "0x3", // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
		};

		window.ethereum?.request({
			method: "eth_sendTransaction",
			params: [txParams],
		});
	}
}
