import React from "react";
import { routes } from "../routes";
import { NavBar } from "../containers";
import { Routes, Route } from "react-router-dom";

function MainLayout(props) {
  return (
    <>
      <NavBar />
      <Routes>
        {routes.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact
                element={<route.component {...props} />}
              />
            )
          );
        })}
      </Routes>
    </>
  );
}

export default MainLayout;
