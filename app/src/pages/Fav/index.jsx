
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import withToggle from "./withToggle";

class Favorite extends React.Component {
  render() {
    const { children, isAdded, color } = this.props;
    return (
      <div>
        <FontAwesomeIcon
          icon={faHeart}
          color={isAdded ? color : ""}
          style={{ cursor: "pointer" }}
        />
        {children}
      </div>
    );
  }
}

export default withToggle({ propertyName: "isAdded" })(Favorite);

class Catalogue extends Component {
    constructor(props) {
    super(props);
    let favoriteTopicsData = [];
    favoriteTopicsData.push(
        this.props.topicNames						
            )
    this.state = {
        favoriteTopicsData: favoriteTopicsData
    };
}
    componentWillReceiveProps(nextProps){
    // console.log("nextProps in myTopics",nextProps);
    let favoriteTopicsData = [];
    favoriteTopicsData.push(
                this.props.topicNames
                )
    this.setState({favoriteTopicsData});
}
    render() {
    return (
        <View key={"MyTopics"}>
            <GridView gridViewData={this.state.favoriteTopicsData} openSubCat={this._openSubCat} parentKey={"MyTopics"} />
        </View>
    );
}
}

function Fav() {
    return (
        <div>
            <h1>Mes cryptos favorites</h1>
        </div>
    )
}

export default Fav