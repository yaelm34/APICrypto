const { doesNotReject } = require('assert');
var assert = require('assert');
var api = require ("../src/Api");

describe('Test API', function(){
    this.timeout(5000);
    describe('Test GetAll', function(){
        it('should return an non-empty array of cryptos', async function() {
    
         var l = 0;
         var data = await api.getAll();
            
          if(data){
                l=1;  
          }   
        
          assert.equal(l, 1);
    })});
    
    describe('Test Get', function(){
        it('should return an valid crypto with an id', async function() {
    
         var c = 0;
         var coin = await api.getCoin("ethereum");
         
          if(coin){
                c++;  
          }  
    
       
          assert.equal(c, 1);
    })});
     
})

