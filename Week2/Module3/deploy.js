(async () => {
    try {
      console.log('Deploying the 1_Storage contract with web3 script ')
      
      const constructorArgs = []
      const metadata = JSON.parse(await remix.call('fileManager', 'getFile', 'browser/contracts/artifacts/Owner.json'))
      const accounts = await web3.eth.getAccounts()
  
      let contract = new web3.eth.Contract(metadata.abi)
  
      contract = contract.deploy({
        data: metadata.data.bytecode.object,
        arguments: constructorArgs
      })
  
      newContractInstance = await contract.send({
        from: accounts[0],
        gas: 1500000,
        gasPrice: '30000000000'
      })
      console.log(newContractInstance.options.address)
    } catch (e) {
      console.log(e.message)
    }
  })()