import React, { useState } from "react";
import Cover from "./component/header/Cover";



const App = () => {
  // You can manage flipping state here if you want to share it globally,
  // but since Cover manages it internally, this is just a simple wrapper.
  return (
    <div>
      <Cover />
      
      
    </div>
  );
};

export default App;
