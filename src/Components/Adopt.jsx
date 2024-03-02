import "./Adopt.css";

const Adopt = () => {
  return (
    <section className="adopt" id="adopt">
      <div className="container">
        <div className="adopt-content">
          <h1 className="adopt-title">Give a Home, Save a Life</h1>
          <p className="adopt-description">Adopt a pet from us</p>

          <p className="adopt-details">
            Open your heart and home to a four-legged companion. Our shelter
            pets come in all shapes, sizes, and personalities. Whether you’re
            seeking a loyal dog, a playful cat, or a cuddly rabbit, adopting is
            a life-changing act of love. 🐾❤️
          </p>

          <button className="btn-adopt-now">Adopt Now 🐾</button>
        </div>
      </div>
    </section>
  );
};

export {Adopt}