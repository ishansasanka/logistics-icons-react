import * as React from 'react';
const SvgDeliveryLocationMap = ({ title, titleId, ...props }) => (
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
    <path d="M266.865 250.634a7.011 7.011 0 0 0-11.267 1.491l-16.9 31.44a7 7 0 0 0 6.158 10.316 7.185 7.185 0 0 0 6.292-3.687l3.852-6.947v60.173a7 7 0 1 0 14 0v-70.369l5.69 6.155a6.929 6.929 0 0 0 9.836.284 7 7 0 0 0 .254-9.9ZM41 338.45a7 7 0 0 0-7 7v25.92a7 7 0 0 0 14 0v-25.92a7 7 0 0 0-7-7ZM69 357.65a7 7 0 0 0-7 7V388a7 7 0 0 0 14 0v-23.35a7 7 0 0 0-7-7ZM98 376.85a7 7 0 0 0-7 7v20.56a7 7 0 0 0 14 0v-20.56a7 7 0 0 0-7-7ZM126 396.05a7 7 0 0 0-7 7v17.77a7 7 0 0 0 14 0v-17.77a7 7 0 0 0-7-7ZM148 437.61a7 7 0 0 0 14 0v-15.36a7 7 0 0 0-14 0ZM276.16 353.467l-31.89 18.41a7 7 0 1 0 7 12.125l31.89-18.41a7 7 0 1 0-7-12.125Z" />
    <path d="M464.021 297.883A90.474 90.474 0 0 0 407 272.117V135.55a7.03 7.03 0 0 0-3.54-6.083L211.5 18.638a7 7 0 0 0-7 0L12.628 129.415A7 7 0 0 0 9 135.55v240.9a7 7 0 0 0 3.5 6.062l192 110.85a7 7 0 0 0 7 0l120-69.273a107.221 107.221 0 0 0 3.12 3.4l60.33 62.97a7 7 0 0 0 10.11 0l60.331-62.971a95.4 95.4 0 0 0 20.93-32.588 87.585 87.585 0 0 0 5.479-36.7 93.49 93.49 0 0 0-27.779-60.317ZM319.126 96.942 141.141 199.7l-34.931-20.17L284.191 76.772ZM134 211.624v128.309l-13.195-14.878a7.229 7.229 0 0 0-8.076-1.845L99 328.816V191.648Zm74-178.841 62.191 35.906L92.205 171.45 30.02 135.541Zm-7 442.392L23 372.409V147.654l62 35.917V339.28a7.135 7.135 0 0 0 9.821 6.47l18.654-7.691 22.058 25.046a7.01 7.01 0 0 0 5.262 2.375 7.553 7.553 0 0 0 2.573-.451A7.094 7.094 0 0 0 148 358.48V219.707l53 30.714Zm7-236.875-52.859-30.518 177.985-102.757 52.854 30.515Zm7 236.879V250.421l178-102.768v124.464a90.474 90.474 0 0 0-57.021 25.766A93.49 93.49 0 0 0 308.2 358.2a87.585 87.585 0 0 0 5.485 36.7 88.952 88.952 0 0 0 9.223 17.98Zm258.2-85.158a81.52 81.52 0 0 1-17.925 27.789L400 475.5l-55.277-57.695a91.7 91.7 0 0 1-6.113-7.043 77.85 77.85 0 0 1-11.81-20.741 73.678 73.678 0 0 1-4.637-30.864 79.489 79.489 0 0 1 23.637-51.292 77.686 77.686 0 0 1 108.408 0 79.489 79.489 0 0 1 23.632 51.293 73.67 73.67 0 0 1-4.64 30.86Z" />
    <path d="M400 294.81c-34.474 0-62.52 28.2-62.52 62.87s28.046 62.87 62.52 62.87 62.52-28.2 62.52-62.87-28.046-62.87-62.52-62.87Zm0 111.74a48.871 48.871 0 1 1 48.52-48.87A48.751 48.751 0 0 1 400 406.55Z" />
  </svg>
);
export default SvgDeliveryLocationMap;