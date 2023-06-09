import { RouterProvider } from "react-router-dom";
import router from "./Router/Routes/Router";

function App() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
