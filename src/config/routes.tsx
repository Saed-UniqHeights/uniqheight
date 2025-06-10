import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home';
import AboutPage from '../pages/about';
import Services from '../pages/services';
import TryDemo from '../pages/try-demo';
import Blog from '../pages/blog';
import NotFound from '../pages/notFound';
import BookDemo from '../pages/book-demo';
// import Font from '../pages/font';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/about" element={<AboutPage />} /> */}
      {/* <Route path="/services" element={<Services />} /> */}
      <Route path="try-demo" element={<TryDemo />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/book-demo" element={<BookDemo />} />
      {/* <Route path="/font" element={<Font />} /> */}
      {/* Add more routes as needed */}
      {/* Catch-all route for 404 Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;