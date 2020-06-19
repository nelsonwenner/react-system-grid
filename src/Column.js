import { keysTypes, cols, breakpoints } from './utils';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Column = styled.div`
  flex: 1 0 0%;
  min-width: 0;

  ${(types, css=``) => {
      
      if (types[keysTypes.small]) css += buildCss(types, cols, keysTypes.small, null, false);
      if (types[keysTypes.medium]) css += buildCss(types, cols, keysTypes.medium, breakpoints.medium, true);
      if (types[keysTypes.large]) css += buildCss(types, cols, keysTypes.large, breakpoints.large, true);
      if (types[keysTypes.xlarge]) css += buildCss(types, cols, keysTypes.xlarge, breakpoints.xlarge, true);

      return css;
    }
  }
  
  box-sizing: border-box;
`;

const buildCss = (types, cols, keysTypes, breakpoints, flag, template=``) => {
  
  Object.keys(cols).forEach((value) => (    
    
    (value === `${types[keysTypes]}`) && (
      
      !flag ? (

        template += `flex: 0 0 auto; width: ${cols[`${value}`]}`

      ) : (

        template += `@media only screen and (min-width:${breakpoints}px) { flex: 0 0 auto; width: ${cols[`${value}`]} }`
      )
    )
  ))

  return template;
}

Column.PropTypes = {
  xlarge: PropTypes.number,
  large: PropTypes.number,
  medium: PropTypes.number,
  small: PropTypes.number,
}

export default Column;