import { iDataBlog, iDataFeedback } from '../hooks/useFetch';
import img1 from '../assets/img/img1.png';
import img2 from '../assets/img/img2.png';
import img3 from '../assets/img/img3.png';

export const BLOG_DATA_URL: string = './DATA/blog_posts.json';
export const FEEDBACK_DATA_URL: string = './DATA/feedback_data.json';

export const defultSlide: iDataFeedback = {
  name: 'А тут чье-то имя ',
  instagram_username: 'Да и тут обязательно что-то появится ',
  text: 'Тут скоро появится мноооого букв, но это не точно 😎',
};
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1056px',
  laptopL: '1440px',
  desktop: '2560px',
};
export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};
export const defaultPosts: iDataBlog[] = [
  {
    title: 'Instagram FAQ — All You Need To Know',
    date: '24-02-2022',
    url: 'https://blog.combin.com/instagram-faq-all-you-need-to-know-bb2559ac606b',
    img: img1,
  },
  {
    title: 'DMEXCO 2019 — Meet Combin in Cologne',
    date: '23-02-2022',
    url: 'https://blog.combin.com/dmexco-2019-meet-combin-in-cologne-b845529a1e63',
    img: img2,
  },
  {
    title:
      'Limits Display, New User Preview, New Filters, and Many More Features — All about Combin 2.1',
    date: '22-02-2022',
    url: 'https://blog.combin.com/limits-display-new-user-preview-new-filters-and-many-more-features-all-about-combin-2-1-d78713383da7',
    img: img3,
  },
];
