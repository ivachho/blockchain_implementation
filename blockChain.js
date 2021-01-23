constant SHA256 = require('cryto-js/sha256');
  
  class Bloack {
      constructor(index, timestamp, data, previousHash = ''){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = ''; //this must be calculated

      }
      //take in properties of block, set default to empty
      //index: where the block is on the chain
      //timestamp: when was the block created
      //

      calculateHash(){

      } //this function will calculate the hash using properties 

  }

