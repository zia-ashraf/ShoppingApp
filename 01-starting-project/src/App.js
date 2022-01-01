import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import Category from "./components/categories/CategoryPage";
import ItemsPage from "./components/Items/ItemsPage";
import CategoryPage from "./components/categories/CategoryPage";
function App() {
  const productArray = [
    {
      id: "product01",
      name: "coat",
      availableNumber: 2,
      isFavourite: false,
      image: "./../resources/images/productImg/product1.jpg",
      types: [
        {
          name: "coatOne",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatTwo",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatThree",
          newPrice: 12,
          oldPrice: 8,
        },
      ],
    },
    {
      id: "product02",
      name: "shirt",
      availableNumber: 2,
      isFavourite: false,
      image: "./../resources/images/productImg/product1.jpg",
      types: [
        {
          name: "coatOne",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatTwo",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatThree",
          newPrice: 12,
          oldPrice: 8,
        },
      ],
    },
    {
      id: "product03",
      name: "sweater",
      availableNumber: 2,
      isFavourite: false,
      image: "./../resources/images/productImg/product1.jpg",
      types: [
        {
          name: "coatOne",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatTwo",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatThree",
          newPrice: 12,
          oldPrice: 8,
        },
      ],
    },
    {
      id: "product04",
      availableNumber: 2,
      name: "caps",
      isFavourite: false,
      image: "./../resources/images/productImg/product1.jpg",
      types: [
        {
          name: "coatOne",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatTwo",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatThree",
          newPrice: 12,
          oldPrice: 8,
        },
      ],
    },
    {
      id: "product05",
      name: "coat",
      availableNumber: 2,
      isFavourite: false,
      image: "./../resources/images/productImg/product1.jpg",
      types: [
        {
          name: "coatOne",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatTwo",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatThree",
          newPrice: 12,
          oldPrice: 8,
        },
      ],
    },
    {
      id: "product06",
      name: "shirt",
      availableNumber: 2,
      isFavourite: false,
      image: "./../resources/images/productImg/product1.jpg",
      types: [
        {
          name: "coatOne",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatTwo",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatThree",
          newPrice: 12,
          oldPrice: 8,
        },
      ],
    },
    {
      id: "product07",
      name: "sweater",
      availableNumber: 2,

      isFavourite: false,
      image: "./../resources/images/productImg/product1.jpg",
      types: [
        {
          name: "coatOne",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatTwo",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatThree",
          newPrice: 12,
          oldPrice: 8,
        },
      ],
    },
    {
      id: "product08",
      availableNumber: 2,
      name: "caps",
      isFavourite: false,
      image: "./../resources/images/productImg/product1.jpg",
      types: [
        {
          name: "coatOne",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatTwo",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatThree",
          newPrice: 12,
          oldPrice: 8,
        },
      ],
    },
    {
      id: "product09",
      name: "coat",
      availableNumber: 2,
      isFavourite: false,
      image: "./../resources/images/productImg/product1.jpg",
      types: [
        {
          name: "coatOne",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatTwo",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatThree",
          newPrice: 12,
          oldPrice: 8,
        },
      ],
    },
    {
      id: "product10",
      name: "shirt",
      availableNumber: 2,
      isFavourite: false,
      image: "./../resources/images/productImg/product1.jpg",
      types: [
        {
          name: "coatOne",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatTwo",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatThree",
          newPrice: 12,
          oldPrice: 8,
        },
      ],
    },
    {
      id: "product11",
      availableNumber: 2,
      name: "sweater",
      isFavourite: false,
      image: "./../resources/images/productImg/product1.jpg",
      types: [
        {
          name: "coatOne",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatTwo",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatThree",
          newPrice: 12,
          oldPrice: 8,
        },
      ],
    },
    {
      id: "product12",
      availableNumber: 2,
      name: "caps",
      isFavourite: false,
      image: "./../resources/images/productImg/product1.jpg",
      types: [
        {
          name: "coatOne",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatTwo",
          newPrice: 12,
          oldPrice: 8,
        },
        {
          name: "coatThree",
          newPrice: 12,
          oldPrice: 8,
        },
      ],
    },
  ];

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/contact" element={<Contacts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home productArray={productArray} />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/home/:categoryName"
          element={<CategoryPage></CategoryPage>}
        >
          <Route path=" :itemName" element={<ItemsPage></ItemsPage>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
