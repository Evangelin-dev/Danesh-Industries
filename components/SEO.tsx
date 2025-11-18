import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Danesh Industries - Precision Machined Parts Manufacturer",
  description = "Danesh Industries — a trusted manufacturer of precision machined parts, flanges, valves, and industrial components in Chennai, India. Delivering OEM-quality spare parts and engineering excellence.",
  keywords = "Danesh Industries, precision machining, flanges, valves, pipe fittings, OEM parts manufacturer, CNC machining, industrial components, Chennai, India, pump spares, valve manufacturer, custom machining, reverse engineering, industrial valves, mechanical engineering, spare parts, industrial automation, petrochemical components, HVAC parts, process industry spares, ASME standards, ASTM standards, DIN standards",
  image = "/logos/daneshlogo.jpg",
  url,
  type = "website",
}) => {
  const siteUrl = "https://www.daneshindustries.com";
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  // ✅ Social hashtags (for Open Graph, Twitter, etc.)
  const hashtags = `#DaneshIndustries #ValveManufacturer #ValveComponents #PrecisionMachining #ValveComponentManufacturerIndia #ValvePartsSupplierUAE #SaudiArabia #Bahrain #Oman #Qatar #Kuwait #GCC #OilAndGas #IndustrialMachining #CNCMachiningIndia #SparePartsManufacturerNearMe #MachineComponentsManufacturerNearMe #ReverseEngineering #MRO #SurfaceTreatment #HeatTreatment`;

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Hidden hashtag meta (for reference) */}
      <meta name="hashtags" content={hashtags} />

      {/* Open Graph (for social platforms) */}
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content={`${description}\n\n${hashtags}`}
      />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Danesh Industries" />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Meta */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta
        name="twitter:description"
        content={`${description}\n\n${hashtags}`}
      />
      <meta name="twitter:image" content={fullImage} />
      <meta name="twitter:site" content="@danesh_industries" />

      {/* Canonical */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;
