import { Carousel } from "react-responsive-carousel";
import './carousel.css'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ImageCarousel = ({listing}) => {
    const images = [listing.photoUrl, listing.photo2Url, listing.photo3Url,listing.photo4Url, listing.photo5Url,]
    return (
        <div className="box">
            <Carousel useKeyboardArrows={true}>
                {images.map((URL, index) => (
                <div className="slide">
                    <img alt="sample_file" src={URL} key={index} />
                </div>
                ))}
        </Carousel>
      </div>
    )
}

export default ImageCarousel;