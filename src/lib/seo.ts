export const SITE_URL = "https://breacc.org.uk";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "BREACC — Brazilian Educational and Cultural Centre",
  alternateName: "BREACC",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  email: "info@breacc.com",
  foundingDate: "1997",
  description:
    "Registered UK charity (no. 1087726) teaching Portuguese as a Heritage Language and Brazilian culture to children and young people. The oldest POLH school in the UK.",
  identifier: {
    "@type": "PropertyValue",
    propertyID: "UK Charity Commission",
    value: "1087726",
  },
  sameAs: [
    "https://www.facebook.com/breaccbournemouth",
    "https://www.facebook.com/breaccschool",
    "https://www.instagram.com/breaccbournemouth/",
    "https://www.instagram.com/breaccschool/",
  ],
  location: [
    {
      "@type": "Place",
      name: "BREACC Bournemouth",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Anglo Continental School, 29-35 Wimborne Rd",
        addressLocality: "Bournemouth",
        postalCode: "BH2 6NA",
        addressCountry: "GB",
      },
    },
    {
      "@type": "Place",
      name: "BREACC Twickenham",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Waldegrave School, Fifth Cross Rd, Twickenham",
        addressLocality: "London",
        postalCode: "TW2 5LH",
        addressCountry: "GB",
      },
    },
  ],
};
