import classNames from "classnames"
import { useState } from "react"
import NextImage from "../elements/image"
import CustomLink from "../elements/custom-link"

const TestimonialsGroup = ({ data }) => {
  // Only show one testimonial at a time
  // const [selectedTestimonialIndex, setSelectedTestimonialIndex] = useState(0)
  // const selectedTestimonial = data.testimonials[selectedTestimonialIndex]

  return (
  
    <div className="container flex flex-col lg:flex-row lg:flex-wrap gap-12 align-top py-12 font-serif ">
      {data.testimonials.map((testimonial) => (
        <div className="flex-1 text-lg rounded-md shadow-xl shadow-md py-12 px-8 flex-1 md:w-lg" key={testimonial.id}>
          <div className="w-16 h-16">
            <NextImage media={testimonial.picture} />
          </div>
          <h3 className="font-bold mt-4 mb-4">{testimonial.text}</h3>
          <p>{testimonial.description}</p>
        </div>
      ))}
    </div>
      
 
  )
}

export default TestimonialsGroup
