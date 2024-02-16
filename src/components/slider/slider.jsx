
import style from "../slider/slider.module.scss"
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export const Slider = () => {

    const images = useFetch ('http://picsum.photos/v2/list')
    const [slideIndex, setSlideIndex] = useState(0)
    console.log(images);

    const fetchedImages = images?.map(img => ({
         id: img.id,
         src: img.download_url,
    }))

    useEffect(() => {
        const timer = setTimeout(() => {
            setSlideIndex(prevIndex => (prevIndex +1) % fetchedImages.length)
        }, 5000)
        return () => clearTimeout(timer)
    }, [slideIndex, fetchedImages])

    useEffect (() => {
      console.log('fetched images', fetchedImages);
},[fetchedImages])
const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % fetchedImages.length);
};

const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + fetchedImages.length) % fetchedImages.length);
};

     return (
        <div className={style.sliderContainer}>
            <button onClick={prevSlide} className={style.prevButton}>&#10094;</button>
            <button onClick={nextSlide} className={style.nextButton}>&#10095;</button>
            {fetchedImages && fetchedImages?.map((image, index) =>
                index === slideIndex && (
                    <div
                key={image.id || index}
                className={`${index === slideIndex ? style.fade : ''} ${style.slide}`}
            >
                <img src={image.src} alt={`Slide ${index}`} />
            </div>
                )
            )}
        </div>
     )
}