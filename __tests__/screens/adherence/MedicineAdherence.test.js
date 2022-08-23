import React from 'react';
import Medicineadherence from '../../../src/screens/adherence/MedicineAdherence';
import toJson from "enzyme-to-json";
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { FlatList } from 'react-native';
Enzyme.configure({ adapter: new Adapter() });
jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));
describe('Medicine Adherence test', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Medicineadherence />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('test TouchableOpacity', () => {
    const wrapper = shallow(<Medicineadherence />);
    wrapper.find('#press').props().onPress("");
  });
  it('test FlatList', () => {
    let item = { status: 1 }
    const wrapper = shallow(<Medicineadherence />);
    wrapper.find(FlatList).props().renderItem(item);
  });
});
