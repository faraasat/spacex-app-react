import { shallow } from "enzyme";
import Home from "./home.component";

describe("Home Component", () => {
  const shallowRender = shallow(<Home />);

  it("should match snapshot", () => {
    expect(shallowRender.debug()).toMatchSnapshot();
  });

  it("should have at least on div", () => {
    expect(shallowRender.find("div").length).toBeGreaterThanOrEqual(1);
  });

  it("should have a className", () => {
    expect(
      shallowRender.find(".background-container").length
    ).toBeGreaterThanOrEqual(1);
  });
});
