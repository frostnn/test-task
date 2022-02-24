import styled, { ThemeProvider } from 'styled-components';
import { baseTheme } from '../themes/themes';
import Sliders from '../components/Slider/Slider';
import Blog from '../components/Blog/Blog';

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  height: 100vh;
  padding: 12px;
`;

const App = () => {
  return (
    <ThemeProvider theme={baseTheme}>
      <Container>
        <Sliders />
        <Blog />
      </Container>
    </ThemeProvider>
  );
};

export default App;
