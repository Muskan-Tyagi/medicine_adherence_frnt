import React from 'react';
import {create} from 'react-test-renderer';
import SendImageToCaretaker from '../../../src/screens/adherence/SendImageToCaretaker';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({adapter: new Adapter()});
jest.mock("react-native-share", () => ({
  default: jest.fn(),
}));
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
 // useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useFocusEffect: jest.fn(),
  useNavigation: () => ({ goBack: jest.fn() }),
  useRoute: () => ({
    params: {
     image_uri: {}
    }
  }),
}));
describe('Send Image Screen', () => {
  it('renders correctly', () => {
    const tree = create(<SendImageToCaretaker navigation={undefined}/>);
    expect(tree).toMatchSnapshot();
  });
 
});