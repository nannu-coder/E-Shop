import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";

function App() {
  return (
    <div className="bg-gray-50">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
