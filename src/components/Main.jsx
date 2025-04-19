import React from "react";

const Main = () => {
  return (
    <>
      <main>
        {/* Carousel Container */}
        <div
          id="myCarousel"
          className="carousel slide mb-6"
          data-bs-ride="carousel"
          data-bs-interval="3000" // Auto-play every 3 seconds
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
                alt="First Slide"
                loading="lazy"
                style={{
                  height: "650px", // Adjust this value to make the image smaller
                  objectFit: "cover" // Ensures the image covers the area
                }}
              />
              {/* <div className="container">
                <div className="carousel-caption text-start">
                  <h1>First Slide</h1>
                  <p className="opacity-75">
                    Some representative placeholder content for the first slide.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Sign up today
                    </a>
                  </p>
                </div>
              </div> */}
            </div>
            <div className="carousel-item">
              <img
                src="images/achar2.jpg"
                className="d-block w-100"
                alt="Second Slide"
                loading="lazy"
                style={{
                  height: "650px", // Adjust this value to make the image smaller
                  objectFit: "cover"
                }}
              />
              {/* <div className="container">
                <div className="carousel-caption">
                  <h1>Second Slide</h1>
                  <p>
                    Some representative placeholder content for the second slide.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Learn more
                    </a>
                  </p>
                </div>
              </div> */}
            </div>
            <div className="carousel-item">
              <img
                src="images/achar3.jpg"
                className="d-block w-100"
                alt="Third Slide"
                loading="lazy"
                style={{
                  height: "650px", // Adjust this value to make the image smaller
                  objectFit: "cover"
                }}
              />
              <div className="container">
                {/* <div className="carousel-caption text-end">
                  <h1>Third Slide</h1>
                  <p>
                    Some representative placeholder content for the third slide.
                  </p>
                  <p>
                    <a className="btn btn-lg btn-primary" href="#">
                      Browse gallery
                    </a>
                  </p>
                </div> */}
              </div>
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