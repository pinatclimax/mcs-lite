import React from 'react';
import PropTypes from 'prop-types';
import P from 'mcs-lite-ui/lib/P';
import IconPlay from 'mcs-lite-icon/lib/IconPlay';
import IconPause from 'mcs-lite-icon/lib/IconPause';
import IconLogout from 'mcs-lite-icon/lib/IconLogout';
import IconSync from 'mcs-lite-icon/lib/IconSync';
import {
  Container,
  Header,
  HeaderItemWrapper,
  HeaderItem,
  Body,
  Nav,
  NavItem,
  NavItemControl,
  Main,
  StyledLogo,
} from './styled-components';

const DashboardLayout = ({ signout, children, getMessages: t }) =>
  <Container>
    <Header>
      <a href="/">
        <StyledLogo />
      </a>
      <HeaderItemWrapper>
        <HeaderItem>
          <IconPlay size={18} />
          <P>{t('start')}</P>
        </HeaderItem>
        <HeaderItem>
          <IconPause size={18} />
          <P>啟動</P>
        </HeaderItem>
      </HeaderItemWrapper>
    </Header>
    <Body>
      <Nav>
        <div>
          <NavItem to="/ip">{t('ipConnection')}</NavItem>
          <NavItem to="/system">{t('systemManagement')}</NavItem>
        </div>
        <div>
          <NavItemControl>
            <IconSync size={18} />
            <P>{t('versionCheck')}</P>
          </NavItemControl>
          <NavItemControl onClick={() => signout(t('confirm'))}>
            <IconLogout size={18} />
            <P>{t('signoutService')}</P>
          </NavItemControl>
        </div>
      </Nav>
      <Main>
        {children}
      </Main>
    </Body>
  </Container>;

DashboardLayout.displayName = 'DashboardLayout';
DashboardLayout.propTypes = {
  children: PropTypes.any.isRequired,

  // Redux Action
  signout: PropTypes.func.isRequired,

  // React-intl I18n
  getMessages: PropTypes.func.isRequired,
};

export default DashboardLayout;
