import React from 'react';
import renderer from 'react-test-renderer';
import HomeScreen from '../../src/screens/HomeScreen'
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import enableHooks from "jest-react-hooks-shallow";

// pass an instance of jest to `enableHooks()`
enableHooks(jest);


jest.mock("@react-native-async-storage/async-storage", () => ({
  default: jest.fn(),
}));


jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
// jest.mock('@fortawesome/react-native-fontawesome', () => ({
//   default: jest.fn(),
// }))

// jest.mock("react-native-sqlite-storage", () => ({
//   default: jest.fn(),
// }));

describe('Home Screen', () => {


  it('renders correctly', () => {
    const tree = renderer
      .create(< HomeScreen />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
