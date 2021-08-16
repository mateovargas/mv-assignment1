import logo from './logo.svg';
import './App.css';
import Tile from './Components/Tile';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import TileList from './Components/TileList';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <TileList></TileList>
      </Container>
    </div>
  );
}

export default App;
