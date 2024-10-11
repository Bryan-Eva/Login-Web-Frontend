import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LoginForm from "./components/login.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LoginForm></LoginForm>
  </StrictMode>
);
