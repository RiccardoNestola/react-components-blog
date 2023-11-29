import React from 'react'
import  "./Card.css";

const imgCard = "https://images.unsplash.com/photo-1682686581660-3693f0c588d2?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const Card = () => {
    return (
        <>

            <div className="grid pt-3" id="portfolio">

                <div className="col-25 tab-33 sma-100 p-0 m-0">


                    <div className="card">
                        <img src={imgCard} alt="Card Image" className="card-image" />
                        <div className="card-body">
                            <h3 className="card-title">Titolo del post</h3>
                            <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta minima consequatur odit voluptate cupiditate nesciunt.
                                Molestiae, sequi ipsa? Sint enim officiis delectus porro corporis, eveniet nesciunt sunt tempora impedit exercitationem!</p>
                            <button className="card-button">LEGGI DI PIÙ</button>
                        </div>
                    </div>
                    

                </div>
            </div>
        </>

    )
}

export default Card
