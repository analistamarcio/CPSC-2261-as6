import React, { useEffect, useState } from 'react';
import Posts from '../components/Posts';
import axios from 'axios';

function Home() {
  const [appState, setAppState] = useState({
    loading: false,
    posts: null,
  });

  useEffect( () => {
    const apiUrl = `https://jsonplaceholder.typicode.com/posts`;
    axios.get(apiUrl).then((posts) => {
      console.log(posts.data);
      const hardCodedPosts = posts.data.slice(0,5);
      setAppState({ loading: true });
      setAppState({ loading: false, posts: hardCodedPosts });
    });
  }, [setAppState]);

  return (
      <Posts isLoading={appState.loading} posts={appState.posts}/>
  );

}
export default Home;
