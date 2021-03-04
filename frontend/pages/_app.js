import {useEffect} from 'react';
import {useRouter} from 'next/router'
import trackingService from '../services/trackingService';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    // Removing server side injected styles on the client, needed for server side styles to work properly
    // @see: https://material-ui.com/guides/server-rendering/
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  // Page View Tracking even will be fired on route change and on initial page load
  useEffect(() => {
    trackingService.pageView({url: router.pathname})
  }, [router.pathname]);

  return <Component {...pageProps} />
}

export default MyApp;
