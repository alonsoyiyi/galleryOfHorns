import { useState } from "react";
import { Card, Button } from 'react-bootstrap'

function HornedBeast(props) {

    const [clicks, setClicks] = useState(0);

    function addCounter() {
        setClicks(clicks + 1);
        console.log(clicks);
    }

    return (
        <>
     

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.imageUrl} alt={props.title} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        <p>Descripción : {props.description}</p>
                        <p>Número de cuernos: {props.horns}</p>
                        <p>Palabra clave : {props.keyword}</p>
                    </Card.Text>
                    <Button onClick={addCounter} variant="primary">Me gusta : {clicks}</Button>
                </Card.Body>
            </Card>
        </>

    );
}
export default HornedBeast;