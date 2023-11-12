import Home from "./components/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import appStore from "./redux/appStore";
import Categories from "./components/Categories";

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/categories/:categoryID",
    element: <Categories />,
  },
]);

const App = () => {
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRoute}>
        <Home />
      </RouterProvider>
    </Provider>
  );
};

export default App;
