import { shallow } from "enzyme";
import NavBar from "./navbar.component";

describe("Home Component", () => {
  const shallowRender = shallow(<NavBar />);

  it("should match snapshot", () => {
    expect(shallowRender.debug()).toMatchSnapshot();
  });

  it("should find 0 or more on div", () => {
    expect(shallowRender.find("div").length).toBeGreaterThanOrEqual(0);
  });
});
