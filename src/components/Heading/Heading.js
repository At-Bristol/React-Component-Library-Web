import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 5.0em;
  font-family: ${props => props.strong ? props.theme.font.family.heavy : props.theme.font.family.regular};
  font-weight: ${props => props.strong ? props.theme.font.weight.heavy : props.theme.font.weight.regular};
  margin: 0;
  text-transform: ${props => props.uppercase ? 'uppercase' : null};
  text-overflow: ${props => props.truncate ? 'ellipsis' : null};
`

const H2 = styled.h2`
  font-size: 4.0em;
  font-family: ${props => props.strong ? props.theme.font.family.heavy : props.theme.font.family.regular};
  font-weight: ${props => props.strong ? props.theme.font.weight.heavy : props.theme.font.weight.regular};
  margin:0;
  text-transform: ${props => props.uppercase ? 'uppercase' : null};
  text-overflow: ${props => props.truncate ? 'ellipsis' : null};
`

const H3 = styled.h3`
  font-size: 3.0em;
  font-family: ${props => props.strong ? props.theme.font.family.bold : props.theme.font.family.light};
  font-weight: ${props => props.strong ? props.theme.font.weight.bold : props.theme.font.weight.light};
  margin:0;
  text-transform: ${props => props.uppercase ? 'uppercase' : null};
  text-overflow: ${props => props.truncate ? 'ellipsis' : null};
`

const H4 = styled.h4`
  font-size: 2.0em;
  font-family: ${props => props.strong ? props.theme.font.family.bold : props.theme.font.family.light};
  font-weight: ${props => props.strong ? props.theme.font.weight.bold : props.theme.font.weight.light};
  margin:0;
  padding:0;
  text-overflow: ${props => props.truncate ? 'ellipsis' : null};
`

const H5 = styled.h5`
  font-size: 1.5em;
  font-family: ${props => props.strong ? props.theme.font.family.regular : props.theme.font.family.light};
  font-weight: ${props => props.strong ? props.theme.font.weight.regular : props.theme.font.weight.light};
  margin:0;
  text-transform: ${props => props.uppercase ? 'uppercase' : null};
  text-overflow: ${props => props.truncate ? 'ellipsis' : null};
`

const H6 = styled.h6`
  font-size: 1.0em;
  font-family: ${props => props.strong ? props.theme.font.family.regular : props.theme.font.family.light};
  font-weight: ${props => props.strong ? props.theme.font.weight.regular : props.theme.font.weight.light};
  margin:0;
  text-transform: ${props => props.uppercase ? 'uppercase' : null};
  text-overflow: ${props => props.truncate ? 'ellipsis' : null};
`

const getTag = (tag) => {
  if (tag === 'h1') return H1
  if (tag === 'h2') return H2
  if (tag === 'h3') return H3
  if (tag === 'h4') return H4
  if (tag === 'h5') return H5
  if (tag === 'h6') return H6
  return tag
}


const StyledHeading = (props) => {
  /* eslint-disable no-unused-vars */
  const {
    align,
    children,
    margin,
    size,
    strong = true,
    tag,
    truncate,
    uppercase,
  } = props
  /* eslint-enable */

  const Tag = getTag(tag)

  return (
    <Tag strong={strong} {...props}>
      {children}
    </Tag>
  );
}

StyledHeading.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end']),
  margin: PropTypes.oneOf(['none', 'small', 'medium', 'large']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  strong: PropTypes.bool,
  tag: PropTypes.string,
  truncate: PropTypes.bool,
  uppercase: PropTypes.bool,
  children: PropTypes.element,
};

StyledHeading.contextTypes = {
  router: PropTypes.object,
};

export default StyledHeading;