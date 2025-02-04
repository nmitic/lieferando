import Layout from '../../shared/Layout';
import Title from '../../shared/Title';
import SearchBar from './SearchBar';
import NavigationTiles from './NavigationTiles';
import {useEffect} from 'react';

const Main = props => {
  return (
      <Layout>
          <Title text="Welcome to help center"/>
          <SearchBar />
          <NavigationTiles />
      </Layout>
  );
}

export default Main;