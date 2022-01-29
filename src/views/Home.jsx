import React, { useEffect } from "react";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getPizzasList } from "../redux/actions/pizzas.actions";
// Components
import { Filter, PizzaCard } from "../components";
import { Loader, Message } from "../containers";
import { useLocation } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const location = useLocation().search

  console.log(location);

  const {
    loading: loadingList,
    error: errorList,
    pizzas,
  } = useSelector((state) => state.pizzas.list);

  useEffect(() => {
    dispatch(getPizzasList(location));
  }, [dispatch, location]);

  return (
    <div className="container text-center">
      {loadingList ? (
        <Loader />
      ) : errorList ? (
        <Message message={errorList} type="error" />
      ) : (
        pizzas && (
          <>
            <Filter />
            <div className="row">
              {pizzas.map((pizza, ind) => (
                <div className="col-md-6 col-lg-4 " key={ind}>
                  <PizzaCard pizza={pizza} />;
                </div>
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
}

export default Home;
