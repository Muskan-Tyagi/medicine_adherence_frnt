import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import React from 'react';
import toJson from 'enzyme-to-json';
import { Pushnotificationforeground, PlaySound } from '../../../src/components/alarm/pushNotificationConfig';
import Sound from 'react-native-sound';

Enzyme.configure({ adapter: new Adapter() });

jest.mock('react-native-push-notification', () => ({
  default: jest.fn(),
}));
jest.mock('react-native-sound', () => ({
  Sound: jest.fn(),
}));

const mockSound = Sound;

describe('test collector category', () => {
  it('test category', () => {
    const wrapper = shallow(<PlaySound />).childAt(0).dive();
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
    expect(mockSound).toHaveBeenCalled;
  });
  it('test category', () => {
    let mssg = { notification: { title: "caretaker", body:"Hello Muskan" } }
    const wrapper = shallow(<Pushnotificationforeground {...mssg} />).childAt(0).dive();
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('test category', () => {
    let mssg = { notification: { title: "request", body:"Hello World" } }
    const wrapper = shallow(<Pushnotificationforeground {...mssg} />).childAt(0).dive();
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('test category', () => {
    let mssg = { notification: { title: "success", body:"Hello Nineleaps" } }
    const wrapper = shallow(<Pushnotificationforeground {...mssg} />).childAt(0).dive();
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
