import "./Buy.css";
import cat from "../Assets/Buy/1.jpg";
import dog from "../Assets/Buy/2.jpg";
import parrot from "../Assets/Buy/3.jpg";
import hamster from "../Assets/Buy/4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

const Buy = () => {
  return (
    <section className="buy" id="buy">
      <div className="container">
        <h2 className="buy-title text-center">Buy</h2>
        <p className="buy-description text-center">
          we have the best pets for you
        </p>

        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="buy-cards">
              <div className="card">
                <img src={cat} className="card-img-top" alt="cat" />
                <div className="card-body">
                  <h5 className="card-title">Cats</h5>
                  <p className="card-text">
                    Cats are the most popular pets in the world. They are known
                    for their playful nature and their ability to hunt.
                  </p>
                  <a href="#" className="btn btn-buy-now">
                    Buy Now 🧶
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="buy-cards">
              <div className="card">
                <img src={dog} className="card-img-top" alt="cat" />
                <div className="card-body">
                  <h5 className="card-title">Dogs</h5>
                  <p className="card-text">
                    Dogs are the most popular pets in the world. They are known
                    for their humble nature and their ability to safe people.
                  </p>
                  <a href="#" className="btn btn-buy-now">
                    Buy Now 🦮
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="buy-cards">
              <div className="card">
                <img src={parrot} className="card-img-top" alt="cat" />
                <div className="card-body">
                  <h5 className="card-title">Parrots</h5>
                  <p className="card-text">
                    Parrots are the most popular pets in the world. They are
                    known for their talking nature and their ability to mimic.
                  </p>
                  <a href="#" className="btn btn-buy-now">
                    Buy Now 🦜
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="buy-cards">
              <div className="card">
                <img src={hamster} className="card-img-top" alt="cat" />
                <div className="card-body">
                  <h5 className="card-title">Hamsters</h5>
                  <p className="card-text">
                    Hamsters are the most popular pets in the world. They are
                    known for their running nature and their ability to store.
                  </p>
                  <a href="#" className="btn btn-buy-now">
                    Buy Now 🐹
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export { Buy };
