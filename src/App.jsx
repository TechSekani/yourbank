import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./pages/Home";
const Careers = lazy(() => import("./pages/Careers"))
// const About = lazy(() => import("./pages/About"))
// const Security = lazy(() => import("./pages/Security"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "Careers",
        element: <Suspense fallback={<div>Loading...</div>}>
          <Careers />
        </Suspense>,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
