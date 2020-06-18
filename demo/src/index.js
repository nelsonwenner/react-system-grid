import React from 'react';
import { render } from 'react-dom';
import { Container } from '../../src';

const Demo = () => {
  return (
    <Container>
      Hello World
    </Container>
  )
}

render(<Demo />, document.querySelector('#demo'));