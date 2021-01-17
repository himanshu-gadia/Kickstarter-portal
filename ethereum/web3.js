import Web3 from 'web3';

let web3;

if(typeof window !== 'undefined' && typeof window.web3 !== 'undefined'){
	//we are in browser and metamask is running
	web3 = new Web3(window.web3.currentProvider);
}else{
	//we are in server OR no metamask running 
	const provider = new Web3.providers.HttpProvider(
	'https://rinkeby.infura.io/v3/23eafdf1d8a14a93b0122b08f9ca7ef5'
	);
	web3 = new Web3(provider);
}

//window.ethereum.enable();  // add this because in latest metamask update they have start hiding the metamask acc.

export default web3;
