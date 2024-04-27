// Sidebar Component
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { contacts } from "../data/contactData";

function Sidebar() {
  const [hideIcon, setHideIcon] = useState(false);

  const handleClick = () => {
    setHideIcon(!hideIcon);
  };

  return (
    <React.Fragment>
      <section className={`sidebar ${hideIcon ? "hide" : "show"}`}>
        <div className="sidebar-search">
          <div className="siderbar-icon">
            {hideIcon ? (
              <MdOutlineKeyboardDoubleArrowRight
                className="icon"
                onClick={handleClick}
              />
            ) : (
              <MdKeyboardDoubleArrowLeft
                className="icon"
                onClick={handleClick}
              />
            )}
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
