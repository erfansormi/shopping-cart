import React, { useContext, useState } from "react";

//context
import { Products } from "../../Context/ProductsContextProvider";

//components
import AllProductsComponent from "./AllProductsComponent";
import Loading from "../animations/Loading";
import Nav from "../Nav/Nav";

//functions
import { categoryFilter } from "../../functions/functions";

//title
import { Title } from "../../Hooks/Title";

const Allroducts = () => {
    const data = useContext(Products);
    const [category, setCategory] = useState("all");

    const btnActiveHandler = (event) => {
        const allBtn = document.querySelectorAll(".list-group-item");
        allBtn.forEach((item) => item.classList.remove("active"));

        event.target.classList.add("active");
        setCategory(event.target.name);
    };

    Title("Products");

    return (
        <>
            <Nav />
            <main>
                <div
                    className="list-group d-flex flex-column flex-md-row w-75 mx-auto justify-content-center"
                    style={{ marginTop: "6.5rem" }}
                >
                    <button
                        type="button"
                        className="list-group-item active"
                        aria-current="true"
                        name="all"
                        onClick={btnActiveHandler}
                    >
                        all
                    </button>
                    <button
                        type="button"
                        className="list-group-item"
                        name="men's clothing"
                        onClick={btnActiveHandler}
                    >
                        men's clothing{" "}
                    </button>
                    <button
                        type="button"
                        className="list-group-item"
                        name="jewelery"
                        onClick={btnActiveHandler}
                    >
                        jewelery
                    </button>
                    <button
                        type="button"
                        className="list-group-item"
                        name="electronics"
                        onClick={btnActiveHandler}
                    >
                        electronics
                    </button>
                    <button
                        type="button"
                        className="list-group-item"
                        name="women's clothing"
                        onClick={btnActiveHandler}
                    >
                        women's clothing
                    </button>
                </div>
                <article
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        marginTop: "15px",
                    }}
                >
                    {/* all category */}
                    {data.length && category == "all"
                        ? data.map((item) => (
                            <AllProductsComponent
                                title={item.title}
                                id={item.id}
                                key={item.id}
                                img={item.image}
                                price={item.price}
                                item={item}
                                quantity={item.quantity}
                            />
                        ))
                        : ""}

                    {/* filter category */}
                    {data.length && category != "all"
                        ? categoryFilter(data, category).map((item) => (
                            <AllProductsComponent
                                title={item.title}
                                id={item.id}
                                key={item.id}
                                img={item.image}
                                price={item.price}
                                item={item}
                                quantity={item.quantity}
                            />
                        ))
                        : ""}

                    {/* loading */}
                    {!data.length && <Loading />}
                </article>
            </main>
        </>
    );
};

export default Allroducts;
