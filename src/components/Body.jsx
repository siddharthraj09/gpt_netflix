import Login from "./Login";
// import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
const Browse = lazy(() => {
  return import("./Browse");
});
const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: (
        <Suspense fallback={<h1> Loading .....</h1>}>
          <Browse />
        </Suspense>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
