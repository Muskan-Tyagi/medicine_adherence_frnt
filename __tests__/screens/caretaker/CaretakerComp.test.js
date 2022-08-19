import React from 'react';
import enableHooks from "jest-react-hooks-shallow";
import Caretakercomp from '../../../src/screens/caretaker/CaretakerComp';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});

enableHooks(jest);
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn(),
}));
jest.mock("react-native-elements", () => ({
  default: jest.fn(),
  Tab: {
    Item : () => ({}),
  },
  TabView: {
    Item: () => ({}),
  }
}));
jest.mock("react-native-paper", () => ({
  default: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    
    const wrapper  = shallow(<Caretakercomp/>);
    expect(wrapper).toMatchSnapshot();
  });
  

});
