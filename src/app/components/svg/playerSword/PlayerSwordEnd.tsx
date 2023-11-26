import React from 'react';

const PlayerSwordEnd = ({ finisherRef }: { finisherRef: any }) => {
  return (
      <svg 
      ref={finisherRef}
      width="449" 
      height="60" 
      viewBox="0 0 449 60" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className='sword-ending-animation'>
      <g id="Vector" filter="url(#filter0_dddd_3_6)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M245.834 12.0176C291.909 12.522 268.619 19.9811 293.726 23.4414C303.562 24.7972 326.11 24.7735 342.894 25.3949C372.369 26.4862 426.052 25.714 430.735 28.514C435.652 31.4534 370.578 31.7651 358.166 34.5255C348.472 36.6817 374.517 38.9487 373.392 41.2675C371.698 44.7608 371.606 37.968 342.894 40.3665C317.276 42.5065 275 25.733 270 40.3665C265 55 227.5 22.3266 174 46C120.5 69.6734 150.704 41.2427 131.026 40.3665C95.8873 38.8018 39 51 21.7603 36.7855C4.52059 22.571 47.8397 31.3318 56.0305 28.4149C64.0382 25.5633 47.5 12.0176 69.4808 19.7917C91.4616 27.5657 153.893 24.0013 191.883 22.3266C230.642 20.6181 202.871 11.5474 245.834 12.0176Z" fill="url(#paint0_linear_3_6)"/>
      </g>
      <defs>
      <filter id="filter0_dddd_3_6" x="-2.25739" y="-57" width="453.257" height="116.393" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-3"/>
      <feGaussianBlur stdDeviation="3.5"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.231373 0 0 0 0 0.00784314 0 0 0 0 0.00784314 0 0 0 0.1 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_6"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-12"/>
      <feGaussianBlur stdDeviation="6"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.231373 0 0 0 0 0.00784314 0 0 0 0 0.00784314 0 0 0 0.09 0"/>
      <feBlend mode="normal" in2="effect1_dropShadow_3_6" result="effect2_dropShadow_3_6"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-28"/>
      <feGaussianBlur stdDeviation="8.5"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.231373 0 0 0 0 0.00784314 0 0 0 0 0.00784314 0 0 0 0.05 0"/>
      <feBlend mode="normal" in2="effect2_dropShadow_3_6" result="effect3_dropShadow_3_6"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="-49"/>
      <feGaussianBlur stdDeviation="10"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.231373 0 0 0 0 0.00784314 0 0 0 0 0.00784314 0 0 0 0.01 0"/>
      <feBlend mode="normal" in2="effect3_dropShadow_3_6" result="effect4_dropShadow_3_6"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow_3_6" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_3_6" x1="224.5" y1="12" x2="224.5" y2="53" gradientUnits="userSpaceOnUse">
      <stop stop-color="#650000"/>
      <stop offset="0.9999" stop-color="#060000"/>
      <stop offset="1" stop-color="#010000" stop-opacity="0"/>
      </linearGradient>
      </defs>
      </svg>
  );
};

export default PlayerSwordEnd;
