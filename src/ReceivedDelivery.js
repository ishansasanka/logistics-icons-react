import * as React from 'react';
const SvgReceivedDelivery = ({ title, titleId, ...props }) => (
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
    <path d="M407 273.463V135.55a7.03 7.03 0 0 0-3.54-6.083L211.5 18.638a7 7 0 0 0-7 0L12.628 129.415A7 7 0 0 0 9 135.55v240.9a7 7 0 0 0 3.5 6.062l192 110.85a7 7 0 0 0 7 0l103.122-59.53A103 103 0 1 0 407 273.463ZM319.126 96.942 141.141 199.7l-34.931-20.17L284.191 76.772ZM134 211.624v128.309l-13.195-14.878a7.229 7.229 0 0 0-8.076-1.845L99 328.816V191.648Zm74-178.841 62.191 35.906-177.985 102.76-62.186-35.908Zm-7 442.393L23 372.409V147.654l62 35.917V339.28a7.135 7.135 0 0 0 9.821 6.47l18.654-7.691 22.058 25.046a7.01 7.01 0 0 0 5.262 2.375 7.563 7.563 0 0 0 2.574-.451A7.1 7.1 0 0 0 148 358.48V219.707l53 30.714Zm7-236.876-52.859-30.518 177.985-102.757 52.854 30.515Zm7 236.879V250.421l178-102.768v125.81a103.015 103.015 0 0 0-85.413 148.264Zm185-9.956a89 89 0 1 1 89-89 89.32 89.32 0 0 1-89 88.997Z" />
    <path d="M266.865 250.634a7.011 7.011 0 0 0-11.267 1.491l-16.9 31.44a7 7 0 0 0 6.158 10.316 7.185 7.185 0 0 0 6.292-3.687l3.852-6.947v60.173a7 7 0 1 0 14 0v-70.369l5.69 6.155a6.968 6.968 0 1 0 10.09-9.612ZM41 338.45a7 7 0 0 0-7 7v25.92a7 7 0 0 0 14 0v-25.92a7 7 0 0 0-7-7ZM69 357.65a7 7 0 0 0-7 7V388a7 7 0 0 0 14 0v-23.35a7 7 0 0 0-7-7ZM98 376.85a7 7 0 0 0-7 7v20.56a7 7 0 0 0 14 0v-20.56a7 7 0 0 0-7-7ZM126 396.05a7 7 0 0 0-7 7v17.77a7 7 0 0 0 14 0v-17.77a7 7 0 0 0-7-7ZM148 437.61a7 7 0 0 0 14 0v-15.36a7 7 0 0 0-14 0ZM276.16 353.467l-31.89 18.41a7 7 0 1 0 7 12.125l31.89-18.41a7 7 0 1 0-7-12.125ZM440.582 343.62l-61.5 50.035-18.761-21.979a7 7 0 1 0-10.648 9.089l23.2 27.179a7 7 0 0 0 9.742.886l66.8-54.351a7 7 0 1 0-8.836-10.859Z" />
  </svg>
);
export default SvgReceivedDelivery;
