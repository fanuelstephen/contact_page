// Sidebar Component
import React from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { contacts } from "../data/contactData";

function Sidebar() {
  return (
    <React.Fragment>
      <section className="sidebar">
        <div className="sidebar-search">
          <div className="siderbar-icon">
            <MdKeyboardDoubleArrowLeft className="icon" />
          </div>
          <div className="search">
            <input placeholder="Search..." type="text" />
            <button type="submit">Go</button>
          </div>
        </div>
        <div className="contact_list ">
          <ul>
            {contacts.map((contact, i) => (
              <li key={i}>
                <Link to={`/contact/${i}`}>{contact}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
}

export default Sidebar;
