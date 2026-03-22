import React from "react";
import { Helmet } from "react-helmet-async";

const DEFAULT_TITLE = "Soulful India Tours";
const DEFAULT_DESCRIPTION =
  "Curated journeys across India with local experts and bespoke experiences.";

const buildTitle = title => {
  if (!title) return DEFAULT_TITLE;
  const normalized = String(title).toLowerCase();
  const base = DEFAULT_TITLE.toLowerCase();
  if (normalized.includes(base)) return title;
  return `${title} | ${DEFAULT_TITLE}`;
};

const Seo = ({
  title,
  description,
  image,
  canonicalUrl,
  type = "website",
  noindex = false,
  keywords
}) => {
  const resolvedTitle = buildTitle(title);
  const resolvedDescription = description || DEFAULT_DESCRIPTION;
  const resolvedCanonical =
    canonicalUrl || (typeof window !== "undefined" ? window.location.href : "");
  const resolvedImage = image || "";

  return (
    <Helmet>
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : null}
      {resolvedCanonical ? (
        <link rel="canonical" href={resolvedCanonical} />
      ) : null}

      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content={type} />
      {resolvedCanonical ? (
        <meta property="og:url" content={resolvedCanonical} />
      ) : null}
      {resolvedImage ? <meta property="og:image" content={resolvedImage} /> : null}

      <meta
        name="twitter:card"
        content={resolvedImage ? "summary_large_image" : "summary"}
      />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      {resolvedImage ? <meta name="twitter:image" content={resolvedImage} /> : null}
    </Helmet>
  );
};

export default Seo;
