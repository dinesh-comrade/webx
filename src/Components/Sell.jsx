import "./Sell.css";
import upload from "../Assets/upload.png"

const Sell = () => {
  return (
    <section className="sell" id="sell">
      <div className="container">
        <h2 className="sell-title text-center">Sell</h2>
        <p className="sell-description text-center">Sell your pet with us</p>
        <div className="sell-contents">
          <div className="row">
            <div className="col-lg-6">
              <div className="sell-content">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Name
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                   Breed
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                   Owner
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                   Email
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                     Phone
                  </span>
                  <input
                    type="tel"
                    className="form-control"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-default"
                  />
                </div>

                <button className="btn-sell-now px-4 py-2 rounded-pill">
                  Sell Now 🐾
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="sell-img-container">
                <img
                  src={upload}
                  alt="Sell with us"
                  className="sell-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Sell };
