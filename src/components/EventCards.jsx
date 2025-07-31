import { useRef } from "react";

const EventCardCarousel = ({ title, images, name, likes, comments, desc }) => {

    const imgRef = useRef(null)

    const scroll = (direction) => {
        const { current } = imgRef
        const scrollAmount = 450

        if (direction === "left") {
            current.scrollLeft -= scrollAmount
        } else {
            current.scrollLeft += scrollAmount
        }
    }

    const descSize = desc.length
    if (descSize >= 20) {
        var trimmedDesc = desc.slice(0, 100);
    }

    return (
        <div className="event-card-container" key={name} >
            <div className="event-card-layout">
                <div className="carousel-section">
                    <div className="carousel-wrapper">
                        <button onClick={() => scroll('left')} className="carousel-btn left" > &lt; </button>
                        <div className="carousel-img-container" ref={imgRef}>
                            {images.map((src, index) => (
                                <img
                                    key={index}
                                    src={src} />
                            ))}
                        </div>
                        <button onClick={() => scroll('right')} className="carousel-btn right"> &gt; </button>
                    </div>
                </div>
                <div className="event-details-section">
                    <h3><b>Event : </b>{title}</h3>
                    <p><b>Venue : </b>{name}</p>
                    <p><b>Event Description : </b>{trimmedDesc}...</p>
                    <p><b>Likes : </b>{likes}</p>
                    <p><b>Comments : </b>{comments}</p>
                </div>
            </div>
        </div>
    );

}
export default EventCardCarousel