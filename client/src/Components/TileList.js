import React, { Component } from 'react';
import { loremIpsum } from "lorem-ipsum";
import randomNumber from 'random-number';
import Container from 'react-bootstrap/Container';
import Tile from './Tile';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup';

class TileList extends Component {


    constructor(props) {
        super(props);

        this.state = {
            userList: []
        }
    }

    componentDidMount() {

        let currUser = {};
        let list = [];

        for(let i = 0; i < 100; i++){
            const username = loremIpsum({
                count: 1,
                units: "words"
            });

            const description = loremIpsum({
                count: 1,
                units: "sentences"
            });

            const ageGenerator = randomNumber.generator({
                min: 18,
                max: 100,
                integer: true
            });

            const age = ageGenerator(1);

            const image = 'https://picsum.photos/180/170';

            currUser = {
                username: username,
                age: age,
                description: description,
                image: image
            }

            list.push(currUser);

            currUser = {};
        }

        this.setState({
            userList: list
        });

    }


    render() {
        return (
            <Container fluid>
                <ListGroup horizontal='md'>
                {this.state.userList.map((user) => (
                    <ListGroup.Item className='tile-list-item'>
                    <Tile 
                    username={user.username}  
                    age={user.age}
                    description={user.description}
                    image={user.image}
                    >
                    </Tile>
                    </ListGroup.Item>
                ))}
                </ListGroup>
            </Container>
        );
    }
}

export default TileList;
