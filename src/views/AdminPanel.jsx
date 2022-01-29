import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { AdminPanelHeader } from "../components";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// Components
import {
  UserList,
  AddPizza,
  OrdersList,
  PizzasList,
  EditPizza,
} from "../components";

function AdminPanel(props) {
  const { user_login } = useSelector((state) => state.users.login);
  const history = useNavigate()

  useEffect(() => {
    if (!user_login) {
      history("/");
    } else if (!user_login.isAdmin) {
      history("/403");
    }
  }, [user_login, history]);

  return (
    <div>
      <AdminPanelHeader />

      <Routes>
        
       <Route exact path="/" element={<Navigate replace to="/admin/panel/users/list" />} />

        <Route path={"/users/list"} exact element={<UserList {...props} />} />
        <Route exact path={"/pizzas/list"} element={<PizzasList {...props} />} />
        <Route exact path={"/pizzas/add"} element={<AddPizza {...props} />} />
        <Route exact path={"/pizzas/edit/:pizzaId"} element= {<EditPizza {...props} />} />
        <Route exact path={"/orders/list"} element={<OrdersList {...props} />} />

      </Routes>
    </div>
  );
}

export default AdminPanel;
