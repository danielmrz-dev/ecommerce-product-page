import "./App.scss";
import { Header } from "./components/Header/Header";
import { ProductSwiper } from "./components/Swiper/Swiper";

export const App: React.FC = () => {
  return (
    <>
      <Header/>
      <ProductSwiper/>
    </>
  );
};
