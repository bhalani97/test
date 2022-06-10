import React from "react";
import Page from "pages/Page";
import OurProcess from "pages/OurProcess";
import Career from "pages/Career";
import BlogDetail from "pages/BlogDetail";
import Blog from "pages/Blog";
import Pricing from "pages/Pricing";
import ProjectDetail from "pages/ProjectDetail";
import Project from "pages/Project";
import ContactUs from "pages/ContactUs";
import Service from "pages/Service";
import OurTeams from "pages/OurTeams";
import AboutUs from "pages/AboutUs";
import Home1 from "pages/Home1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourteams" element={<OurTeams />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/project" element={<Project />} />
        <Route path="/projectdetail" element={<ProjectDetail />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/ourprocess" element={<OurProcess />} />
        <Route path="/page" element={<Page />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
