/* TODO: 
    icon paths
    google tag code
*/
import React from 'react';
import {any, node, object} from 'prop-types';
// import gtag from '../../modules/gtag.js';

const Document = ({Html, Head, Body, children, renderMeta}) => (
    <html>

        <head>
            <title>Appstem | Mobile App Design &amp; Development Company | Welcome</title>
            <meta name="description" content="Appstem is a full-service mobile strategy, design and development agency focused on creating apps that serve a purpose. Based in San Francisco, Appstem has delivered over 200 apps with a team of experts specializing in strategy, QA, development and UI/UX design.">
            <link rel="icon" type="image/png" href="/favicon.png">
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
			<link rel="manifest" href=""/>
			<link rel="mask-icon" href="" color="#000000"/>
			<meta name="msapplication-TileColor" content="#000000"/>
            <meta name="theme-color" content="#000000"/>
            <meta itemProp="name" content="appstem"/>
			<meta itemProp="url" content="https://appstem.com"/>
			<meta itemProp="image" content=""/>
			<meta itemProp="thumbnailUrl" content=""/>

            <meta charset="UTF-8">
            <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
			<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"/>
            <meta name="robots" content="noodp">
            <link rel="canonical" href="https://appstem.com/">
            <meta property="og:locale" content="en_US">
            <meta property="og:type" content="website">
            <meta property="og:title" content="Appstem | Mobile App Design &amp; Development Company | Welcome">
            <meta property="og:description" content="Appstem is a full-service mobile strategy, design and development agency focused on creating apps that serve a purpose. Based in San Francisco, Appstem has delivered over 200 apps with a team of experts specializing in strategy, QA, development and UI/UX design.">
            <meta property="og:url" content="https://appstem.com/">
            <meta property="og:site_name" content="Appstem">
            <meta name="twitter:card" content="summary_large_image">
            <meta name="twitter:description" content="Appstem is a full-service mobile strategy, design and development agency focused on creating apps that serve a purpose. Based in San Francisco, Appstem has delivered over 200 apps with a team of experts specializing in strategy, QA, development and UI/UX design.">
            <meta name="twitter:title" content="Appstem | Mobile App Design &amp; Development Company | Welcome">
            <meta name="twitter:site" content="@appstem">
            <meta name="twitter:creator" content="@appstem">
            <script async="" src="https://www.google-analytics.com/analytics.js"></script>
            <script type="application/ld+json">
                {
                    "@context": "http:\/\/schema.org",
                    "@type": "WebSite",
                    "@id": "#website",
                    "url": "https:\/\/appstem.com\/",
                    "name": "Appstem",
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": "https:\/\/appstem.com\/?s={search_term_string}",
                        "query-input": "required name=search_term_string"
                    }
                }
            </script>
            <script type="application/ld+json">
                {
                    "@context": "http:\/\/schema.org",
                    "@type": "Organization",
                    "url": "https:\/\/appstem.com\/",
                    "sameAs": ["https:\/\/www.facebook.com\/appstemmedia", "https:\/\/www.instagram.com\/appstem",
                    "https:\/\/www.linkedin.com\/company\/appstem-media-llc",
                    "https:\/\/www.youtube.com\/channel\/UCqo39kRwYoiTkvWYXC4ug0g", "https:\/\/twitter.com\/appstem"
                    ],
                    "@id": "#organization",
                    "name": "Appstem",
                    "logo": "https:\/\/appstem.com\/wp-content\/uploads\/2017\/02\/Appstem_Sq_280x280.jpg"
                }
            </script>
            <meta name="msvalidate.01" content="E4F21E84EDCDCA6F820F0E195EF17A07">
            <meta name="google-site-verification" content="wY0uEHHwBDWzSrZn-UNN-JKxO7R8QLKG8n4aFgG42RA">
            <meta name="google-site-verification" content="nXCLiqgUTODqYXt4VXSqFgnTQAyNSPI_ZNm9o0AbhBk">
            <!-- <link rel="dns-prefetch" href="//use.typekit.net">
            <link rel="dns-prefetch" href="//cdn.jsdelivr.net">
            <link rel="dns-prefetch" href="//ajax.googleapis.com">
            <link rel="dns-prefetch" href="//s.w.org"> -->
            <!-- <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
            <script type="text/javascript" src="https://use.typekit.net/qup8peu.js"></script> -->
            <!-- <script type="text/javascript">
                try {
                    Typekit.load();
                } catch (e) {}
            </script> -->
            
            {renderMeta.styleTags}

        </head>

        <body>{ children }</body>

    </html>
);
Document.propTypes = {
	Html: any.isRequired,
	Head: any.isRequired,
	Body: any.isRequired,
	children: node.isRequired,
	renderMeta: object.isRequired
};

export default Document;