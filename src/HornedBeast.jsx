function HornedBeast(props) {
    return (
        <>
            <h2>Animal : {props.title}</h2>
            <p>Descripción : {props.description}</p>
            <img src={props.imageUrl} style={{width:'250px'}} alt={props.title}/>
        </>
        
    );
}
export default HornedBeast;