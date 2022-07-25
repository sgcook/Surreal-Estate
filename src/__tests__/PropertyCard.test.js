import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("PropertyCard", () => {
  const validProps = {
    bathrooms: 3,
    bedrooms: 2,
    city: "Leeds",
    email: "joe@gmail.com",
    price: "20000.00",
    title: "beautiful home",
    type: "bungalow",
  };

  test("renders PropertyCard", () => {
    const { asFragment } = render(
      <PropertyCard
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        city={validProps.city}
        email={validProps.email}
        price={validProps.price}
        title={validProps.title}
        type={validProps.type}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("renders bathroom prop correctly", () => {
    const { getByText } = render(
      <PropertyCard
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        city={validProps.city}
        email={validProps.email}
        price={validProps.price}
        title={validProps.title}
        type={validProps.type}
      />
    );

    expect(getByText("3")).toHaveClass("bathrooms");
  });

  test("renders bedroom prop correctly", () => {
    const { getByText } = render(
      <PropertyCard
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        city={validProps.city}
        email={validProps.email}
        price={validProps.price}
        title={validProps.title}
        type={validProps.type}
      />
    );

    expect(getByText("2")).toHaveClass("bedrooms");
  });

  test("renders email prop correctly", () => {
    const { getByText } = render(
      <PropertyCard
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        city={validProps.city}
        email={validProps.email}
        price={validProps.price}
        title={validProps.title}
        type={validProps.type}
      />
    );

    expect(getByText("Email")).toHaveAttribute("href", "mailto:joe@gmail.com");
  });

  test("renders price prop correctly", () => {
    const { getByText } = render(
      <PropertyCard
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        city={validProps.city}
        email={validProps.email}
        price={validProps.price}
        title={validProps.title}
        type={validProps.type}
      />
    );

    expect(getByText("£20000")).toHaveClass("price");
  });

  test("renders city and type props correctly", () => {
    const { getByText } = render(
      <PropertyCard
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        city={validProps.city}
        email={validProps.email}
        price={validProps.price}
        title={validProps.title}
        type={validProps.type}
      />
    );

    expect(getByText("bungalow - Leeds")).toBeInstanceOf(HTMLLIElement);
  });

  test("renders title prop correctly", () => {
    const { getByText } = render(
      <PropertyCard
        bathrooms={validProps.bathrooms}
        bedrooms={validProps.bedrooms}
        city={validProps.city}
        email={validProps.email}
        price={validProps.price}
        title={validProps.title}
        type={validProps.type}
      />
    );

    expect(getByText("beautiful home")).toBeInstanceOf(HTMLHeadingElement);
  });
});
