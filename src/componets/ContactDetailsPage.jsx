// ContactDetailsPage Component
import React from "react";
import { conctactDescription } from "../data/contactData";
import { useParams } from "react-router-dom";

function ContactDetailsPage() {
  const { id } = useParams();

  return (
    <React.Fragment>
      <section>
        <div className="contactDetail-container">
          {conctactDescription[id] && (
            <div className="coctact-content">
              <img
                src={conctactDescription[id].Image}
                alt="contact phot"
                className="img"
              />
              <div className="contact-description">
                <h3>{conctactDescription[id].name}</h3>
                <p>{conctactDescription[id].tell}</p>
                <p>{conctactDescription[id].note}</p>
                <p>{conctactDescription[id].share}</p>
                <p>{conctactDescription[id].add}</p>
                <div className="contact-details">
                  <button className="btn">
                    {conctactDescription[id].edit}
                  </button>
                  <button className="btn btn2">
                    {conctactDescription[id].delete}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </React.Fragment>
  );
}

export default ContactDetailsPage;
