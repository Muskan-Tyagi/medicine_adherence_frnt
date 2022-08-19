import React from 'react';
import renderer from 'react-test-renderer';
import CameraScreen from '../../../src/screens/adherence/ClickSendImage';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<CameraScreen navigation={undefined} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('test open save button', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<CameraScreen picture={mockFn} />);
    wrapper.find('#picture').simulate('press');
  });
});
