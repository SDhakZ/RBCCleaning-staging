import React from "react";
import Head from "next/head";

export default function EmailTemplate({ formData }) {
  const { name, email, address, subject, contact, message, dynamicFields } =
    formData;
  const areaKeys = [
    "Area of the building",
    "Area of the lawn",
    "Area of the car park",
    "Area of the walk ins",
    "Area of the concrete pavement",
  ];
  // Helper function to render dynamic fields
  const renderDynamicFields = (fields) => {
    return Object.keys(fields).map((key) => {
      if (areaKeys.includes(key) && fields["Area Unit"]) {
        return (
          <p key={key} style={{ fontSize: "1.1rem" }}>
            <strong style={{ color: "#25AAC7" }}>
              {key.replace(/([A-Z])/g, " $1")}:{" "}
            </strong>
            {`${fields[key]} ${fields["Area Unit"]}`}
          </p>
        );
      } else if (key === "Area Unit") {
        // Skip rendering the Area Unit key as it's already combined with area
        return null;
      } else {
        return (
          <p key={key} style={{ fontSize: "1.1rem" }}>
            <strong style={{ color: "#25AAC7" }}>
              {key.replace(/([A-Z])/g, " $1")}:{" "}
            </strong>
            {fields[key]}
          </p>
        );
      }
    });
  };

  return (
    <>
      <Head>
        <title>RBC Cleaning Email Template</title>
      </Head>
      <div style={{ overflowX: "hidden", fontFamily: "Visby", width: "100%" }}>
        {/* Render email content */}
        <h1>RBC Cleaning Services</h1>
        <h2>You received a message from {name} through your website</h2>
        <div
          style={{
            width: "100%",
            marginTop: "30px",
            maxWidth: "700px",
            backgroundColor: "#F3F3F3",
            padding: "2px 15px",
          }}
        >
          <p style={{ fontSize: "1.1rem" }}>
            <strong style={{ color: "#25AAC7" }}>Subject: </strong>
            {subject}
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            <strong style={{ color: "#25AAC7" }}>Name: </strong>
            {name}
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            <strong style={{ color: "#25AAC7" }}>Address: </strong>
            {address}
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            <strong style={{ color: "#25AAC7" }}>Contact: </strong>
            {contact}
          </p>
          <p style={{ fontSize: "1.1rem" }}>
            <strong style={{ color: "#25AAC7" }}>Email: </strong>{" "}
            <a
              title="Email"
              style={{ color: "#FF867A", textDecoration: "underline" }}
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </p>

          {dynamicFields && (
            <div style={{ marginTop: "30px" }}>
              <h3 style={{ fontSize: "1.2rem" }}>{subject} Details:</h3>
              {renderDynamicFields(dynamicFields)}
            </div>
          )}
          <p
            style={{
              fontSize: "1.1rem",
              width: "100%",
              maxWidth: "500px",
            }}
          >
            <strong style={{ fontSize: "1.1rem", color: "#25AAC7" }}>
              Additional Message:
            </strong>{" "}
            &quot;{message}&quot;
          </p>
        </div>
      </div>
    </>
  );
}
