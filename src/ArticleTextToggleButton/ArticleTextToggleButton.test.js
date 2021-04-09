import React from "react";
import ArticleTextToggleButton from "./ArticleTextToggleButton";

describe("ArticleList tests", () => {
    it("renders correctly", () => {
      const { container } = render(<ArticleTextToggleButton />);
      expect(container).toMatchSnapshot();
    });
});