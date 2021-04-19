import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Sticker from './Sticker'


function App() {
  return (
  <div className="container-fluid">
      <Navbar className="bg-dark" expand="lg">
      <Navbar.Brand className="ml-5 text-light" href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse  id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="text-light" href="#home">Home</Nav.Link>
          <Nav.Link className=" text-light" href="#link">About</Nav.Link>
          <Nav.Link className=" text-light" href="#link">Services</Nav.Link>
          <Nav.Link className=" text-light" href="#link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  <div className="col-10 m-auto">
    <Jumbotron >
      <h1>Hello, world!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
 
<div className="d-flex">
<Sticker/>
<Sticker/>
<Sticker/>
<Sticker/>
</div>

</div>
<footer className="bg-dark text-light text-center py-3"> Landing Page RD</footer>
</div>
  );
}

export default App;
