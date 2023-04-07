import * as React from 'react';
const SvgPackage1 = ({ title, titleId, ...props }) => (
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
    <path d="M459.5 134.468 259.5 19a7 7 0 0 0-7 0l-200 115.468a7 7 0 0 0-3.5 6.062v230.94a7 7 0 0 0 3.5 6.062L252.5 493a7.005 7.005 0 0 0 7 0l200-115.471a7 7 0 0 0 3.5-6.062V140.53a7 7 0 0 0-3.5-6.062ZM256 33.143l84.024 48.511-185.986 107.379-84.024-48.511Zm-7 441.673L63 367.429V152.638l186 107.388Zm7-226.916-87.961-50.785L354.025 89.737l87.961 50.785Zm193 119.529L263 474.816v-214.79l186-107.388Z" />
  </svg>
);
export default SvgPackage1;
