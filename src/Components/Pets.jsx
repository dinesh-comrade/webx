import "./Pets.css";
import cat1 from "../Assets/Pets/cat 1.jpg";
import cat2 from "../Assets/Pets/cat 2.jpg";
import dog1 from "../Assets/Pets/dog1.jpg";
import dog2 from "../Assets/Pets/dog2.jpg";
import hamster from "../Assets/Pets/hamster.jpg";
import parrot1 from "../Assets/Pets/parrot1.jpg";
import parrot2 from "../Assets/Pets/parrot2.jpg";

const Pets = () => {
  return (
    <section className="pets" id="pets">
      <div className="container">
        <h1 className="pets-title text-center">Pets</h1>
        <p className="pets-description text-center">
          Cute pictures of out pets
        </p>

        <div className="pets-contents">
          <div
            id="carouselExampleInterval"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval={3000}>
                <img src={cat1} className="d-block w-100 slider-img" alt="..." />
              </div>
              <div className="carousel-item" data-bs-interval={3000}>
                <img src={cat2} className="d-block w-100 slider-img" alt="..." />
              </div>
              <div className="carousel-item active" data-bs-interval={3000}>
                <img src={dog1} className="d-block w-100 slider-img" alt="..." />
              </div>
              <div className="carousel-item active" data-bs-interval={3000}>
                <img src={dog2} className="d-block w-100 slider-img" alt="..." />
              </div>
              <div className="carousel-item active" data-bs-interval={3000}>
                <img src={hamster} className="d-block w-100 slider-img" alt="..." />
              </div>
              <div className="carousel-item active" data-bs-interval={3000}>
                <img src={parrot1} className="d-block w-100 slider-img" alt="..." />
              </div>
              <div className="carousel-item active" data-bs-interval={3000}>
                <img src={parrot2} className="d-block w-100 slider-img" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pets}