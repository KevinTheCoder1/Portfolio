import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface ShowcaseProps {
    data: any[]
}

function Showcase({data}: ShowcaseProps): JSX.Element {
    const [currSlideIdx, setCurrSlideIdx] = useState(0)

    const nextSlide = () =>  {
        setCurrSlideIdx((currSlideIdx + 1) % data.length)
    }

    const prevSlide = () =>  {
        setCurrSlideIdx((currSlideIdx + data.length - 1) % data.length)
    }

    return (
        <div className="slideShow" style={{width: "100%", height: "100%"}}>
            <button className="prevSlide slideButton" onClick={prevSlide}>{<FaChevronLeft/>}</button>
            {currSlideIdx === 0 && data[currSlideIdx] !== null && (<video controls={true} autoPlay={true} src={data[currSlideIdx]}/>)}
            {currSlideIdx !== 0 && (<img src={data[currSlideIdx]} alt=""/>)}
            <button className="nextSlide slideButton" onClick={nextSlide}>{<FaChevronRight/>}</button>
        </div>
    )
}

export default Showcase
