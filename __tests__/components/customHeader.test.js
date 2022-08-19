import React from "react";
import enableHooks from "jest-react-hooks-shallow";
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CustomHeader from "../../src/components/customHeader";
import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });
enableHooks(jest);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
})); jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
  GoogleSignin: {
    Configure: () => ({}),
  }
}));
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn(),
  useEffect: jest.fn(),
}));
describe('customheader', () => {
  it("render component", () => {
    const wrapper = shallow(<CustomHeader />);
    expect(toJson(wrapper)).toMatchSnapshot();
  })
  it("test Touchable Opacity", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<CustomHeader touchFnc={mockFn} />);
    wrapper.find("#touch").props().onPress();
    expect(mockFn).toHaveBeenCalled;
  })
  it("test Button", () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<CustomHeader alertFnc={mockFn} />);
    wrapper.find("#alert").props().onPress();
    expect(mockFn).toHaveBeenCalled;
  })
});