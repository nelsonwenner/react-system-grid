import React from 'react';
import { render } from 'react-dom';
import { Container, Row, Column } from '../../src';

const Demo = () => {
  return (
    <Container>
      <Row>
        <Column xlarge={6} small={12} style={{ 	border: "1px solid red", background: "#1fdeb3" }}>
          COL - 6
        </Column>
        <Column xlarge={6} small={12} style={{ 	border: "1px solid red", background: "#1fdeb3"}}>
          COL - 6
        </Column>
      </Row>
    </Container>
  )
}

render(<Demo />, document.querySelector('#demo'));