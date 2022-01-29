import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

function ActionColumn({ pizzaId, name }) {
  return (
    <div>
      <Link to={`/admin/panel/pizzas/edit/${pizzaId}`}>
        <Tooltip title={`Edit Pizza: ${name}`} placement="bottom">
          <IconButton>
            <EditIcon />
          </IconButton>
        </Tooltip>
      </Link>
    </div>
  );
}

export default ActionColumn;
