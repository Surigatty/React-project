import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png"
import ChooseMeals from "../Assets/choose-image.png"
import DeliveryMealsImage from "../Assets/delivery-image.png"


export default function Work() {
    const workInfo = [
        {
            Image: PickMeals,
            title: "Pick Meals",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, atque saepe ea impedit rerum exercitationem nisi id voluptate velit voluptatem ut iure, dolor eum mollitia labore ducimus quas obcaecati ipsum."

        },
        {
            Image: ChooseMeals,
            title: "Choose How Often",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, atque saepe ea impedit rerum exercitationem nisi id voluptate velit voluptatem ut iure, dolor eum mollitia labore ducimus quas obcaecati ipsum."
        },
        {
            Image: DeliveryMealsImage,
            title: "Fast diliveries",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, atque saepe ea impedit rerum exercitationem nisi id voluptate velit voluptatem ut iure, dolor eum mollitia labore ducimus quas obcaecati ipsum."
        }

    ]
    return (
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className='primary-subheading'>Work</p>
                <h1 className='primary-heading'>How It Works</h1>
                <p className='primary-text'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, officia voluptatem maxime nobis velit iste sit dolorem quae ut provident nisi, itaque illum eum atque, quasi mollitia incidunt. Fugiat, aliquam.
                </p>
            </div>
            <div className="work-section-bottom" >
                {
                    workInfo.map((data) => (
                        <div className="work-section-info">
                            <div className="info-boxes-img-container">
                                <img src={data.Image} alt="" />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}
