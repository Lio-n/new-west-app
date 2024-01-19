import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router/index.router";

function App() {
  return (
    <div id="app">
      <BrowserRouter children={<AppRoutes />} />
    </div>
  );
}

export default App;
