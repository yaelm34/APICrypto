import { getCoin } from "../../Api";
import { useParams } from 'react-router-dom';
import { withRouter } from "react-router";
import axios from "axios";
import { Component } from "react";
import DetailsCoin from "../../components/DetailsCoin";

function Details(){

    //const { id } = useParams();
    const {id} = useParams();
    var tab = [];
    /*axios.get('https://api.coingecko.com/api/v3/coins/'+id)
    .then(function (response) {
      result=response.data;
      return(
        <div>
            {result}
        </div>
      )
    });
    console.log(result);*/


   return(
     
    <div>
      <DetailsCoin id={id} details={tab} />
    </div>
   );
    

}

export default Details;


/*class Details extends Component {
  constructor() {
    super();
    this.state = { details: [], isLoaded:false };
    //console.log(this.props);
    this.id = this.props.match.params.id;

  }

  async componentDidMount() {
     var current = this;
     getCoin(this.id).then(function(res){
      console.log("RES");
      console.log(res);
        current.setState({ details: res.data, isLoaded:true });
     });
    
  }

  render() {
    console.log(this);
    return (
      
      <div>
          <h1>Details de la crypto {this.id}</h1>
          <div>{this.state.details}</div>
      </div>
      
      
    );
  }
}

export default withRouter(Details);*/