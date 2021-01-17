import web3 from './web3';

import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
JSON.parse(CampaignFactory.interface),
'0x0cfdF8Dd560C6Bd3971D833afb9346e4391e9224'
);

export default instance;