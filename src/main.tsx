import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { router } from "./App.tsx";
import AuthProvider from "./contexts/AuthContext.tsx";

import { register } from "swiper/element/bundle";

import { RouterProvider } from "react-router-dom";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
