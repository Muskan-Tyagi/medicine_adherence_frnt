// import { render } from '@testing-library/react-native';
// import React from 'react';
// import renderer from 'react-test-renderer';
// import SavedDetails from '../../../src/screens/profile/SavedDetails';
// jest.mock("@react-navigation/native", () => ({
//   ...jest.requireActual("@react-navigation/native"),
//   useFocusEffect: jest.fn(),
// }));
// jest.mock("@react-native-async-storage/async-storage", () => ({
//   getItem: jest.fn(),
// }));
// describe('Click send image', () => {
//   it('renders correctly', () => {
//     const tree = render(<SavedDetails/>)
//       .toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });

import React from 'react';
import renderer from 'react-test-renderer';
import SavedDetails from '../../../src/screens/profile/SavedDetails';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';


import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({adapter: new Adapter()});

jest.mock("@react-native-async-storage/async-storage", () => ({
  default: jest.fn().mockImplementation(() => {}),
  // getItem : jest.fn()
}));



// jest.mock('@react-native-async-storage/async-storage', () => ({
//   AsyncStorage: {
//       // setItem: jest.fn(() => {
//       //     return new Promise((resolve, reject) => {
//       //         resolve(null);
//       //     });
//       // }),
//       // multiSet:  jest.fn(() => {
//       //     return new Promise((resolve, reject) => {
//       //         resolve(null);
//       //     });
//       // }),
//       getItem: jest.fn(() => {
//           return new Promise((resolve, reject) => {
//               resolve({});
//           });
//       }),
//       // multiGet: jest.fn(() => {
//       //     return new Promise((resolve, reject) => {
//       //         resolve(multiGetTestData());
//       //     });
//       // }),
//       // removeItem: jest.fn(() => {
//       //     return new Promise((resolve, reject) => {
//       //         resolve(null);
//       //     });
//       // }),
//       // getAllKeys: jest.fn(() => {
//       //     return new Promise((resolve) => {
//       //         resolve(['one', 'two', 'three']);
//       //     });
//       // })
//     }
//   }));

jest.mock("@react-native-google-signin/google-signin", () => ({
  default: jest.fn(),
}));

jest.mock("@react-navigation/native", () => ({
    useFocusEffect: jest.fn().mockImplementation((func) => func()),
  }));


describe('Saved Details', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(< SavedDetails  />)

      .toJSON();
    expect(tree).toMatchSnapshot();
    return new Promise(resolve => setImmediate(resolve)).then(() => {});
  });
  it.only('renders correctly', () => {
    const wrapper = shallow(<SavedDetails />)
    expect(wrapper).toBeTruthy();
    return new Promise(resolve => setImmediate(resolve)).then(() => {});
  });
  
});
