import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
}

export default function SEOHead({ title, description, keywords, canonicalPath }: SEOHeadProps) {
  useEffect(() => {
    document.title = title;
    
    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) { el = document.createElement("meta"); el.setAttribute(attr, name); document.head.appendChild(el); }
      el.setAttribute("content", content);
    };
    
    setMeta("description", description);
    if (keywords) setMeta("keywords", keywords);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:site_name", "North Coast Property Maintenance", "property");
    
    // Local business structured data
    const schemaId = "northcoast-schema";
    let schema = document.getElementById(schemaId);
    if (!schema) { schema = document.createElement("script"); schema.id = schemaId; schema.setAttribute("type", "application/ld+json"); document.head.appendChild(schema); }
    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "North Coast Property Maintenance",
      "description": "Professional property maintenance services in Vancouver BC including pressure washing, gutter cleaning, snow removal, and lawn care.",
      "telephone": "(604) 555-0192",
      "email": "info@northcoastpm.ca",
      "address": { "@type": "PostalAddress", "addressLocality": "Vancouver", "addressRegion": "BC", "addressCountry": "CA" },
      "areaServed": ["Vancouver", "North Vancouver", "Burnaby", "Richmond", "West Vancouver"],
      "url": "https://northcoastpm.ca",
      "priceRange": "$$",
      "openingHours": "Mo-Fr 08:00-18:00"
    });
  }, [title, description, keywords]);
  
  return null;
}