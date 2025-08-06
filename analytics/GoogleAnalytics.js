import Script from "next/script";
import React from "react";

const GoogleAnalytics = () => {
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
  if (!gaId) {
    return null; // Don't render anything if the ID isn't set
  }

  return (
    <>
      <Script 
        strategy="afterInteractive" 
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} 
      />
      <Script 
        id="google-analytics" 
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
