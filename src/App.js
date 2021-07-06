import Header from './component/Header/Header';
import  './body.css';
import BodyTop from './component/Footer/Top/BodyTop';
import Bottom from './component/Footer/Bottom/Bottom';
import Caro from './component/Carousel/Caro';
import BottomCarousel from './component/BottomCarousel/BottomCarousel';

function App() {
  return (
    <div>
      <Header/>
      <Caro/>
      <BodyTop/>
      <BottomCarousel/>
      <Bottom/>
    </div>
  );
}

export default App;
