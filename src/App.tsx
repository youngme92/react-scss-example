// import "./App.scss";
// import "./assets/scss/style.scss";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/Routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
