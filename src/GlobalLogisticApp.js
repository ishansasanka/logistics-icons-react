import * as React from 'react';
const SvgGlobalLogisticApp = ({ title, titleId, ...props }) => (
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
    <path d="M248.1 481.266a200.053 200.053 0 0 0 138.268-54.809c36.321-34.415 57.672-80.288 60.422-129.527A38.241 38.241 0 0 0 463 265.667V69.019A38.1 38.1 0 0 0 424.715 31H330.86A37.74 37.74 0 0 0 293 69.019v26.8a208.762 208.762 0 0 0-44.746-4.933c-109.752 0-199.148 87.563-199.148 195.192S138.343 481.266 248.1 481.266ZM376.707 416.3a185.341 185.341 0 0 1-92.52 47.518 182.02 182.02 0 0 0 50.243-56.5 206.677 206.677 0 0 0 11.076-22.376 181.614 181.614 0 0 1 34.93 27.712 197.721 197.721 0 0 1-3.729 3.646Zm13.245-13.934a195.557 195.557 0 0 0-39.326-30.641A251.936 251.936 0 0 0 364.073 304h60.642a38.347 38.347 0 0 0 7.542-.774 177.849 177.849 0 0 1-42.305 99.135ZM449 265.667A24.354 24.354 0 0 1 424.715 290H330.86A23.994 23.994 0 0 1 307 265.667V241h142ZM449 227H307V81h142ZM330.86 45h93.855c12.878 0 23.442 10 24.232 22H306.628c.79-12 11.354-22 24.232-22ZM293 110.176v4.633c-3-2.229-5.449-4.375-8.268-6.431 2.768.538 5.268 1.135 8.268 1.798Zm-38-3.432c14 7.059 26 16.052 38 26.808v75.623a199.231 199.231 0 0 1-38 5.131Zm0 121.577a213.588 213.588 0 0 0 38-4.787v42.133A36.9 36.9 0 0 0 295 279h-40ZM255 293h49.167a37.1 37.1 0 0 0 26.693 11h19.193a243.479 243.479 0 0 1-11.889 60.931A202.594 202.594 0 0 0 255 343.841Zm0 64.85a185.79 185.79 0 0 1 78.2 20.217 193.383 193.383 0 0 1-10.936 22.266C305.663 429.18 283 451.041 255 465.405ZM115.228 412.1a180.733 180.733 0 0 1 35.072-27.5c13.739 32.489 34.625 59.589 61.454 79.158a186.049 186.049 0 0 1-96.526-51.658ZM241 465.4c-35-18.162-62.253-48.757-78.371-87.617A188.648 188.648 0 0 1 241 357.847Zm0-121.559a205.355 205.355 0 0 0-83.289 20.738C150.35 342.761 146.184 319 145.54 293H241ZM241 279h-95.46c.644-26 4.81-49.687 12.171-71.5A205.432 205.432 0 0 0 241 228.31Zm0-64.7a188.648 188.648 0 0 1-78.371-19.933C178.747 155.508 206 124.913 241 106.751Zm-29.241-105.911c-26.83 19.569-47.716 46.669-61.455 79.158a180.733 180.733 0 0 1-35.076-27.5 186.048 186.048 0 0 1 96.531-51.658Zm-106 61.941a194.791 194.791 0 0 0 39.441 30.408C136.893 224.56 132.2 251 131.532 279H63.151a178.666 178.666 0 0 1 42.604-108.67ZM63.151 293h68.381c.668 28 5.361 54.5 13.667 78.317a194.8 194.8 0 0 0-39.443 30.409A178.818 178.818 0 0 1 63.151 293Z" />
    <path d="M363.318 273h28.939a7 7 0 1 0 0-14h-28.939a7 7 0 0 0 0 14ZM324.4 185.983l49.946 28.868a6.926 6.926 0 0 0 6.961 0l50.1-28.868a7.094 7.094 0 0 0 3.6-6.062v-57.734a7.1 7.1 0 0 0-3.605-6.062l-50.061-28.868a7.048 7.048 0 0 0-7.027 0l-49.907 28.868a6.913 6.913 0 0 0-3.407 6.062v57.734a6.9 6.9 0 0 0 3.4 6.062ZM421 175.88l-36 20.785v-41.573l36-20.785Zm-7.215-53.695-36 20.782-11.485-6.634 36-20.783Zm-36-20.783 10.506 6.066-36 20.782-10.506-6.065ZM335 134.307l36 20.785v41.573l-36-20.785Z" />
  </svg>
);
export default SvgGlobalLogisticApp;