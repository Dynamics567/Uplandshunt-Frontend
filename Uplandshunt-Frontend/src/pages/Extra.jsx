import React, { useState } from "react";
import { ListingsLayout } from "../Layout";

const Extra = () => {
  const getCurrentPage = (id) => {
    return id;
  };
  return (
    <div>
      <ListingsLayout onClick={getCurrentPage}>
        <p>edit</p>
      </ListingsLayout>
    </div>
  );
};

export { Extra };
