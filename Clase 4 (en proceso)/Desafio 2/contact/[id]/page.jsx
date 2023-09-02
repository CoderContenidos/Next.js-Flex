import React from "react";
import Link from "next/link";


export default async function ContactDetailPage({ params }) {
  const { id } = params;

  try {
    // Fetching data from an external API (Server Side Rendering)
    const fetchUsers = () => {
      return fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json());
    };

    // Fetching data and caching it
    const ArrayUsers = await fetchUsers();

    // Finding the specific contact by ID
    const contacto = ArrayUsers.find((contacto) => contacto.id.toString() === id);

    if (!contacto) {
      return (
        <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
          <Link href="/contact" style={{ color: "#007bff", textDecoration: "none", marginBottom: "10px", display: "inline-block" }}>
            Volver atrás
          </Link>
          <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>Contacto no encontrado</h1>
        </div>
      );
    }
    
    return (
      <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "5px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
        <Link href="/contact" style={{ color: "#007bff", textDecoration: "none", marginBottom: "10px", display: "inline-block" }}>
          Volver atrás
        </Link>
        <div>
          <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>Detalles del contacto con ID: {contacto.id}</h1>
          <p style={{ fontSize: "16px", marginBottom: "5px" }}>Nombre: {contacto.name}</p>
          <p style={{ fontSize: "16px", marginBottom: "5px" }}>Email: {contacto.email}</p>
          <p style={{ fontSize: "16px", marginBottom: "5px" }}>Teléfono: {contacto.phone}</p>
          <p style={{ fontSize: "16px", marginBottom: "5px" }}>Ciudad: {contacto.address.city}</p>
        </div>
      </div>
    );
  } catch (error) {
    // Handle any errors that occur during the fetch operation
    console.error("Error fetching data:", error);
    // You can display an error message or take appropriate action here
    return (
      <div>
        <p>Error loading contact details. Please try again later.</p>
      </div>
    );
  }
}
