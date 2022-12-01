import React from 'react';
import ReactDOM from 'react-dom/client';
import Index from './pages';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from './bin/images/hib_logo.jpg';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <main className="main g-0">
      <Row className="header g-0">
        <Col className="col"></Col>
        <Col className="col-lg-4  imageContainer">
          <Image
            className="img-fluid imageContainer rounded mx-auto d-block"
            src={logo}
            alt="Hibiscus Sports Massage Therepy Logo"
          />
        </Col>
        <Col className="col"></Col>
      </Row>

      <Row className="content g-0">
        <Index />
      </Row>

      <Row className="footer g-0" />
    </main>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
