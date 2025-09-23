import React from "react";

const Main = () => {
  return (
    <>
      <main>
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to Rita's Achar</h1>
            <p className="hero-subtitle">Premium Quality Pickles & Preserves</p>
            <p className="hero-description">
              Experience the authentic taste of traditional Nepali pickles made with love and care
            </p>
            <div className="hero-buttons">
              <button className="btn-primary">Shop Now</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          id="myCarousel"
          className="carousel slide mb-6"
          data-bs-ride="carousel"
          data-bs-interval="4000"
        >
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-label="Slide 1"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          {/* Carousel Items */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/achar1.jpg"
                className="d-block w-100"
                alt="Premium Mango Pickle"
                loading="lazy"
                style={{
                  height: "500px",
                  objectFit: "cover"
                }}
              />
              <div className="carousel-caption">
                <h2 className="carousel-title">Premium Mango Pickle</h2>
                <p className="carousel-description">
                  Made with the finest raw mangoes and traditional spices
                </p>
                <button className="carousel-btn">Order Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/achar2.jpg"
                className="d-block w-100"
                alt="Mixed Vegetable Pickle"
                loading="lazy"
                style={{
                  height: "500px",
                  objectFit: "cover"
                }}
              />
              <div className="carousel-caption">
                <h2 className="carousel-title">Mixed Vegetable Pickle</h2>
                <p className="carousel-description">
                  A delightful blend of fresh vegetables and aromatic spices
                </p>
                <button className="carousel-btn">Order Now</button>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/achar3.jpg"
                className="d-block w-100"
                alt="Special Collection"
                loading="lazy"
                style={{
                  height: "500px",
                  objectFit: "cover"
                }}
              />
              <div className="carousel-caption">
                <h2 className="carousel-title">Special Collection</h2>
                <p className="carousel-description">
                  Discover our exclusive range of handcrafted pickles
                </p>
                <button className="carousel-btn">Explore Collection</button>
              </div>
            </div>
          </div>
        </div>

        {/* Promotional Banners */}
        <div className="promotional-banners">
          <div className="banner-row">
            <div className="promo-banner">
              <div className="banner-content">
                <h3>Free Delivery</h3>
                <p>On orders above ₹500</p>
              </div>
              <div className="banner-icon">🚚</div>
            </div>
            <div className="promo-banner">
              <div className="banner-content">
                <h3>Fresh & Natural</h3>
                <p>No preservatives added</p>
              </div>
              <div className="banner-icon">🌿</div>
            </div>
            <div className="promo-banner">
              <div className="banner-content">
                <h3>Family Recipe</h3>
                <p>Traditional taste guaranteed</p>
              </div>
              <div className="banner-icon">👨‍👩‍👧‍👦</div>
            </div>
          </div>
        </div>

        {/* Special Offers Banner */}
        <div className="special-offers">
          <div className="offers-container">
            <div className="offer-banner">
              <div className="offer-content">
                <h2>Special Offer!</h2>
                <h3>Buy 2 Get 1 Free</h3>
                <p>On all premium pickles this month</p>
                <button className="offer-btn">Shop Now</button>
              </div>
              <div className="offer-image">
                <img src="images/achar1.jpg" alt="Special Offer" />
              </div>
            </div>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="featured-categories">
          <h2 className="section-title">Featured Categories</h2>
          <div className="categories-grid">
            <div className="category-card">
              <img src="images/achar1.jpg" alt="Mango Pickles" />
              <h3>Mango Pickles</h3>
              <p>Sweet, sour, and spicy varieties</p>
            </div>
            <div className="category-card">
              <img src="images/achar2.jpg" alt="Mixed Pickles" />
              <h3>Mixed Pickles</h3>
              <p>Assorted vegetable combinations</p>
            </div>
            <div className="category-card">
              <img src="images/achar3.jpg" alt="Special Pickles" />
              <h3>Special Pickles</h3>
              <p>Premium and seasonal varieties</p>
            </div>
          </div>
        </div>

        {/* Marketing Section */}
        {/* <div className="container marketing">
          <div className="row">
            <div className="col-lg-4">
              <img
                src="https://via.placeholder.com/140x140?text=Thumbnail+1"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                alt="Thumbnail 1"
              />
              <h2 className="fw-normal">Heading</h2>
              <p>
                Some representative placeholder content for the three columns of
                text below the carousel. This is the first column.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="https://via.placeholder.com/140x140?text=Thumbnail+2"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                alt="Thumbnail 2"
              />
              <h2 className="fw-normal">Heading</h2>
              <p>
                Another exciting bit of representative placeholder content. This
                time, we've moved on to the second column.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
            <div className="col-lg-4">
              <img
                src="https://via.placeholder.com/140x140?text=Thumbnail+3"
                className="bd-placeholder-img rounded-circle"
                width="140"
                height="140"
                alt="Thumbnail 3"
              />
              <h2 className="fw-normal">Heading</h2>
              <p>
                And lastly this, the third column of representative placeholder
                content.
              </p>
              <p>
                <a className="btn btn-secondary" href="#">
                  View details »
                </a>
              </p>
            </div>
          </div>
        </div> */}
      </main>
    </>
  );
};

export default Main;