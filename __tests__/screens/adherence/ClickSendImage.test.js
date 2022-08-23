import React from 'react';
import CameraScreen from '../../../src/screens/adherence/ClickSendImage';
import Enzyme, { shallow } from 'enzyme';
import toJson from "enzyme-to-json";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});

describe('Click send image', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CameraScreen />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<CameraScreen picture={mockFn} />);
    wrapper.find('#picture').props().onPress(mockFn);
  });
});
