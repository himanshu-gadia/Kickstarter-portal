const HDWalletProvider = require('truffle-hdwallet-provider');	
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json'); 

const provider = new HDWalletProvider(
'snack harbor snack assume term ring afraid write detail hill disease like',
'https://rinkeby.infura.io/v3/23eafdf1d8a14a93b0122b08f9ca7ef5'
);

const web3 = new Web3(provider);

const deploy = async()=>{
	const accounts = await web3.eth.getAccounts();
	
	console.log('attempting to deploy from account', accounts[0]);
	
	const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });
	
	console.log('contract deployed to', result.options.address);
};

deploy();