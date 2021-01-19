import { ApolloProvider } from "@apollo/client";
import { shallow } from "enzyme";
import { client } from "../..";
import MissionDetails from "./mission-details.component";

describe("Home Component", () => {
  const shallowRender = shallow(
    <ApolloProvider client={client}>
      <MissionDetails id="9" />
    </ApolloProvider>
  );

  it("should match snapshot", () => {
    expect(shallowRender.debug()).toMatchSnapshot();
  });

  it("should have at least on div", () => {
    expect(shallowRender.find("div").length).toBeGreaterThanOrEqual(1);
  });

  it("should have a className mission-details__loading", () => {
    expect(
      shallowRender.find(".mission-details__loading").length
    ).toBeGreaterThanOrEqual(1);
  });
});
