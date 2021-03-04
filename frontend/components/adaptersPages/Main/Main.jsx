import Layout from '../../shared/Layout';
import Title from './Title';
import SearchBar from './SearchBar';
import NavigationTiles from './NavigationTiles';

const Main = props => {
  return (
      <Layout>
          <Title />
          <SearchBar />
          <NavigationTiles />
      </Layout>
  );
}

export default Main;