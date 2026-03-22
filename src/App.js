import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./helpers/components/header";
import Home from "./pages/home";
import TourPackageIndia from "./pages/tour-packages-india";
import TourOfIndia from "./pages/tours_of_india";
import Blogs from "./pages/blogs";
import BlogDetail from "./pages/BlogDetail";
import News from "./pages/News";
import NewsDetail from "./pages/NewsDetail";
import Gallery from "./pages/Gallery";
import PlacesToVisit from "./pages/places_to_visit";
import BestTimeToVisit from "./pages/best_time_to_visit";
import TourDetail from "./pages/TourDetail";
import DestinationDetail from "./pages/DestinationDetail";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";
import About from "./pages/About";
import GoldenTriangleDetail from "./pages/GoldenTriangleDetail";
import PopularPackageDetail from "./pages/PopularPackageDetail";
import { EnquiryModalProvider } from "./helpers/components/EnquiryModalContext";
import PackagesByCategory from "./pages/PackagesByCategory";
import PackagesOverview from "./pages/PackagesOverview";

function App() {
  const [subcategoryId, setSubcategoryId] = useState(null); // Manage subcategory ID at the App level

  return (
    <EnquiryModalProvider>
      <Router>
        <div className="App">
          {/* Pass setSubcategoryId to Header */}
          <Header setSubcategoryId={setSubcategoryId} />

          {/* Define Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/holiday-packages/:id"
              element={<TourPackageIndia subcategoryId={subcategoryId} />} // Pass subcategoryId here
            />
            <Route path="/tour-of-india" element={<TourOfIndia />} />
            <Route path="/places-to-visit" element={<PlacesToVisit />} />
            <Route path="/best-time-to-visit" element={<BestTimeToVisit />} />
            <Route path="/india-tours/:slug" element={<TourDetail />} />
            <Route path="/golden-triangle/:slug" element={<GoldenTriangleDetail />} />
            <Route path="/popular-tours/:slug" element={<PopularPackageDetail />} />
            <Route path="/destinations/:slug" element={<DestinationDetail />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsDetail />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/packages" element={<PackagesOverview />} />
            <Route path="/packages/:category" element={<PackagesByCategory />} />
            <Route path="/about" element={<About />} />
            <Route path="/:subcategoryName/:tripName" element={<TourOfIndia />} />
          </Routes>
        </div>
      </Router>
    </EnquiryModalProvider>
  );
}

export default App;
