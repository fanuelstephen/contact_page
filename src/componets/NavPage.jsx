// NavPage Component
import React from "react";
import ContactDetailsPage from "./ContactDetailsPage";
import { Route, Routes } from "react-router-dom";

function NavPage() {
  return (
    <div>
      <Routes>
        <Route path="/contact/:id" element={<ContactDetailsPage />} />
      </Routes>
    </div>
  );
}

export default NavPage;

