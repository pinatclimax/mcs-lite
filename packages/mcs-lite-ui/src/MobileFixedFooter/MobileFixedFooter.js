import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MobileContentWrapper from '../MobileContentWrapper';

export const Footer = styled.footer`
  position: fixed;
  width: 100%;
  bottom: 0;
  background-color: ${props => props.theme.color.grayLight};
`;

const MobileFixedFooter = ({ children, ...otherProps }) =>
  <Footer {...otherProps}>
    <MobileContentWrapper>
      {children}
    </MobileContentWrapper>
  </Footer>;

MobileFixedFooter.displayName = 'MobileFixedFooter';
MobileFixedFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MobileFixedFooter;
