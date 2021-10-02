import ListCrypto from "../../components/List"
import { getTop } from "../../Api"
import { Component } from "react";

class List extends Component {
    constructor() {
      super();
      this.state = { cryptos: [], isLoaded:false };
    }

    async componentDidMount() {
       var current = this;
       getTop().then(function(res){
          console.log("RES");
          console.log(res);

          var list = res.data;
          
          current.setState({ cryptos: list, isLoaded:true });
       });
      
    }
  
    render() {
      return (
        
        <div>
            <h1>Classement des cryptos les plus populaires :</h1>
            <ListCrypto cryptos={this.state.cryptos} isLoaded={this.state.isLoaded}/>
        </div>
        
        
      );
    }
  }

export default List