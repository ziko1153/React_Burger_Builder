import React from "react";
import Layout from "./components/Layout/Layout";

import BurgerBuilder from "./components/containers/BurgerBuilder/BurgerBuilder";

const App = () => {
  return (
    <div>
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
};

export default App;
