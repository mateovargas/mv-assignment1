import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';


function Tile(props) {

    return (
        <div>
            <Container className="tile-container">
                <Card>
                    <Card.Img variant="top" src={props.image}/>
                    <Card.Body>
                        <Card.Text>
                            <ListGroup className='user-info' horizontal>
                                <ListGroup.Item>Username: {props.username}</ListGroup.Item>
                                <ListGroup.Item>Age: {props.age}</ListGroup.Item>
                                <ListGroup.Item>Desc.: {props.description}</ListGroup.Item>
                            </ListGroup>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

export default Tile