import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout";
import Profile from "./routes/profile";
import Home from "./routes/home";
import Login from "./routes/login";
import CreateAccount from "./routes/create-account";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const router = createBrowserRouter([
{
  path:"/",
  element:<Layout />,
  children :[
    {
      path:"",
      element:<Home />,
    },
    {
      path:"profile",
      element:<Profile />,
    }
  ]
},
  {
    path:"/login",
    element:<Login />
  },
  {
    path:"/create-account", element:<CreateAccount />
  }
]);

const GlobalStyle = createGlobalStyle`
${reset};
*{
  box-sizing:border-box;
}
body {
  background-color:black;
  color:white;
  font-family: system-ui, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', 
  Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', 
  sans-serif;

}
`;


function App() {
  return <>
  <GlobalStyle />
  <RouterProvider router={router} />
  </>;
  
}

export default App;
