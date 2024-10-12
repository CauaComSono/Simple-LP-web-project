

interface ITestimonialCardProps {
    name: string,
    ocupation: string,
    description: string,
    rating: number,
    image: string;  
}

export default function TestimonialCard ({name, ocupation, description, rating, image}: ITestimonialCardProps){
    return(
        <div className="testimonial-card">
            <img src={image} alt={`${name}'photo`} className="testimonial-image" />
            <p className="testimonial-description">{description}</p>
            <div className="testimonial-rating">
                {"★".repeat(rating)}
                {"☆".repeat(5 - rating)}
            </div>
            <p>{name}</p>
            <p className="testimonial-ocupation">{ocupation}</p>
        </div>
    );
}
