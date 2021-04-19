import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
function Sticker() {
    return (
        <Card  className="m-2"style={{ width: '17rem' }}>
        <Card.Img variant="top" src="https://picsum.photos/id/237/500/325" />
        <Card.Body >
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default Sticker;