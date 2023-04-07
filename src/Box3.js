import * as React from 'react';
const SvgBox3 = ({ title, titleId, ...props }) => (
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
    <path d="M459.5 134.468 259.5 19a7 7 0 0 0-7 0l-200 115.468a7 7 0 0 0-3.5 6.062v230.94a7 7 0 0 0 3.5 6.062L252.5 493a7.005 7.005 0 0 0 7 0l200-115.471a7 7 0 0 0 3.5-6.062V140.53a7 7 0 0 0-3.5-6.062Zm-87.155-34.154-185.986 107.38-36.981-21.351L335.365 78.964ZM179 219.611V334.2l-14.155-16.079a7.291 7.291 0 0 0-8.116-1.845L142 322.285V198.468Zm77-186.468 65.364 37.738L135.378 178.26l-65.364-37.738Zm-7 441.673L63 367.429V152.638l65 37.747V332.75a7.259 7.259 0 0 0 9.956 6.47l19.637-8.091 23.129 26.246A7.015 7.015 0 0 0 193 352.75V227.694l56 32.332Zm7-226.916-55.641-32.124L386.345 108.4l55.641 32.124Zm193 119.529L263 474.816v-214.79l186-107.388Z" />
  </svg>
);
export default SvgBox3;