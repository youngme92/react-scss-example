import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

import HomePage from "./HomePage";
import StyleGuidePage from "./StyleGuidePage";
import ShopListPage from "./ShopListPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import PaymentCompletePage from "./PaymentCompletePage";
import PaymentPage from "@/pages/PaymentPage";

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
function NoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/home"
        element={
          <DefaultLayout>
            <HomePage />
          </DefaultLayout>
        }
      />
      <Route
        path="/shoplist"
        element={
          <DefaultLayout>
            <ShopListPage />
          </DefaultLayout>
        }
      />
      <Route
        path="/styleguide"
        element={
          <NoLayout>
            <StyleGuidePage />
          </NoLayout>
        }
      />
      <Route
        path="/payment"
        element={
          <NoLayout>
            <PaymentPage />
          </NoLayout>
        }
      />
      <Route
        path="/paymentComplete"
        element={
          <NoLayout>
            <PaymentCompletePage />
          </NoLayout>
        }
      />
    </Route>
  )
);
