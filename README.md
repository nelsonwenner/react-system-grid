<h1 align="center">
  REACT SYSTEM GRID
</h1>

## :information_source: Getting Started

Npm
```bash
$ npm install react-system-grid
```

Yarn
```bash
$ yarn add react-system-grid
```

## :man_technologist: Basic Usage

```javascript
import React from 'react';
import { Container, Row, Column } from 'react-system-grid';

const App = () => {
  return (
    <Container>
      <Row>
        <Column>
        </Column>
      </Row>
    </Container>
  );
}
```

## :mag_right: Props

Container
```javascript
<Container>
</Container>
```

FullContainer
```javascript
<FullContainer>
</FullContainer>
```

Row
```javascript
<Row>
</Row>
```

Column
```javascript
<Column xlarge={1} large={2} medium={3} small={12}>
</Column>
```

## :hammer_and_wrench: Built with

- React & Styled-components

## :memo: License
This project is under the MIT license. See the [LICENSE](LICENSE.md) for more information.

---