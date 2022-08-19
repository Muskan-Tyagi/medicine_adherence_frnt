import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme,{shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Patientrequest from '../../../src/screens/patient/PatientRequest';
Enzyme.configure({adapter: new Adapter()});
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
}));
describe('Click send image', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Patientrequest />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
});
