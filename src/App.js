// App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./layoutComponents/Sidebar";
import Breadcrumb from "./layoutComponents/Breadcrumb";
import NavigationButtons from "./layoutComponents/NavigationButtons";
import Home from "./pages/Home";
import Heroes from "./pages/Heroes";
import Alerts from "./pages/Alerts";
import Abouts from "./pages/Abouts";
import Features from "./pages/Features";
import Blogs from "./pages/Blogs";
import Portfolios from "./pages/Portfolios";
import Teams from "./pages/Teams";
import Testimonials from "./pages/Testimonials";
import Faqs from "./pages/Faqs";
import Pricings from "./pages/Pricings";
import Contacts from "./pages/Contacts";
import Footers from "./pages/Footers";
import Buttons from "./pages/Buttons";
import Newsletters from "./pages/Newsletters";
import Test from "./pages/Test";
import Error from "./pages/Error";
import Badges from "./pages/Badges";
import CTAS from "./pages/CTAS";
import Dropdowns from "./pages/Dropdowns";
import Formelements from "./pages/Formelements";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const links = [
    { to: "/", name: "Home" },
    { to: "/Heroes", name: "Heroes" },
    { to: "/Alerts", name: "Alerts" },
    { to: "/Abouts", name: "Abouts" },
    { to: "/Features", name: "Features" },
    { to: "/Blogs", name: "Blogs" },
    { to: "/Portfolios", name: "Portfolios" },
    { to: "/Teams", name: "Teams" },
    { to: "/Testimonials", name: "Testimonials" },
    { to: "/Faqs", name: "Faqs" },
    { to: "/Pricings", name: "Pricings" },
    { to: "/Contacts", name: "Contacts" },
    { to: "/Footers", name: "Footers" },
    { to: "/Buttons", name: "Buttons" },
    { to: "/Newsletters", name: "Newsletters" },
    { to: "/Test", name: "Test" },
    { to: "/CTAS", name: "CTA" },
    { to: "/Dropdowns", name: "Dropdowns" },
    { to: "/Formelements", name: "Formelements" },
  ];

  const routes = [
    { path: "/", component: <Home /> },
    { path: "/Alerts", component: <Alerts /> },
    { path: "/Heroes", component: <Heroes /> },
    { path: "/Abouts", component: <Abouts /> },
    { path: "/Features", component: <Features /> },
    { path: "/Blogs", component: <Blogs /> },
    { path: "/Portfolios", component: <Portfolios /> },
    { path: "/Teams", component: <Teams /> },
    { path: "/Testimonials", component: <Testimonials /> },
    { path: "/Faqs", component: <Faqs /> },
    { path: "/Pricings", component: <Pricings /> },
    { path: "/Contacts", component: <Contacts /> },
    { path: "/Footers", component: <Footers /> },
    { path: "/Buttons", component: <Buttons /> },
    { path: "/Newsletters", component: <Newsletters /> },
    { path: "/Test", component: <Test /> },
    { path: "/Error", component: <Error /> },
    { path: "/Badges", component: <Badges /> },
    { path: "/CTAS", component: <CTAS /> },
    { path: "/Dropdowns", component: <Dropdowns /> },
    { path: "/Formelements", component: <Formelements /> },
  ];

  return (
    <div className="App min-h-screen bg-[#000000] text-gray-100">
      <Router>
        <div className="flex">
          <Sidebar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            links={links}
          />
          <main className="ml-64 w-full p-6">
            {/* Sticky Header */}
            <header className="bg-[#333333] p-4 rounded-lg shadow-md mb-6 sticky top-0 z-10">
              <h1 className="text-3xl font-bold text-white">
                Welcome to the UI Kit
              </h1>
            </header>

            {/* Breadcrumb */}
            <Breadcrumb />
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              ))}
            </Routes>

            {/* Navigation Buttons */}
            <NavigationButtons links={links} />
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
