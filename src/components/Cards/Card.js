import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight} from '@fortawesome/free-solid-svg-icons';

function Cards({e,index}) {
  return (
    <Card id={"card"+index}style={{ width: '1fr' }}>
      
      <Card.Body>
        <Card.Text>
          {e.text}
        </Card.Text>
        <Card.Img variant="top" src={e.src}  />
        <div>
        <div className='card-button'> {e.price} лв</div>
        <div className='more-info'>
          <span>Виж повече</span>
          <FontAwesomeIcon id='card-arrow' icon={faArrowRight} />

        </div>
        </div>
       
      </Card.Body>
    </Card>
  );
}

export default Cards;