import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {
  HiUserGroup,
  FaPizzaSlice,
  GrAdd,
  GrOrderedList,
} from "react-icons/all";
import { useNavigate } from "react-router-dom";

export default function AdminPanelHeader() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigate = useNavigate()

  return (
    <div className="center-form">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="icon label tabs example"
        className="bg-white rounded"
      >
          <Tab
            icon={<HiUserGroup size={24} />}
            label="Users List"
            className="mr-2"
            onClick={()=>{navigate("../admin/panel/users/list")}}
          />

          <Tab
            icon={<FaPizzaSlice size={24} />} 
            label="Pizzas List"
            onClick={()=>{
              navigate('../admin/panel/pizzas/list')
            }}
           />
        

          <Tab
            icon={<GrAdd size={24} />}
            label="Add Pizza"
            className="mr-2 ml-2"
            onClick={()=>{
              navigate('../admin/panel/pizzas/add')
            }}
          />

          <Tab 
            icon={<GrOrderedList size={24} />} 
            label="Orders List"
            onClick={()=>{
              navigate('../admin/panel/orders/list')
            }}  
          />
        
      </Tabs>
    </div>
  );
}
