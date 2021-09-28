import ListCrypto from "../../components/List"
import { getAll } from "../../Api"
import { Component } from "react";

class List extends Component {
    constructor() {
      super();
      this.state = { cryptos: [], isLoaded:false };
    }
  
    async componentDidMount() {
       var current = this;
       getAll().then(function(res){
          console.log("RES");
          console.log(res);
          current.setState({ cryptos: res.data, isLoaded:true });
       });
      
    }
  
    render() {
      return (
        
        <div>
            <h1>Toutes les cryptos disponibles :</h1>
            <ListCrypto cryptos={this.state.cryptos} isLoaded={this.state.isLoaded}/>
        </div>
        
        
      );
    }
  }

export default List