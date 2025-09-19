import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
  title = "Danesh Industries - Precision Machined Parts Manufacturer",
  description = "Danesh Industries specializes in manufacturing high-quality precision machined parts, socket weld fittings, flanges, valves, and assemblies for industrial applications.",
  keywords = "Danesh Industries, precision machined parts, socket weld fittings, flanges, valves, industrial components, manufacturing, Spare Parts Manufacturers in Chennai, Trusted Industrial Partner OEM Spare Parts Manufacturer, Precision & Reliability Spare Parts for Pumps, Durable & High-Performance Solutions, Spare Parts Consumables, Mass Production with In-House Facility",
  image = "/logos/daneshlogo.jpg",
  url,
  type = "website",
  structuredData
}) => {
  const siteUrl = "https://daneshindustries.com"; // Replace with actual domain
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Danesh Industries" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;