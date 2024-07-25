import React from "react";
import ReactDOM from "react-dom/client";
// Header
// - logo
// - nav Items
//Body
// - search
// - RestaurantContainer
//   - RestaurantCard
//     - Img
//     - Name of rest, start rating, cuisine, delery tie
// Footer
// - Copyright
// - Links
// - Address
// - Contact
const cardStyle = {
  backgroundColor: "#c00f0f",
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://www.pngall.com/wp-content/uploads/8/Restaurant-Logo.png"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={cardStyle}>
      <h1>Haldiram food</h1>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body-outer">
      <div className="search">search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
var root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
