import * as React from 'react';
const SvgParcelDocument2 = ({ title, titleId, ...props }) => (
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
    <path d="M61.081 485.131a19.5 19.5 0 1 0-19.1-19.5 19.324 19.324 0 0 0 19.1 19.5Zm0-25a5.516 5.516 0 1 1-5.1 5.5 5.316 5.316 0 0 1 5.1-5.5ZM333.682 253H223a7 7 0 0 0 0 14h110.682a7 7 0 0 0 0-14ZM285.956 288H223a7 7 0 0 0 0 14h62.958a7 7 0 0 0 0-14Z" />
    <path d="M415.344 233.184a79.075 79.075 0 0 0-11.344.851V99.867a7.115 7.115 0 0 0-2.168-4.95L315.613 8.9A7.007 7.007 0 0 0 310.6 7h-128A28.37 28.37 0 0 0 154 35.247v135.626l-96.533 77.032c-.221.177-.224.366-.421.567A38.835 38.835 0 0 0 46 275.983V424H36c-9.374 0-17 7.982-17 17.356v46.937A16.771 16.771 0 0 0 36 505h153.391A16.44 16.44 0 0 0 206 488.293v-46.937c0-9.374-7.235-17.356-16.609-17.356H185v-9.671c19-3.311 33-19.376 33-38.634V343h126.2a77.862 77.862 0 1 0 71.149-109.816ZM318 30.606 379.864 93h-47.72C324.126 93 318 86.344 318 78.327ZM189 438a3 3 0 0 1 3 3v47a3 3 0 0 1-3 3H36a3 3 0 0 1-3-3v-47a3 3 0 0 1 3-3Zm15-62.3c0 13.928-11.7 25.259-25.629 25.259a7.325 7.325 0 0 0-7.371 7V424H60V275.983a24.9 24.9 0 0 1 6.742-17.414L154 188.782v56.607l-60.74 48.116a7.007 7.007 0 0 0 8.713 10.975l72.589-57.474 1.3 1.294a17.192 17.192 0 0 1 0 24.316l-34.214 34.216a7.005 7.005 0 0 0-2.039 4.544l-.432 7.461q-.012.2-.012.405a39.079 39.079 0 0 0 3.858 16.7 36.824 36.824 0 0 1-2.763 35.87A7.074 7.074 0 0 0 139 375.7v16.129a7 7 0 1 0 14 0v-14.1a50.076 50.076 0 0 0 2.611-47.737 25.207 25.207 0 0 1-2.488-10.558l.286-4.585.642-.418A28.76 28.76 0 0 0 182.6 343H204ZM339.489 329H182.6c-8.022 0-14.6-6.948-14.6-14.965v-13.814l17.732-17.7a31.186 31.186 0 0 0 .022-44.115l-5.7-5.7a7.036 7.036 0 0 0-9.322-.538L168 234.3V35.247A14.356 14.356 0 0 1 182.6 21H304v57.327C304 94.063 316.406 107 332.144 107H390v130.464a78.353 78.353 0 0 0-52.43 73.706 81.711 81.711 0 0 0 1.919 17.83Zm75.737 45.731A63.774 63.774 0 1 1 479 310.958a63.846 63.846 0 0 1-63.774 63.773Z" />
    <path d="M415.226 283.04a10.274 10.274 0 0 1 10.262 10.26 7 7 0 0 0 7 7 6.9 6.9 0 0 0 6.887-7A24.374 24.374 0 0 0 422 270.073v-3.518a7 7 0 0 0-14 0v3.518a24.281 24.281 0 0 0 7.169 47.492 10.26 10.26 0 0 1 .169 20.519c-.043 0-.077-.006-.119-.006s-.08.005-.123.006a10.269 10.269 0 0 1-10.135-10.256 7 7 0 0 0-7-7 7.1 7.1 0 0 0-7.112 7A24.174 24.174 0 0 0 408 351.057v4.3a7 7 0 0 0 14 0v-4.3a24.243 24.243 0 0 0-6.831-47.492 10.263 10.263 0 0 1 .057-20.525ZM348.909 122h-140c-3.866 0-6.909 3.5-6.909 7.365v32.7a6.871 6.871 0 0 0 6.909 6.935H215v60.917a6.847 6.847 0 0 0 6.731 7.083h114.547a6.839 6.839 0 0 0 6.722-7.083V169h5.909a7.027 7.027 0 0 0 7.091-6.939v-32.7a7.4 7.4 0 0 0-7.091-7.361ZM329 223H229v-54h25v27.421a7.313 7.313 0 0 0 11 5.987l13.764-8.3 14.164 8.344a7.047 7.047 0 0 0 3.574.972 7.953 7.953 0 0 0 3.721-.921 7.244 7.244 0 0 0 3.777-6.082V169h25Zm-61-39v-15h22v15.16l-7.423-4.239a7.682 7.682 0 0 0-7.555.041Zm74-29H216v-19h126Z" />
  </svg>
);
export default SvgParcelDocument2;