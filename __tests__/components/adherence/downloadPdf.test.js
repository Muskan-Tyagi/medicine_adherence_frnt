import Enzyme, { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import React from "react";
import toJson from "enzyme-to-json";
import DownloadPdf from "../../../src/components/adherence/downloadPdf";

Enzyme.configure({ adapter: new Adapter() });

jest.mock("rn-fetch-blob", () => ({
  default: jest.fn(),
}));
describe("test collector category", () => {
  it("test category", () => {
    let globalmedId = 6;
    const wrapper = shallow(<DownloadPdf {...globalmedId} />);
    expect.assertions(1);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});