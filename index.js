const Web3 = require('web3')
const { abi } = require('./BridgeValidators.json')

const url = 'https://dai.poa.network'
const address = '0xB289f0e6fBDFf8EEE340498a56e1787B303F1B6D'

async function main() {
    try {
        const web3 = new Web3(url)
        const contract = new web3.eth.Contract(abi, address)
        const events = await contract.getPastEvents('ValidatorAdded', { fromBlock: 0 });
        console.log(events)
    } catch (e) {
        console.error(e)
    }
}

main();
