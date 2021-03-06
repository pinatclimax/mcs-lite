import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Transition from 'react-motion-ui-pack';
import IconClose from 'mcs-lite-icon/lib/IconClose';
import MobileContentWrapper from 'mcs-lite-ui/lib/MobileContentWrapper';
import { updatePathname } from 'mcs-lite-ui/lib/utils/routerHelper';
import StyledLink from '../StyledLink';

const Container = styled(MobileContentWrapper)`
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.color.white};
`;

const Header = styled.header`
  display: flex;
  align-items: center;

  > * {
    font-size: 24px;
    padding: 16px;
    color: ${props => props.theme.color.primary};
  }
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const LayoutDialog = ({ children, ...otherProps }) =>
  <Transition
    component={false}
    enter={{ opacity: 1, translateY: 0 }}
    leave={{ opacity: 0, translateY: -40 }}
  >
    <Container key="layoutDialog" {...otherProps}>
      <Header>
        <StyledLink to={updatePathname('/devices')}><IconClose /></StyledLink>
      </Header>
      <Main>{children}</Main>
    </Container>
  </Transition>;

LayoutDialog.displayName = 'LayoutDialog';
LayoutDialog.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutDialog;
