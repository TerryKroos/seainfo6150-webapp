import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";

describe("ArticleTextToggleButton tests", () => {
    it("renders correctly after button is clicked", () => {
        const { container, getByText } = render(
          <ArticleTextToggleButton onClick={()=>{}} buttonText={"Show More"} />
        );
        const button = getByText("Show More");
        fireEvent.click(button);
        expect(container).toMatchSnapshot();
      });

  });