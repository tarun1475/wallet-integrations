let abi = [
  {
    "constant": true,
    "inputs": [],
    "name": "securityWindow",
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
    "constant": true,
    "inputs": [
      {
        "name": "_wallet",
        "type": "address"
      }
    ],
    "name": "getNonce",
    "outputs": [
      {
        "name": "nonce",
        "type": "uint256"
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
        "name": "_wallet",
        "type": "address"
      }
    ],
    "name": "getCurrentLimit",
    "outputs": [
      {
        "name": "_currentLimit",
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
        "name": "_wallet",
        "type": "address"
      },
      {
        "name": "_module",
        "type": "address"
      }
    ],
    "name": "addModule",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_wallet",
        "type": "address"
      }
    ],
    "name": "getDailyUnspent",
    "outputs": [
      {
        "name": "_unspent",
        "type": "uint256"
      },
      {
        "name": "_periodEnd",
        "type": "uint64"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "securityPeriod",
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
    "constant": true,
    "inputs": [],
    "name": "oldLimitManager",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "transferStorage",
    "outputs": [
      {
        "name": "",
        "type": "address"
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
        "name": "_token",
        "type": "address"
      }
    ],
    "name": "recoverToken",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_wallet",
        "type": "address"
      }
    ],
    "name": "getPendingLimit",
    "outputs": [
      {
        "name": "_pendingLimit",
        "type": "uint256"
      },
      {
        "name": "_changeAfter",
        "type": "uint64"
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
        "name": "_wallet",
        "type": "address"
      },
      {
        "name": "_data",
        "type": "bytes"
      },
      {
        "name": "_nonce",
        "type": "uint256"
      },
      {
        "name": "_signatures",
        "type": "bytes"
      },
      {
        "name": "_gasPrice",
        "type": "uint256"
      },
      {
        "name": "_gasLimit",
        "type": "uint256"
      }
    ],
    "name": "execute",
    "outputs": [
      {
        "name": "success",
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
    "name": "priceProvider",
    "outputs": [
      {
        "name": "",
        "type": "address"
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
        "name": "",
        "type": "address"
      }
    ],
    "name": "relayer",
    "outputs": [
      {
        "name": "nonce",
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
    "name": "isOnlyOwnerModule",
    "outputs": [
      {
        "name": "",
        "type": "bytes4"
      }
    ],
    "payable": false,
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "defaultLimit",
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
    "constant": true,
    "inputs": [
      {
        "name": "_wallet",
        "type": "address"
      }
    ],
    "name": "isLimitDisabled",
    "outputs": [
      {
        "name": "_limitDisabled",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "_registry",
        "type": "address"
      },
      {
        "name": "_transferStorage",
        "type": "address"
      },
      {
        "name": "_guardianStorage",
        "type": "address"
      },
      {
        "name": "_priceProvider",
        "type": "address"
      },
      {
        "name": "_securityPeriod",
        "type": "uint256"
      },
      {
        "name": "_securityWindow",
        "type": "uint256"
      },
      {
        "name": "_defaultLimit",
        "type": "uint256"
      },
      {
        "name": "_oldLimitManager",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "wallet",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "target",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "whitelistAfter",
        "type": "uint64"
      }
    ],
    "name": "AddedToWhitelist",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "wallet",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "target",
        "type": "address"
      }
    ],
    "name": "RemovedFromWhitelist",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "wallet",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "id",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "name": "executeAfter",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "token",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "PendingTransferCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "wallet",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "id",
        "type": "bytes32"
      }
    ],
    "name": "PendingTransferExecuted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "wallet",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "id",
        "type": "bytes32"
      }
    ],
    "name": "PendingTransferCanceled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "wallet",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "newLimit",
        "type": "uint256"
      },
      {
        "indexed": true,
        "name": "startAfter",
        "type": "uint64"
      }
    ],
    "name": "LimitChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "wallet",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "token",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "wallet",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "token",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "Approved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "wallet",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "CalledContract",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "wallet",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "success",
        "type": "bool"
      },
      {
        "indexed": false,
        "name": "signedHash",
        "type": "bytes32"
      }
    ],
    "name": "TransactionExecuted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "name",
        "type": "bytes32"
      }
    ],
    "name": "ModuleCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "wallet",
        "type": "address"
      }
    ],
    "name": "ModuleInitialised",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_wallet",
        "type": "address"
      }
    ],
    "name": "init",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_wallet",
        "type": "address"
      },
      {
        "name": "_token",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_amount",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "transferToken",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_wallet",
        "type": "address"
      },
      {
        "name": "_token",
        "type": "address"
      },
      {
        "name": "_spender",
        "type": "address"
      },
      {
        "name": "_amount",
        "type": "uint256"
      }
    ],
    "name": "approveToken",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_wallet",
        "type": "address"
      },
      {
        "name": "_contract",
        "type": "address"
      },
      {
        "name": "_value",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "callContract",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_wallet",
        "type": "address"
      },
      {
        "name": "_token",
        "type": "address"
      },
      {
        "name": "_contract",
        "type": "address"
      },
      {
        "name": "_amount",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      }
    ],
    "name": "approveTokenAndCallContract",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_wallet",
        "type": "address"
      },
      {
        "name": "_target",
        "type": "address"
      }
    ],
    "name": "addToWhitelist",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_wallet",
        "type": "address"
      },
      {
        "name": "_target",
        "type": "address"
      }
    ],
    "name": "removeFromWhitelist",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_wallet",
        "type": "address"
      },
      {
        "name": "_token",
        "type": "address"
      },
      {
        "name": "_to",
        "type": "address"
      },
      {
        "name": "_amount",
        "type": "uint256"
      },
      {
        "name": "_data",
        "type": "bytes"
      },
      {
        "name": "_block",
        "type": "uint256"
      }
    ],
    "name": "executePendingTransfer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_wallet",
        "type": "address"
      },
      {
        "name": "_id",
        "type": "bytes32"
      }
    ],
    "name": "cancelPendingTransfer",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_wallet",
        "type": "address"
      },
      {
        "name": "_newLimit",
        "type": "uint256"
      }
    ],
    "name": "changeLimit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_wallet",
        "type": "address"
      }
    ],
    "name": "disableLimit",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_wallet",
        "type": "address"
      },
      {
        "name": "_target",
        "type": "address"
      }
    ],
    "name": "isWhitelisted",
    "outputs": [
      {
        "name": "_isWhitelisted",
        "type": "bool"
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
        "name": "_wallet",
        "type": "address"
      },
      {
        "name": "_id",
        "type": "bytes32"
      }
    ],
    "name": "getPendingTransfer",
    "outputs": [
      {
        "name": "_executeAfter",
        "type": "uint64"
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
        "name": "_data",
        "type": "bytes"
      },
      {
        "name": "_signature",
        "type": "bytes"
      }
    ],
    "name": "isValidSignature",
    "outputs": [
      {
        "name": "",
        "type": "bytes4"
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
        "name": "_msgHash",
        "type": "bytes32"
      },
      {
        "name": "_signature",
        "type": "bytes"
      }
    ],
    "name": "isValidSignature",
    "outputs": [
      {
        "name": "",
        "type": "bytes4"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

module.exports = {abi}; 