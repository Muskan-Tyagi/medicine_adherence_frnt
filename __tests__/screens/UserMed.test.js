import React from 'react';
import renderer from 'react-test-renderer';
import UserMed from '../../src/screens/UserMed';
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ goBack: jest.fn() }),
  useRoute: () => ({
    params: {
     Name:"muskan",
     Description:"xyz",
    }
  }),
}));

jest.mock("@react-native-async-storage/async-storage", () => ({
    default: jest.fn(),
  }));
jest.mock("react-native-gesture-handler", () => ({
    default: jest.fn(),
  }));
  
  jest.mock("@react-native-async-storage/async-storage", () => ({
    default: jest.fn(),
  }));

describe('User  Screen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(< UserMed navigation={undefined}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});