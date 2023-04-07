import * as React from 'react';
const SvgLogisticsAssistance = ({ title, titleId, ...props }) => (
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
    <path d="M257 484h220c3.866 0 7-3.586 7-7.452v-68.726c0-.194-.008-.387-.024-.581a50.236 50.236 0 0 0-27.435-40.522c-.245-.123-.267-.231-.524-.323L424 354.759v-11.45a7.319 7.319 0 0 0-4.654-6.467s-.346 0-.346 0l-18-7.442v-.943a87.273 87.273 0 0 0 53.084-75.333 27.608 27.608 0 0 0 16.31-32 22.2 22.2 0 0 0-12.777-15.235l1.079-7.5c.024-.17.044-.34.056-.511a92.028 92.028 0 0 0-115.671-95.367c-6.645 1.784-12.518 4.642-18.2 7.406q-1.5.729-3.01 1.457a7 7 0 0 0-3.977 6.314 18.87 18.87 0 0 1-8.443 15.749L286.5 148.69a7 7 0 0 0-2.154 2.257l-1.365 2.289a7.34 7.34 0 0 0-.377.726 92.343 92.343 0 0 0-7.758 43.91q.018.267.057.531l1.088 7.447a22.2 22.2 0 0 0-12.859 15.269 27.51 27.51 0 0 0 12.2 29.916 28.4 28.4 0 0 0 4.12 1.854A87.806 87.806 0 0 0 333 328.662v.624l-18.17 7.468.012.073c-.014.006-.268.009-.282.015a7.225 7.225 0 0 0-4.56 6.467v11.45L277.983 366.4a5.172 5.172 0 0 0-.639.323 50.171 50.171 0 0 0-27.377 40.522c-.016.194.033.387.033.581v68.726c0 3.862 3.134 7.448 7 7.448Zm163.081-115.606 30.549 11.024A36.161 36.161 0 0 1 470 408.127V470h-96v-7.363a8.651 8.651 0 1 0 0-5.86v-28a8.652 8.652 0 1 0 0-5.861v-16.988l13.887 9.259a7 7 0 0 0 10.144-2.694Zm-53.116 14.555L347 362.879V333.2a86.292 86.292 0 0 0 40-.106v29.712Zm9.816 76.758a5.349 5.349 0 1 1 5.349 5.349 5.355 5.355 0 0 1-5.349-5.349Zm0-33.855a5.349 5.349 0 1 1 5.349 5.348 5.354 5.354 0 0 1-5.349-5.348Zm12.274-26.712-11.068-7.379 29.513-29.515Zm14.97-53.357L401 348.809v-4.272ZM317.2 145.091a32.833 32.833 0 0 0 14.381-22.871c5.11-2.486 9.967-4.809 15.127-6.194a78.125 78.125 0 0 1 98.092 80.632l-1.557 10.874-.861 1.066a.832.832 0 0 1-1.052.3.871.871 0 0 1-.631-.938 31.988 31.988 0 0 0-31.91-31.96h-48.216a6.542 6.542 0 0 1-6.573-6.529 21.617 21.617 0 0 0-21.354-21.544l-19.454-.181Zm-22.642 16.482 12.911.128a53.859 53.859 0 0 0-12.187 30.26 13.075 13.075 0 0 1-5.763 9.7l-.733-5.015a78.388 78.388 0 0 1 5.776-35.073ZM293 247.984v-.122a6.881 6.881 0 0 0-5.8-6.92c-1.222-.426-3.844-1.52-4.8-1.955a13.551 13.551 0 0 1-5.7-14.538 8.446 8.446 0 0 1 7.666-6.449 7 7 0 0 0 2.709-.825c11.564-1.55 21.023-11.51 22.151-23.951 1.169-12.883 6.617-22.362 18.075-31.328l5.206.051a7.553 7.553 0 0 1 7.493 7.524A20.559 20.559 0 0 0 360.573 190h48.216a17.972 17.972 0 0 1 17.911 17.958 14.957 14.957 0 0 0 25.346 10.776 8.174 8.174 0 0 1 4.764 5.71 13.493 13.493 0 0 1-10.883 16.517 7.137 7.137 0 0 0-5.93 6.894v.129a73.5 73.5 0 1 1-147 0Zm40 96.442v4.453l-3.154-3.154Zm23.013 47.335-11.068 7.379-18.445-36.894ZM264 408.127a36.161 36.161 0 0 1 19.37-28.709l30.549-11.024 22.05 44.1a7 7 0 0 0 10.144 2.694l13.887-9.26V470h-96ZM143.5 33.938a7 7 0 0 0-7 0l-100 57.735a7 7 0 0 0-3.5 6.062v115.47a7 7 0 0 0 3.5 6.063L136.5 277a7.005 7.005 0 0 0 7 0l100-57.735a7 7 0 0 0 3.5-6.063V97.735a7 7 0 0 0-3.5-6.062ZM140 48.083 175.012 68.3l-85.993 49.645-35.012-20.214Zm-7 210.733-86-49.652v-99.312l86 49.648Zm7-111.437-36.98-21.351 85.992-49.648 36.981 21.351Zm93 61.785-86 49.652V159.5l86-49.652Z" />
  </svg>
);
export default SvgLogisticsAssistance;
