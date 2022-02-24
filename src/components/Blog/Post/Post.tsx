import { PostItem, PostImg, PostContent } from './styles';
import { iProps } from './types';
import img3 from '../../../assets/img/img3.png';
const Post: React.FC<iProps> = ({ post }) => {
  const { title, url, img = img3 } = post;
  return (
    <PostItem href={url} target="_blank">
      <PostImg src={img} alt="img" />
      <PostContent>{title}</PostContent>
    </PostItem>
  );
};

export default Post;
