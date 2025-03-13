// import { RouterProvider } from "react-router";
import { Header } from "./Components/Header/Header.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";
import { Store } from "./store/Store.jsx";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FetchApiData } from "./Helpers/FetchApiData.jsx";
import { Auth0Provider } from '@auth0/auth0-react';

const queryClient = new QueryClient();

function App() {
  return (
    <Auth0Provider
      domain="dev-d8ekxqjfvbkvmv5f.us.auth0.com"
      clientId="2DL5rhSv1RE9SurNWrNX4K257luBi0AX"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Provider store={Store}>
          <FetchApiData />
          <Header />
          <Outlet />
          <Footer />
        </Provider>
      </QueryClientProvider>
    </Auth0Provider>
  );
}

export default App;
