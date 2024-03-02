import "./About.css";
import cat from "../Assets/about.jpg";

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="about-img-container">
                            <img src={cat} alt="About us" className="about-img"/>
                        </div>
                        </div>
                        <div className="col-lg-6">
                    <div className="about-content">
                    <h2 className="about-title">About Us</h2>
                    <p className="about-description">We are a pet care company that has been in business for over 20 years. We have the best products for your pets. We have a team of professionals who are always ready to help you with any questions you may have about your pet. We are committed to providing the best care for your pet. We have a wide variety of products for your pet, from food to toys. We also have a team of professionals who can help you with any questions you may have about your pet. We are committed to providing the best care for your pet. We have a wide variety of products for your pet, from food to toys.</p>
                    <button className="btn-read-more px-4 py-2">Read More 🐾</button>
                </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export {About};