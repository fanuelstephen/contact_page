import React from "react";
import Navbar from "./Navbar";
import NavPage from "./NavPage";
import Sidebar from "./Sidebar";

function MainPage() {
  return (
    <React.Fragment>
      {/* heading section */}
      <section>
        <div>
          <Navbar />
        </div>
      </section>

      {/* sidebar section */}
      <section>
        <div className="main-body">
          <div className="grid col-span-3 side">
            <Sidebar />
          </div>
          <div className=" grid col-span-8 main">
            <NavPage />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default MainPage;
