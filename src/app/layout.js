import Script from 'next/script';
import "./globals.css";

export const metadata = {
  title: "AY Creative Solution - Digital Marketing Agency",
  description: "Professional social media management, content creation, and digital marketing solutions that help your brand soar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CMEN3XHTKG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CMEN3XHTKG');
          `}
        </Script>
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: 'sans-serif', fontWeight: 400 }}
      >
        {children}
      </body>
    </html>
  );
}
