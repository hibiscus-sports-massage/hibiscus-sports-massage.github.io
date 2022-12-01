import Row from 'react-bootstrap/Row';
import './index.css';

export default function Index() {
  return (
    <div>
      <Row className="hero g-0 " fluid>
        <Row className="heroText g-0 d-flex align-content-end flex-wrap  text-center" fluid>
          <h1 className="g-0 heroBold ">You're in good company!</h1>
          <h3 className="g-0">Qualified and insured sports massage therapist based in Newcastle Upon Tyne.</h3>
        </Row>
        <Row className="heroCarousel g-0" fluid></Row>
      </Row>
      <Row className="testaments g-0" fluid />
      <Row className="reel g-0" fluid />
    </div>
  );
}
