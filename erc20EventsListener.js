const Web3 = require('web3')
const erc20Abi = abi = require('human-standard-token-abi')

const config = {
  node: 'localhost:8546',
  address: '0x0000000000000000000000000000000000000000' // set to contract address
}

const provider = new Web3.providers.WebsocketProvider(`ws://${config.node}`)
const web3 = new Web3(provider)

const contract = new web3.eth.Contract(erc20Abi, config.address);

contract.events.allEvents(function (err, event) {
  if (err) {
    console.error('Error', err)
    process.exit(1)
  }

  console.log('Event', event)
})

console.log('Waiting for events...')
