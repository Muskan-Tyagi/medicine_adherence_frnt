import React from 'react';
import Enzyme, { shallow } from "enzyme";
import { render, cleanup, fireEvent } from '@testing-library/react-native';
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import renderer from 'react-test-renderer';
import Addmedicine from '../../src/screens/AddMedicine';
Enzyme.configure({adapter: new Adapter()});
jest.mock("@react-navigation/native", () => ({
  ...jest.requireActual("@react-navigation/native"),
  useFocusEffect: jest.fn(),
}));
Enzyme.configure({ adapter: new Adapter() });
describe('Click send image', () => {
  afterEach(cleanup);
  it('renders correctly', () => {
    const tree = renderer
      .create(<Addmedicine navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


});