import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { $Home, $ImgContainer } from "./Home.styles.jsx";
import slide01 from "../../../assets/presentation/slide01.JPG"
import slide02 from "../../../assets/presentation/slide02.JPG"
import slide03 from "../../../assets/presentation/slide03.JPG"
import slide04 from "../../../assets/presentation/slide04.JPG"
import slide05 from "../../../assets/presentation/slide05.JPG"
import slide06 from "../../../assets/presentation/slide06.JPG"
import slide07 from "../../../assets/presentation/slide07.JPG"
import slide08 from "../../../assets/presentation/slide08.JPG" 

export default function Home() {

    const settings = { 
        dots: true, 
        infinite: true, 
        speed: 500, 
        slidesToShow: 1, 
        slidesToScroll: 1, 
        autoplay: true, 
        autoplaySpeed: 4000
    };

    return (
        <$Home>
            <Slider {...settings}> 
                <$ImgContainer> 
                    <img src={slide01} alt="Slide 1" /> 
                </$ImgContainer> 
                <$ImgContainer> 
                    <img src={slide02} alt="Slide 2" /> 
                </$ImgContainer> 
                <$ImgContainer> 
                    <img src={slide03} alt="Slide 3" /> 
                </$ImgContainer>
                <$ImgContainer> 
                    <img src={slide04} alt="Slide 3" /> 
                </$ImgContainer>
                <$ImgContainer> 
                    <img src={slide05} alt="Slide 3" /> 
                </$ImgContainer>
                <$ImgContainer> 
                    <img src={slide06} alt="Slide 3" /> 
                </$ImgContainer>
                <$ImgContainer> 
                    <img src={slide07} alt="Slide 3" /> 
                </$ImgContainer>
                <$ImgContainer> 
                    <img src={slide08} alt="Slide 3" /> 
                </$ImgContainer>
            </Slider>
        </$Home>
    )
}