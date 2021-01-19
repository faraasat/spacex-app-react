import { shallow } from "enzyme";
import App from "./App";

describe("App Component", () => {
  const shallowRender = shallow(<App />);

  it("should match snapshot", () => {
    expect(shallowRender.debug()).toMatchSnapshot();
  });

  it("should have at least on dive", () => {
    expect(shallowRender.find("div").length).toBeGreaterThanOrEqual(1);
  });
});
