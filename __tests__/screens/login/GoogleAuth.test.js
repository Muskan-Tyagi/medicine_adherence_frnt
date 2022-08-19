import React from 'react';
import renderer from 'react-test-renderer';
import Login from '../../../src/screens/login/GoogleOauth';
import Enzyme from 'enzyme';
import {shallow,render} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';
Enzyme.configure({adapter: new Adapter()});
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
jest.mock("@react-native-firebase/messaging", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-svg", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-progress", () => ({
  default: jest.fn(),
}));
jest.mock("react-native-toast-message", () => ({
  default: jest.fn(),
}));
jest.mock("@react-native-community/netinfo", () => ({
  default: jest.fn(),
}));
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
  GoogleSigninButton: {
    Size : {
      Wide : () => ({}),
    },
    Color : {
      Dark : () => ({}),
    }
  }
}));

describe('Click send image', () => {
  it('renders correctly', () => {

    const wrapper  = shallow(<Login/>).childAt(1).dive();
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Login onGoogleButtonPress={mockFn} />);
    wrapper.find('#signin').simulate('press');
  });
});
