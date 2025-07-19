// src/components/Seo.js
import React from "react";
import { Helmet } from "react-helmet";

const SeoHelmet = ({ title, canonical }) => {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {canonical && <link rel="canonical" href={canonical} />}
    </Helmet>
  );
};

export default SeoHelmet;
