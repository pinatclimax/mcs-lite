import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Container, { mapStateToProps, mapDispatchToProps } from '../';

const middlewares = [];
const mockStore = configureStore(middlewares);

it('should render Container correctly with HOC', () => {
  const initialState = {};
  const store = mockStore(initialState);
  const wrapper = shallow(
    <Provider store={store}>
      <Container />
    </Provider>,
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('should return props correctly with mapStateToProps', () => {
  const state = {
    devices: { deviceId: { deviceName: 'deviceName' } },
    ui: { isLoading: false },
  };
  const ownProps = {
    params: { deviceId: 'deviceId' },
  };

  expect(mapStateToProps(state, ownProps)).toMatchSnapshot();
});

it('should return props correctly with mapDispatchToProps', () => {
  expect(mapDispatchToProps).toMatchSnapshot();
});
