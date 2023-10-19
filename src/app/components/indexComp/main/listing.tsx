import React from 'react';

interface ListingProps {
  width?: string;
  opacity?: string;
  jumpToAnotherPageFromMenu?: string;
  whereToFromMenu?: string;
}

const Listing: React.FC<ListingProps> = (
  { width, 
    opacity,
    jumpToAnotherPageFromMenu, 
    whereToFromMenu }) => (

  <li className={`paper-card h-14 flex items-center justify-center font-semibold hover:cursor-pointer ${width} ${opacity}`}>
    <a href={jumpToAnotherPageFromMenu} className="custom-link-class">
      {whereToFromMenu}
    </a>
  </li>
);

export default Listing;
