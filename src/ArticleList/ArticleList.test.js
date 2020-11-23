import React from "react";
import ArticleList from "./ArticleList";

describe("ArticleTest tests", () => {
    it("renders correctly", () => {
      const { container } = render(<ArticleList articles={[]} />);
      expect(container).toMatchSnapshot();
    });
  
  });
  