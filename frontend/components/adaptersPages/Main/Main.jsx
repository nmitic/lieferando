import Layout from '../../Layout';
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