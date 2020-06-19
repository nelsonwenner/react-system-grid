import React from 'react';
import { render } from 'react-dom';
import { Container, Row, Column } from '../../src';

const Demo = () => {
  return (
    <Container>
      <h3 style={{ textAlign: "center", fontSize: 30 }}>Grid</h3>
      <Row>
        <Column xlarge={1} large={2} medium={3} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 1
        </Column>
        <Column xlarge={1} large={2} medium={3} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 2
        </Column>
        <Column xlarge={1} large={2} medium={3} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 3
        </Column>
        <Column xlarge={1} large={2} medium={3} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 4
        </Column>
        <Column xlarge={1} large={2} medium={3} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 5
        </Column>
        <Column xlarge={1} large={2} medium={3} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 6
        </Column>
        <Column xlarge={1} large={2} medium={3} small={12} style={{ border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 7
        </Column>
        <Column xlarge={1} large={2} medium={3} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 8
        </Column>
        <Column xlarge={1} large={2} medium={3} small={12} style={{ border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 9
        </Column>
        <Column xlarge={1} large={2} medium={3} small={12} style={{ border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 10
        </Column>
        <Column xlarge={1} large={2} medium={3} small={12} style={{ border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 11
        </Column>
        <Column xlarge={1} large={2} medium={3} small={12} style={{ border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 12
        </Column>
      </Row>
        
      <Row>
        <Column xlarge={2} medium={4} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 2
        </Column>
        <Column xlarge={2} medium={4} small={12}style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 2
        </Column>
        <Column xlarge={2} medium={4} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 2
        </Column>
        <Column xlarge={2} medium={4} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 2
        </Column>
        <Column xlarge={2} medium={4} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 2
        </Column>
        <Column xlarge={2} medium={4} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 2
        </Column>
      </Row>

      <Row>
        <Column xlarge={3} medium={6} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 3
        </Column>
        <Column xlarge={3} medium={6} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 3
        </Column>
        <Column xlarge={3} medium={6} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 3
        </Column>
        <Column xlarge={3} medium={6} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 3
        </Column>
      </Row>

      <Row>
        <Column xlarge={4} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 4
        </Column>
        <Column xlarge={4} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 4
        </Column>
        <Column xlarge={4} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 4
        </Column>
      </Row>

      <Row>
        <Column xlarge={5} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 5
        </Column>
        <Column xlarge={7} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 7
        </Column>
      </Row>

      <Row>
        <Column xlarge={6} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 6
        </Column>
        <Column xlarge={6} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 6
        </Column>
      </Row>

      <Row>
        <Column xlarge={7} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 7
        </Column>
        <Column xlarge={5} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 5
        </Column>
      </Row>

      <Row>
        <Column xlarge={8} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 8
        </Column>
        <Column xlarge={4} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 4
        </Column>
      </Row>

      <Row>
        <Column xlarge={9} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 9
        </Column>
        <Column xlarge={3} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 3
        </Column>
      </Row>

      <Row>
        <Column xlarge={10} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 10
        </Column>
        <Column xlarge={2} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 2
        </Column>
      </Row>

      <Row>
        <Column xlarge={11} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 11
        </Column>
        <Column xlarge={1} small={12} style={{	border: "1px solid red", background: "#1fdeb3", padding: 10, color: "#fff", marginBottom: 10}}>
          COL - 1
        </Column>
      </Row>
    </Container>
  )
}

render(<Demo />, document.querySelector('#demo'));