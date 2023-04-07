import * as React from 'react';
const SvgUserParcel = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#040b00"
    data-name="Layer 1"
    viewBox="0 0 512 512"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M407 273.463V135.55a7.03 7.03 0 0 0-3.535-6.081L211.5 18.638a7 7 0 0 0-7 0L12.617 129.422A7 7 0 0 0 9 135.55v240.9a7 7 0 0 0 3.5 6.062l192 110.85a7 7 0 0 0 7 0l103.126-59.532a102.994 102.994 0 0 0 139.484 30.034A103 103 0 0 0 407 273.463ZM319.126 96.942 141.141 199.7l-34.931-20.17L284.191 76.772ZM134 211.624v128.309l-13.195-14.878a7.228 7.228 0 0 0-8.076-1.845L99 328.816V191.648Zm74-178.841 62.191 35.906L92.205 171.45l-62.186-35.909Zm-7 442.393L23 372.409V147.654l62 35.917V339.28a7.135 7.135 0 0 0 9.822 6.47l18.653-7.691 22.057 25.046a7.016 7.016 0 0 0 5.264 2.375 7.552 7.552 0 0 0 2.572-.451A7.1 7.1 0 0 0 148 358.48V219.707l53 30.714Zm7-236.876-52.859-30.518 177.986-102.757 52.853 30.515Zm7 236.879V250.421l178-102.768v125.81a103.013 103.013 0 0 0-85.412 148.264Zm185-9.956a88.706 88.706 0 0 1-42.883-11.023 42.988 42.988 0 0 1 85.766 0A88.7 88.7 0 0 1 400 465.22Zm55.8-19.657a57 57 0 0 0-111.592-.011A89 89 0 1 1 489 376.22a88.382 88.382 0 0 1-33.2 69.343Z" />
    <path d="M266.864 250.634a7.009 7.009 0 0 0-11.266 1.492l-16.9 31.44a7 7 0 0 0 6.158 10.315 7.183 7.183 0 0 0 6.292-3.687l3.852-6.946v60.172a7 7 0 1 0 14 0v-70.369l5.69 6.155a6.928 6.928 0 0 0 9.835.284 7 7 0 0 0 .255-9.9ZM41 338.45a7 7 0 0 0-7 7v25.92a7 7 0 0 0 14 0v-25.92a7 7 0 0 0-7-7ZM69 357.65a7 7 0 0 0-7 7V388a7 7 0 0 0 14 0v-23.35a7 7 0 0 0-7-7ZM98 376.85a7 7 0 0 0-7 7v20.56a7 7 0 0 0 14 0v-20.56a7 7 0 0 0-7-7ZM126 396.05a7 7 0 0 0-7 7v17.77a7 7 0 0 0 14 0v-17.77a7 7 0 0 0-7-7ZM148 437.61a7 7 0 0 0 14 0v-15.36a7 7 0 0 0-14 0ZM276.16 353.467l-31.89 18.41a7 7 0 1 0 7 12.125l31.89-18.41a7 7 0 1 0-7-12.125ZM400 311.47a38.25 38.25 0 1 0 38.25 38.25A38.293 38.293 0 0 0 400 311.47Zm0 62.5a24.25 24.25 0 1 1 24.25-24.25A24.277 24.277 0 0 1 400 373.97Z" />
  </svg>
);
export default SvgUserParcel;