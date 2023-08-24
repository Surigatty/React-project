import React from 'react'
import aboutBackgroundImage from "../Assets/about-background.png"
import aboutBannerImage from "../Assets/about-background-image.png"
import { BsFillPlayCircleFill } from 'react-icons/bs'

export default function About() {
  return (
    <div className='about-section-container'>
        <div className="about-background-image-container">
            <img src={aboutBackgroundImage} alt="" />
        </div>
      <div className="about-section-image-container">
      <img src={aboutBannerImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className='primary subheading'>About</p>
        <h1 className='primary-heading'>
            About food is an important part of a balanced diet
        </h1>
        <p className='primary-text'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, mollitia! Provident aperiam ad atque consequuntur molestiae? Fugiat fugit autem reiciendis deleniti, beatae sit neque laboriosam eaque dolor vitae et ipsam.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam labore maiores modi ut facere ullam itaque, pariatur mollitia harum atque consequatur, dicta cum enim? Aliquam minus dolor quos commodi provident!
        </p>

        <div className="about-buttons-container">
            <button className='secondary-button'>Learn More</button>
            <button className='watch-video-button'>
                <BsFillPlayCircleFill/>Watch video</button>


        </div>
      </div>
    </div>
  )
}
