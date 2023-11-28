import { Fragment, ReactElement, Suspense, lazy } from "react";
import type { AppContext, AppInitialProps, AppProps } from "next/app";
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import Head from "next/head";
import { AxiosError } from "axios";

// react query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// redux
import { PersistGate } from "redux-persist/integration/react";
import { setSnackbarMessage } from "store/reducers/main";
import { dispatch, persister, store } from "store";
import { Provider } from "react-redux";

// project imports
import WarningSnackbar from "components/WarningSnackbar";

// theme
import ThemeCustomization from "themes";

// layouts
const CommonLayout = lazy(() => import("layout/main"));
const AuthLayout = lazy(() => import("layout/auth"));

// constants
import { AUTH_ROUTES } from "api/constants";

// styles
import "scss/style.scss";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 20 * 1000,
    },
    mutations: {
      onError: (error) => {
        if (error instanceof AxiosError && error.response?.data?.message) {
          dispatch(setSnackbarMessage(error?.response.data.message));
        }
      },
    },
  },
});

export type NextPageWithLayout<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement, restProps: any) => ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp(props: AppPropsWithLayout) {
  const { router } = props;

  const Layout = AUTH_ROUTES.includes(router.pathname)
    ? AuthLayout
    : CommonLayout;

  const getLayout = props.Component.getLayout ?? ((page) => page);

  return (
    <Fragment>
      <Head>
        <title>Aiva admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persister}>
          <ThemeCustomization>
            <QueryClientProvider client={queryClient}>
              <Suspense>
                <Layout>
                  {getLayout(
                    <props.Component
                      {...props.pageProps}
                      key={router.asPath}
                    />,
                    props.pageProps
                  )}
                </Layout>
                <WarningSnackbar />
              </Suspense>
            </QueryClientProvider>
          </ThemeCustomization>
        </PersistGate>
      </Provider>
    </Fragment>
  );
}

export default MyApp;
