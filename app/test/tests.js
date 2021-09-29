var assert = require('assert');
var api = require ("../src/Api");


describe('Tets GetAll', function(){
    it('should return an non-empty array of crypros', async function() {

        
        api.getAll().then(function(data){
            var l = 0;
            if(data){
                l=1;
            }
        assert.equal(l, 1);
      }); 
})})
