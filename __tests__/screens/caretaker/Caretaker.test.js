import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CareTaker from '../../../src/screens/caretaker/Caretaker';
import {NavigationContainer} from '@react-navigation/native';
Enzyme.configure({adapter: new Adapter()});
jest.mock('@react-native-google-signin/google-signin', () => ({
  default: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <NavigationContainer>
          <CareTaker />
        </NavigationContainer>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<CareTaker eventFnc={mockFn} />);
    wrapper.find('#event').simulate('press');
  });
});
