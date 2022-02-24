import React from 'react';
import { BLOG_DATA_URL, defaultPosts } from '../../constant/constant';
import { iDataBlog, useFetch } from '../../hooks/useFetch';
import Button from '../Button/Button';
import Post from './Post/Post';
import Error from '../Error/Error';
import Title from '../Title/Title';
import { ContentBlog, Wrapper } from './styles';
import Loading from '../Loading/Loading';

const Blog: React.FC = () => {
  const [posts, setPosts] = React.useState<iDataBlog[]>([]);
  const [error, setError] = React.useState<boolean>(false);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [toggleShowAllPost, setToggleShowAllPost] = React.useState<boolean>(false);

  const getAllPosts = async () => {
    if (!posts.length) {
      setIsLoading(true);
      try {
        const data = await fetch(BLOG_DATA_URL);
        const resp = await data.json();
        setIsLoading(false);
        setPosts(resp);
        setToggleShowAllPost(!toggleShowAllPost);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    } else {
      setToggleShowAllPost(!toggleShowAllPost);
    }
  };

  const sortByDate = (a: iDataBlog, b: iDataBlog): number =>
    Date.parse(b.date) - Date.parse(a.date);
  return (
    <ContentBlog>
      <Title>What's New?</Title>
      <Wrapper>
        {defaultPosts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
        {error && <Error />}
        {isLoading && <Loading />}
        {toggleShowAllPost &&
          posts
            .sort((a: iDataBlog, b: iDataBlog) => sortByDate(a, b))
            .map((post, index) => <Post key={index} post={post} />)}
        <Button fn={getAllPosts} toggle={toggleShowAllPost}>
          Read More
        </Button>
      </Wrapper>
    </ContentBlog>
  );
};

export default Blog;
