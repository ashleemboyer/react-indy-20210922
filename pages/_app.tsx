import type { AppProps } from "next/app";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { AppLayout } from "@components";
import { ThemeProvider } from "@contexts";
import "@stylesheets/global.scss";

library.add(fas);

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ThemeProvider>
  );
};

export default App;
