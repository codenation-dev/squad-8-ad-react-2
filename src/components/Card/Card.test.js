import React from "react";
import renderer from "react-test-renderer";
import "jest-styled-components";

import {
  CardBox,
  CardTitle,
  CardDescription,
  Details,
  DetailsContainer
} from "./styles";

test("CardBox renders correctly", () => {
  const tree = renderer.create(<CardBox />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("CardTitle renders correctly", () => {
  const tree = renderer.create(<CardTitle />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("CardDescription renders correctly", () => {
  const tree = renderer.create(<CardDescription />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("Details renders correctly", () => {
  const tree = renderer.create(<Details />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("DetailsContainer renders correctly", () => {
  const tree = renderer.create(<DetailsContainer />).toJSON();
  expect(tree).toMatchSnapshot();
});
