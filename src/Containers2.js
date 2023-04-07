import * as React from 'react';
const SvgContainers2 = ({ title, titleId, ...props }) => (
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
    <path d="M456 85H56a7.267 7.267 0 0 0-7 7.306v40A6.745 6.745 0 0 0 56 139h17v234H56a6.745 6.745 0 0 0-7 6.694v40A7.267 7.267 0 0 0 56 427h400a7.267 7.267 0 0 0 7-7.306v-40a6.745 6.745 0 0 0-7-6.694h-17V139h17a6.745 6.745 0 0 0 7-6.694v-40A7.267 7.267 0 0 0 456 85Zm-7 302v26H63v-26ZM202 260.078a7 7 0 0 0 7-7V139h104v114.078a7 7 0 0 0 14 0V139h98v234h-48V259.078a7 7 0 0 0-14 0V373h-95.781l.754-113.761a7.152 7.152 0 0 0-6.954-7.239h-.047a7.167 7.167 0 0 0-7 7.145L253.219 373H148.6l.754-113.761A7.152 7.152 0 0 0 142.4 252h-.047a7.167 7.167 0 0 0-7 7.145L134.6 373H87V139h108v114.078a7 7 0 0 0 7 7ZM449 125H63V99h386Z" />
  </svg>
);
export default SvgContainers2;
