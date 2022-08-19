import React from 'react';
import renderer from 'react-test-renderer';
import Medicineadherence from '../../../src/screens/adherence/MedicineAdherence';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Medicineadherence navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<Medicineadherence pressFnc={mockFn} />);
    wrapper.find('#press').simulate('press');
  });
});
