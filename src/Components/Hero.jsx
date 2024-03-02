import "./Hero.css"

const Hero = () => {    
    return (
        <header className="hero">
            <div className="container">
                <div className="hero-content">
                <h1 className="hero-title">Welcome to our store</h1>
                <p className="hero-description">We have the best products in the world</p>
                <div className="hero-buttons d-flex justify-content-center align-items-center">
                    <a href="#" className="btn btn-buy rounded-pill px-4 py-1 mx-2">Buy</a>
                    <a href="#" className="btn btn-sell rounded-pill px-4 py-1 mx-2">Sell</a>
                </div>
                </div>
            </div>
        </header>
    )
}

export {Hero};