import React from 'react'
import ProfilePic from "../Assets/john-doe-image.png"
import {AiFillStar} from 'react-icons/ai'

export default function Testimonials() {
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className='primary subheaidng'>Testimonial</p>
            <h1 className='primary-heading'>what they are saying</h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias assumenda quae eveniet officia sint, molestias numquam at in rerum! Eum ab dignissimos, hic alias ullam ea fuga voluptatum dolorem sequi!
            </p>
        </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="No img" />
        <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam officiis facere deserunt voluptate quas labore. Dolorum labore odio suscipit. Aliquam provident illum magnam vitae cum quasi quo cumque maxime. Aut!
        </p>
        <div className="testimonials-stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
        </div>
        <h1>John Doe</h1>
      </div>
    </div>
  )
}
