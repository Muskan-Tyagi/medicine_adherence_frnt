import React from 'react';
import renderer from 'react-test-renderer';
import Addcaretaker from '../../../src/screens/caretaker/AddCaretaker'

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock("@react-native-async-storage/async-storage", () => ({
    default: jest.fn(),
  }));

describe('Caretaker Request', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Addcaretaker navigation={undefined} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});