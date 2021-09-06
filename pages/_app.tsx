import type { AppProps } from 'next/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { AppLayout } from '@components';
import '@stylesheets/global.scss';

library.add(fas);

const App = ({ Component, pageProps }: AppProps) => {
  return (
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
  );
};

export default App;
