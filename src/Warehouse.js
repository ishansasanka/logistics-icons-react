import * as React from 'react';
const SvgWarehouse = ({ title, titleId, ...props }) => (
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
    <path d="M500.073 212.666 260.4 41.188a7 7 0 0 0-8.139 0L11.935 212.661a7 7 0 0 0 4.071 12.7 7.237 7.237 0 0 0 4.146-1.3L59 196.4v268.718A6.753 6.753 0 0 0 65.825 472h380.35a6.753 6.753 0 0 0 6.825-6.882v-268.79l38.84 27.725a7.026 7.026 0 0 0 8.233-11.387ZM402 458H110v-26h292Zm0-40H110v-25h292Zm0-39H110v-24h292Zm0-38H110v-25h292Zm0-39H110v-24h292Zm0-38H110v-25h292Zm0-39H110v-28h292Zm37 233h-23V189.938a6.726 6.726 0 0 0-6.736-6.938H102.736A6.726 6.726 0 0 0 96 189.938V458H73V186.412L256.315 55.485 439 186.312Z" />
  </svg>
);
export default SvgWarehouse;
