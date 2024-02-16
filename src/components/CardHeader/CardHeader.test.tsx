import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CardHeader, CardHeaderProps } from "./CardHeader";

describe("CardHeader Component", () => {
  it("renders the CardHeader component with basic information", () => {
    const props: CardHeaderProps = {
      name: "Raphael Nadal",
      shortName: "JD",
      sex: "MAN",
      pictureUrl: "path/to/image.jpg",
      country: {
        code: "US",
        picture: {
          url: "path/to/country-flag.png",
        },
      },
    };

    const { getByText, getByAltText } = render(<CardHeader {...props} />);

    expect(getByText("Raphael Nadal (JD)")).toBeInTheDocument();
    expect(getByText("MAN")).toBeInTheDocument();
    expect(getByAltText("Raphael Nadal")).toBeInTheDocument();
    expect(getByAltText("US")).toBeInTheDocument();
    expect(getByText("US")).toBeInTheDocument();
  });

  it("renders the CardHeader component with correct styling classes", () => {
    const props: CardHeaderProps = {
      name: "Raphael Nadal",
      shortName: "JD",
      sex: "MAN",
      pictureUrl: "path/to/image.jpg",
      country: {
        code: "US",
        picture: {
          url: "path/to/country-flag.png",
        },
      },
    };

    const { container } = render(<CardHeader {...props} />);

    expect(container.querySelector(".rounded-full")).toBeInTheDocument();
    expect(container.querySelector(".h-20")).toBeInTheDocument();
    expect(container.querySelector(".w-20")).toBeInTheDocument();
  });
});
