import React from 'react';
import ReminderMed from '../../../src/screens/adherence/ReminderMed';
import toJson from "enzyme-to-json";
import Enzyme, { shallow, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { TouchableOpacity } from 'react-native';
Enzyme.configure({ adapter: new Adapter() });
jest.mock("@react-native-google-signin/google-signin", () => ({
    default: jest.fn(),
}));
describe('Reminder Med test', () => {
    it('renders correctly', () => {
        let item = { status: 1 };
        const wrapper = shallow(<ReminderMed {...item} />);
        expect(toJson(wrapper)).toMatchSnapshot();
    });
    it('renders correctly', () => {
        let item = { status: 1 };
        const wrapper = shallow(<ReminderMed />);
    });
}); 