import { ApolloProvider } from "@apollo/client";
import { shallow } from "enzyme";
import { client } from "../..";
import MissionList from "./mission-list.component";

describe("Home Component", () => {
  const shallowRender = shallow(
    <ApolloProvider client={client}>
      <MissionList />
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
