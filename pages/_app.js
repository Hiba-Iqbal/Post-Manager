import { BookmarksProvider } from './../Context/BookmarksContext';

function MyApp({ Component, pageProps }) {
  return (
    <BookmarksProvider>
      <Component {...pageProps} />
    </BookmarksProvider>
  );
}

export default MyApp;
