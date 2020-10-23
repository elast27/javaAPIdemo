import './App.css';
import { PersonTable } from './components/PersonTable';
import {NewPerson} from './components/new/NewPerson';
import {Row, Col} from 'reactstrap'


function App() {
  return (
    <div className="App">
      <Row>
        <Col><PersonTable /></Col>
        <Col><NewPerson /></Col>
      </Row>
    </div>
  );
}

export default App;
