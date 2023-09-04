import React from "react";

const Carousel = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide" >
        <div className="carousel-inner " id="carousel">
         
          <div className="carousel-item active">
            <img
              src="https://www.tastingtable.com/img/gallery/what-makes-restaurant-burgers-taste-different-from-homemade-burgers-upgrade/l-intro-1662064407.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.foodandwine.com/thmb/wlqi21PyylKMLXJCMpEuomlhr4E=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/indiana-style-fried-chicken-ft-recipe0620-6e63cda36a464c24bd9ada92f780a4c6.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://www.hachette.fr/sites/default/files/burger-verrecchia.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
