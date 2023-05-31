// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


// function KitchenSinkExample({ images, title }) {
//   return (
//     <Card style={{ width: '18rem' }} >
//       <Card.Img variant="top" src={images} />
//       <Card.Body>
//         <Card.Title>{`Que dijo ${title}?`}</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the
//           bulk of the card's content.
//         </Card.Text>
//       </Card.Body>
//       <ListGroup className="list-group-flush">
//         <ListGroup.Item>Cras justo odio</ListGroup.Item>
//         <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//         <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
//       </ListGroup>
//       <Card.Body>
//         <Card.Link href="#">Card Link</Card.Link>
//         <Card.Link href="#">Another Link</Card.Link>
//       </Card.Body>
//     </Card>
//   );
// }

// export default KitchenSinkExample;

import '../styles/Card.css'

function KitchenSinkExample({ images, title, showModalContent }) {
  return (
    <div className='card text-center card_container'>
          <div className='contain__img'>
            <img src={ images } alt={title} className='card-img-top'/>
          </div>
          <div className='card-body'>
            <h4 className='card-title'>{`Que dijo ${title}?`}</h4>
            <p className='card-text text-secondary'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Natus nulla commodi ae mollitia eligendi dicta consequuntur 
                delectus, ut quas sequi soluta pariatur.
            </p>
            <div className="d-grid gap-2 col-8 mx-auto">
              <Button onClick={showModalContent} className="btn btn-primary" type="button">Button</Button>
            </div>
        </div>
    </div>
  );
}

export default KitchenSinkExample;