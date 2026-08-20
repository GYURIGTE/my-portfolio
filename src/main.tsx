import "@/styles/global.css";

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import { ScrollToTop } from "@/components/common/scroll-to-top";

import GuestLayout from "@/pages/guest/layout";

import HomePage from "@/pages/guest/home";
import AboutPage from "@/pages/guest/about";
import ProjectPage from "@/pages/guest/project";
import ContactPage from "@/pages/guest/contact";

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <ScrollToTop />

  <Routes>
    <Route element={<GuestLayout />}>
       <Route path="/" element={<HomePage />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/project" element={<ProjectPage />} />
       <Route path="/contact" element={<ContactPage />}  />
    </Route>

  </Routes>
  </BrowserRouter>,
)
