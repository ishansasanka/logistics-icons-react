import * as React from 'react';
const SvgECommerce = ({ title, titleId, ...props }) => (
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
    <path d="M266.865 250.634a7.01 7.01 0 0 0-11.267 1.492l-16.9 31.44a7 7 0 0 0 6.158 10.315 7.183 7.183 0 0 0 6.292-3.687l3.852-6.946v60.172a7 7 0 1 0 14 0v-70.369l5.69 6.155a6.929 6.929 0 0 0 9.836.284 7 7 0 0 0 .254-9.9ZM41 338.45a7 7 0 0 0-7 7v25.92a7 7 0 0 0 14 0v-25.92a7 7 0 0 0-7-7ZM69 357.65a7 7 0 0 0-7 7V388a7 7 0 0 0 14 0v-23.35a7 7 0 0 0-7-7ZM98 376.85a7 7 0 0 0-7 7v20.56a7 7 0 0 0 14 0v-20.56a7 7 0 0 0-7-7ZM126 396.05a7 7 0 0 0-7 7v17.77a7 7 0 0 0 14 0v-17.77a7 7 0 0 0-7-7ZM148 437.61a7 7 0 0 0 14 0v-15.36a7 7 0 0 0-14 0ZM276.16 353.467l-31.89 18.41a7 7 0 1 0 7 12.125l31.89-18.41a7 7 0 1 0-7-12.125Z" />
    <path d="M500 284h-21.35a24.777 24.777 0 0 0-24.45 21.027c-.009.057-.017.387-.025.444L452.938 315H407V135.55a7.03 7.03 0 0 0-3.535-6.081L211.5 18.638a7 7 0 0 0-7 0L12.617 129.422A7 7 0 0 0 9 135.55v240.9a7 7 0 0 0 3.5 6.062l192 110.85a7 7 0 0 0 3.5.938 6.91 6.91 0 0 0 3.5-.853L376.965 398h64.876l-4.557 34.088A10.64 10.64 0 0 1 426.66 441h-.882a19.289 19.289 0 0 0-35.257 0h-25.132a18.915 18.915 0 0 0-17.629-11.455 19.3 19.3 0 0 0 0 38.609A18.867 18.867 0 0 0 366.045 455h23.82a19.288 19.288 0 0 0 36.57 0h.225a24.651 24.651 0 0 0 24.463-20.877c.01-.058.018-.113.025-.171l16.888-126.8A10.84 10.84 0 0 1 478.65 298H500a7 7 0 0 0 0-14ZM347.76 454.16a5.305 5.305 0 1 1 5.31-5.31 5.311 5.311 0 0 1-5.31 5.31Zm60.39 0a5.305 5.305 0 1 1 5.31-5.31 5.316 5.316 0 0 1-5.31 5.31ZM319.126 96.942 141.141 199.7l-34.931-20.17L284.191 76.772ZM134 211.624v128.309l-13.195-14.878a7.228 7.228 0 0 0-8.076-1.845L99 328.816V191.648Zm74-178.841 62.191 35.906L92.205 171.45l-62.186-35.909Zm-7 442.392L23 372.409V147.654l62 35.917V339.28a7.136 7.136 0 0 0 9.822 6.47l18.653-7.691 22.057 25.046a7.015 7.015 0 0 0 5.263 2.375 7.559 7.559 0 0 0 2.574-.451A7.1 7.1 0 0 0 148 358.48V219.707l53 30.714Zm7-236.875-52.859-30.518 177.985-102.757 52.854 30.515Zm7 236.878V250.421l178-102.768V315h-93a6.73 6.73 0 0 0-6.614 8.993l19.849 57.313A24.81 24.81 0 0 0 336.63 398h12.336ZM443.708 384H336.63a10.7 10.7 0 0 1-10.166-7.171l-.312-.829h118.641Zm2.952-22H321.3l-2.079-6h128.238Zm2.666-20H314.371l-4.536-13h141.236Z" />
  </svg>
);
export default SvgECommerce;