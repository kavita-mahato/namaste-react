import { render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

// test or it => both are same
it("Should load Header component with a signin button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const signinButton = screen.getByRole("button", { name: "Sign In" });
  expect(signinButton).toBeInTheDocument();
});

it("Should load Header component with card of 0 item ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cardItems = screen.getByText("Cart(0)");
  expect(cardItems).toBeInTheDocument();
});