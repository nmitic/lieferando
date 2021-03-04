import {useEffect} from 'react';
import { useRouter } from 'next/router'
import trackingService from '../services/trackingService';

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter()

  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    trackingService.pageView({url: router.pathname})
  }, [router.pathname]);

  return <Component {...pageProps} />
}

export default MyApp;
