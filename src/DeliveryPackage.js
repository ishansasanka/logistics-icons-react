import * as React from 'react';
const SvgDeliveryPackage = ({ title, titleId, ...props }) => (
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
    <path d="m459.454 134.443-69.776-40.2-3.678 6.076v-.019l3.667-6.053L259.414 19a6.917 6.917 0 0 0-6.957 0L52.609 134.394A6.981 6.981 0 0 0 49 140.53v230.94a7 7 0 0 0 3.5 6.062L252.5 493a7 7 0 0 0 7 0l200-115.47a7 7 0 0 0 3.5-6.062V140.53a7.032 7.032 0 0 0-3.546-6.087ZM372.34 100.31 186.357 207.688l-36.976-21.348L335.362 78.962ZM179 219.606v114.6l-14.156-16.08a7.293 7.293 0 0 0-8.116-1.845L142 322.285V198.464Zm77-186.463 65.362 37.736-185.981 107.378L70.02 140.52Zm-7 441.672L63 367.429v-214.8l65 37.747V332.75a7.26 7.26 0 0 0 9.957 6.47l19.636-8.091 23.129 26.246A7.015 7.015 0 0 0 193 352.75V227.689l56 32.332Zm7-226.915-55.642-32.126L386.344 108.39l55.637 32.13Zm193 119.529L263 474.815V260.021l186-107.388Z" />
    <path d="M291.076 304.335a7 7 0 0 0 9.48-2.851l4.444-8.268v43.844a7 7 0 0 0 14 0v-54.035l6.559 6.95a7 7 0 1 0 10.181-9.61l-18.649-19.76a7 7 0 0 0-11.257 1.491l-17.61 32.759a7 7 0 0 0 2.852 9.48ZM340.312 270.634a7.044 7.044 0 0 0 9.593-2.6l5.1-8.828v52.024a7 7 0 0 0 14 0v-59.261l6 6.4a6.989 6.989 0 1 0 10.148-9.612L366.494 229a7 7 0 0 0-11.167 1.328l-17.611 30.75a7 7 0 0 0 2.596 9.556ZM82 332.17a7 7 0 0 0-7 7v27a7 7 0 0 0 14 0v-27a7 7 0 0 0-7-7ZM111 352.17a7 7 0 0 0-7 7v24.33a7 7 0 0 0 14 0v-24.33a7 7 0 0 0-7-7ZM141 372.17a7 7 0 0 0-7 7v21.42a7 7 0 0 0 14 0v-21.42a7 7 0 0 0-7-7ZM171 392.17a7 7 0 0 0-7 7v18.52a7 7 0 1 0 14 0v-18.52a7 7 0 0 0-7-7ZM193 435.17a7 7 0 1 0 14 0v-16a7 7 0 0 0-14 0ZM345.331 337.277a7 7 0 1 0 7 12.126l40.86-23.58a7 7 0 1 0-7-12.126ZM327.15 347.778l-33.22 19.18a7 7 0 1 0 7 12.124l33.22-19.18a7 7 0 1 0-7-12.124Z" />
  </svg>
);
export default SvgDeliveryPackage;