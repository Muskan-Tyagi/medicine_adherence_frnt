import React from "react";
import enableHooks from "jest-react-hooks-shallow";
import Enzyme, { shallow,render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import checkConnectivity from '../../src/connection/checkConnectivity'
import toJson from "enzyme-to-json";
enableHooks(jest);

jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn(),
  useEffect: jest.fn(),
}));
jest.mock('@react-native-google-signin/google-signin/lib/commonjs', () => ({
  default: jest.fn(),
}));
jest.mock('@react-native-community/netinfo', () => ({
    default: jest.fn(),
  }));
describe('check connectivity', () => {
  it("test", () => {
    const wrapper = shallow(<checkConnectivity />);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
});
