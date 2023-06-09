import * as React from 'react';
const SvgLogisticWebsite = ({ title, titleId, ...props }) => (
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
    <path d="M475 332.923V95.246C475 75.26 458.428 59 438.441 59H73.559C53.572 59 37 75.26 37 95.246v237.677C37 352.909 53.572 369 73.559 369H193v70h-26.889a7 7 0 0 0 0 14h185.041a7 7 0 1 0 0-14H319v-70h119.441C458.428 369 475 352.909 475 332.923ZM51 95.246A22.54 22.54 0 0 1 73.559 73h364.882A22.54 22.54 0 0 1 461 95.246V299H51ZM305 439h-98v-70h98ZM73.559 355C61.292 355 51 345.19 51 332.923V313h410v19.923C461 345.19 450.708 355 438.441 355Z" />
    <path d="m329.5 140.977-70-40.415a7 7 0 0 0-7 0l-70 40.415a7 7 0 0 0-3.5 6.062v80.829a7 7 0 0 0 3.5 6.063l70 40.414a7.005 7.005 0 0 0 7 0l70-40.414a7 7 0 0 0 3.5-6.063v-80.829a7 7 0 0 0-3.5-6.062Zm-73.5-26.27 20.309 11.725-56 32.329L200 147.036Zm-7 141.451-56-32.331v-64.669l56 32.332Zm7-76.793-21.686-12.52 56-32.329L312 147.036Zm63 44.462-56 32.331V191.49l56-32.332Z" />
  </svg>
);
export default SvgLogisticWebsite;
