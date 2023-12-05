import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardItem.css'

function CardItem() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/300x300.jpg" />
      <Card.Body>
        <Card.Title><strong>Card Title</strong></Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardItem;