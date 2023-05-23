import { RouterProvider } from "react-router-dom";
import router from "./routes";
import GlobalStyle from "./assets/styles/global";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
