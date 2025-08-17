import React from "react";
import { useParams } from "react-router-dom"; // ← fix this
import "./EntityDescription.css";

const EntityDescription = ({ getCategoryData }) => {
  const { entityName, category } = useParams();

  // handle spaces/encoding and missing data safely
  const name = decodeURIComponent(entityName);
  const list = getCategoryData?.(category) || [];
  const entity = list.find((e) => e.name === name || e.id === name);

  if (!entity) return <p>Entity not found.</p>;

  const { img, level, description } = entity;

  return (
    <div className="desc-card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p className="desc-card-level">{level}</p>
      <p className="desc-card-description">{description}</p>
    </div>
  );
};

export default EntityDescription;
