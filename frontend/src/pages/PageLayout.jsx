import React from "react";
import NavigationMenu from "./../widgets/sections/NavigationMenu";

const PageLayout = ({ children }) => {
  return (
    <div>
      <NavigationMenu />
      <section>{children}</section>
    </div>
  );
};

export default PageLayout;
