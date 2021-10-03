function Element(props){

    var url = "details/"+ props.crypto.id;
    return(
        <div href={url}>
            <h2 href={url}><a href={url}>{props.crypto.name}</a></h2>
            <h3>{props.crypto.symbol}</h3>
        </div>
    );
}

export default Element;