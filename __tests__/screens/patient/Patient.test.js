import React from 'react';
import renderer from 'react-test-renderer';
import enableHooks from "jest-react-hooks-shallow";
import Patientcomp from '../../../src/screens/patient/Patient';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
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

describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Patientcomp navigation={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Patientcomp handleChange={mockFn} />);
    wrapper.find('#change').simulate('change');
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Patientcomp setIndex={mockFn} />);
    wrapper.find('#index').simulate('change');
  });

});
