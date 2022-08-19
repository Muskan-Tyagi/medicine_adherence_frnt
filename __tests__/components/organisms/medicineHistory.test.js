import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
import toJson from "enzyme-to-json";
import MedicinehistoryList from "../../../src/components/organisms/medicineHistoryList";

Enzyme.configure({ adapter: new Adapter() });

describe("test collector category", () => {
  it("test category", () => {
    const wrapper = shallow(<MedicinehistoryList />).childAt(0).dive();
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it("test category", () => {
    let props = { item: { key: { not_taken: [{},{},{}] } }, showimgfun: "", medName: "" }
    const wrapper = shallow(<MedicinehistoryList {...props} />).childAt(0).dive();
    wrapper.find("#touchable1").props().onPress();
  });
  it("test category", () => {
    let props = { item: { key: { taken: [{},{},{}] } }, showimgfun: "", medName: "" }
    const wrapper = shallow(<MedicinehistoryList {...props} />).childAt(0).dive();
    wrapper.find("#touchable1").props().onPress();
  });
});