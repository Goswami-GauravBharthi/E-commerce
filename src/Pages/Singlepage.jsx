import { useQuery } from "@tanstack/react-query";
import { NavLink, useParams } from "react-router-dom";
import { getSingleProduct } from "../api/product";
import { Loader } from "../Helpers/Loader";
import "./css/SinglePage.css";
import { FormatePrice } from "../Helpers/FormatePrice";
import { TbTruckDelivery } from "react-icons/tb";
import { GiCardExchange } from "react-icons/gi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { useState } from "react";
import { Star } from "../Helpers/Star";
import { AddToCart } from "../Helpers/AddToCart";
import { useNavigate } from "react-router-dom";

export const SinglePage = () => {
  const [curImg, setCurImg] = useState(0);
  const { id } = useParams();

  const navigate = useNavigate();

  const goToLastPage = () => {
    navigate(-1);
  };

  const { data, isLoading } = useQuery({
    queryKey: ["singleProduct", id],
    queryFn: () => getSingleProduct(id),
  });

  if (isLoading) {
    return (
      <div className="w-full h-[80vh]  loader">
        <div className=" ">
          <Loader />
        </div>
      </div>
    );
  }

  if (data) {
    const {
      image,
      name,
      stars,
      company,
      price,
      colors,
      description,
      category,
      stock,
      reviews,
    } = data;
    return (
      <section className="single-produts-section">
        <button
          className="simple-btn btn-home absolute top-4 left-70 text-white "
          onClick={goToLastPage}
        >
          🔙
        </button>
        <NavLink to={"/"}>
          <button className="simple-btn btn-home absolute top-4">home</button>
        </NavLink>

        <div className="container  grid grid-cols-2 ">
          {/* first images grid */}
          <div className=" gap-3.5  image-container">
            {/* 4 images div */}
            <div className="image-4 grid grid-cols-4">
              {image?.map((curImg, index) => {
                return (
                  <img
                    src={curImg.url}
                    key={curImg.id}
                    onClick={() => setCurImg(index)}
                  />
                );
              })}
            </div>

            {/* 1 image div */}
            <div className="img-1">
              <img src={image[curImg].url} alt="" className="main-img" />
            </div>
          </div>

          {/* second info div */}

          <div className="product-info">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />

            <p className="mrp">
              MRP :{" "}
              <del>
                <FormatePrice price={price * 1.5} />
              </del>
            </p>
            <p className="deal">
              Deal of The Day : <FormatePrice price={price} />
            </p>
            <p className="desciption text-5xl">{description}</p>

            <div className="w-full  text-6xl all-icon grid grid-cols-4">
              <div className="features">
                <TbTruckDelivery />
                <p>Free Delivery</p>
              </div>
              <div className="features">
                <GiCardExchange />
                <p>7 day replacment</p>
              </div>
              <div className="features">
                <TbTruckDelivery />
                <p>Fast Delivered</p>
              </div>
              <div className="features">
                <VscWorkspaceTrusted />
                <p>2 year warranty </p>
              </div>
            </div>

            <p>
              Available : <span>{stock > 0 ? "in Stock" : "Not Avilable"}</span>
            </p>
            <p>
              id : <span>{id}</span>
            </p>
            <p>
              Brand : <span>{company}</span>
            </p>
            <div className="h-1 w-[80%] bg-amber-600"></div>

            {stock > 0 && <AddToCart product={data} />}
          </div>
        </div>
      </section>
    );
  }
};
