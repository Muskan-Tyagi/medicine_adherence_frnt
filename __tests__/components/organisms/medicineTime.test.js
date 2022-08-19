import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
import toJson from "enzyme-to-json";
import Box from "../../../src/components/organisms/medicineTime";

Enzyme.configure({ adapter: new Adapter() });

describe("test collector category", () => {
  it("test category", () => {
    let time = [{},{}]
    const wrapper = shallow(<Box {...time} />).childAt(0).dive();
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("test category", () => {
    let time = [{},{}]
    const wrapper = shallow(<Box {...time} />).childAt(0).dive();
    wrapper.find("#box").props().onPress();
  });
});