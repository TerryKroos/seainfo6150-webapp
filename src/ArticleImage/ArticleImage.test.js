import React from "react";
import ArticleImage from "./ArticleImage";

describe("FunctionalComponent tests", () => {
  it("renders correctly", () => {
    const { container } = render(<ArticleImage title="" url=""/>);
    expect(container).toMatchSnapshot();
  });
})