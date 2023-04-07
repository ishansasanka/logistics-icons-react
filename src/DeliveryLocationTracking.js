import * as React from 'react';
const SvgDeliveryLocationTracking = ({ title, titleId, ...props }) => (
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
    <path d="M126.74 110.851a39.611 39.611 0 1 0 39.612 39.611 39.655 39.655 0 0 0-39.612-39.611Zm0 65.222a25.611 25.611 0 1 1 25.612-25.611 25.339 25.339 0 0 1-25.612 25.611Z" />
    <path d="m477.833 320.876-117.585-93.857a7 7 0 0 0-8.734 0l-117.586 93.857a7 7 0 0 0-.815 10.177l23.464 25.837a6.99 6.99 0 0 0 5.185 2.294 6.9 6.9 0 0 0 4.348-1.538l3.89-3.136v74.7L136.084 303.367l65.647-87.678c14.48-19.692 21.581-42.85 19.986-65.2a99.582 99.582 0 0 0-28.743-63.333 93.383 93.383 0 0 0-132.47 0A99.57 99.57 0 0 0 31.76 150.48c-1.6 22.359 5.5 45.517 20.013 65.258l69.364 92.662c.1.13.206.247.31.369l-.017.019.166.156a6.775 6.775 0 0 0 .742.7L272.258 450.5v-.2a6.806 6.806 0 0 0 4.793 1.7h157.66c3.866 0 7.289-2.738 7.289-6.6v-90.889l3.77 3.135a6.906 6.906 0 0 0 9.486-.756l23.428-25.837a7.005 7.005 0 0 0-.851-10.177ZM63.017 207.4c-12.512-17.015-18.654-36.874-17.291-55.929a85.568 85.568 0 0 1 24.7-54.429 79.384 79.384 0 0 1 112.631 0 85.578 85.578 0 0 1 24.7 54.441c1.36 19.042-4.781 38.9-17.256 55.869l-63.761 85.169ZM428 438H284v-94.7l72-57.544 72 57.544Zm21.243-95.394-88.985-71.288a7 7 0 0 0-8.754 0l-88.986 71.288-14.026-15.443 107.389-85.718 107.388 85.718Z" />
  </svg>
);
export default SvgDeliveryLocationTracking;
