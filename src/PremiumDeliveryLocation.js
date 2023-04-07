import * as React from 'react';
const SvgPremiumDeliveryLocation = ({ title, titleId, ...props }) => (
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
    <path d="m146.731 304.688-12.407 11.042a41.617 41.617 0 0 1-14.359 8.339l-6.636-21.938a7.158 7.158 0 0 0-6.695-5.131h-60a7.277 7.277 0 0 0-6.949 8.105l20 163.871A6.888 6.888 0 0 0 66.634 475h90a6.761 6.761 0 0 0 6.7-8.784l-11.514-37.723 35.876-22.658a20.75 20.75 0 0 1 15.1-1.928c.145.036.291.073.438.1l74.908 13.8a98.35 98.35 0 0 0 60.777-8.579 7.046 7.046 0 0 0 .856-.5l129.557-88.955a7 7 0 0 0 2.035-9.38 36.971 36.971 0 0 0-49.3-13.484l-1.206.651c-9.431-10.648-25.1-14.622-37.121-8.529l-.156.081-4.376 2.358a41 41 0 0 0-46.191-3.594L305.272 303h-37a52.579 52.579 0 0 1-22.742-5.256l-5.138-2.507a89.564 89.564 0 0 0-93.215 9.092 6.667 6.667 0 0 0-.446.359ZM72.832 461 54.539 311h46.911l45.731 150Zm317.3-159.522c5.679-2.834 12.7-.927 17.743 3.078l-47.323 25.531-1.465.772a44.009 44.009 0 0 0-5.364-9.763Zm-50.353-1.4c.056-.031.111-.061.166-.094a26.989 26.989 0 0 1 25.212-.956l-21.9 11.8a43.9 43.9 0 0 0-12.24-5.985Zm-105.479 7.74 5.138 2.53A66.67 66.67 0 0 0 268.272 317H318.1a30.061 30.061 0 0 1 29.134 22.639l-34.274-1.573a217.538 217.538 0 0 0-39.562 1.815 7 7 0 1 0 1.919 13.86 203.5 203.5 0 0 1 37.01-1.711l42.5 1.923c.106.005.211.007.317.007a7 7 0 0 0 7-7c0-.625-.021-1.244-.047-1.863l5.04-2.657 61.57-33.216a22.993 22.993 0 0 1 26.482 3.267l-122.928 84.4a84.242 84.242 0 0 1-51.611 7.14l-74.68-13.751a34.711 34.711 0 0 0-25.27 3.439c-.11.061-.218.126-.324.193l-32.8 20.735-23.53-77.179a55.656 55.656 0 0 0 19.582-11.286l12.186-10.851a75.619 75.619 0 0 1 78.486-7.513Z" />
    <path d="M87.918 439.648a19 19 0 1 0 19-19 19.022 19.022 0 0 0-19 19Zm19-5a5 5 0 1 1-5 5 5.006 5.006 0 0 1 5-5ZM257.958 139.117a7 7 0 0 0 9.742.883l43.108-35.071a7 7 0 0 0-8.835-10.86l-37.806 30.758-10.537-12.337a7 7 0 1 0-10.646 9.091Z" />
    <path d="M273.329 275.34a7 7 0 0 0 10.11 0l74.243-77.5c11.6-12.109 20.152-25.417 25.417-39.556a106.1 106.1 0 0 0 6.656-44.5A113.431 113.431 0 0 0 356.04 40.6a111.214 111.214 0 0 0-155.312 0 113.428 113.428 0 0 0-33.715 73.19 106.1 106.1 0 0 0 6.656 44.5c5.264 14.139 13.816 27.447 25.416 39.557ZM180.98 114.745a99.442 99.442 0 0 1 29.565-64.161 97.212 97.212 0 0 1 135.678 0 99.442 99.442 0 0 1 29.565 64.161 92.215 92.215 0 0 1-5.809 38.658c-4.595 12.34-12.133 24.034-22.406 34.756l-69.189 72.22-69.184-72.22c-10.273-10.722-17.811-22.416-22.406-34.756a92.2 92.2 0 0 1-5.814-38.658Z" />
    <path d="M278.384 188.8c41.536 0 75.327-33.984 75.327-75.756s-33.791-75.762-75.327-75.762-75.328 33.985-75.328 75.757 33.792 75.761 75.328 75.761Zm0-137.513c33.816 0 61.327 27.7 61.327 61.757S312.2 174.8 278.384 174.8s-61.328-27.7-61.328-61.756 27.512-61.762 61.328-61.762Z" />
  </svg>
);
export default SvgPremiumDeliveryLocation;