import * as React from 'react';
import * as DatePicker from 'react-16-bootstrap-date-picker';
import { Button, Col, Row } from 'react-bootstrap/lib';
import W from './GlobalText';
import './RunControl.css';


function RunControl(props: any) {
  return (
    <Row>
      <Col xs={8} md={5}>{W.From}:<DatePicker /></Col>
      <Col xs={8} md={5}>{W.To}:<DatePicker /></Col>
      <Col md={2}>
        <Button bsStyle="primary" bsSize="large" onClick={props.onClick}>{W.Run}</Button>
      </Col>
    </Row>
  )
}

export default RunControl