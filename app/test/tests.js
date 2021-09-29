var assert = require('assert');
var api = require ("../src/Api");


describe('Tets GetAll', function(){
    it('should return an non-empty array of cryptos', async function() {

        var l = 0;
        
        api.getAll().then(function(data){
            
            if(data){
                l=1;
            }
            
        
      }); 

      assert.equal(l, 2);
})})
 