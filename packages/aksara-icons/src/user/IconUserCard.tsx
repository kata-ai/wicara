import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUserCard: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M7.25 22h10.5c.597 0 1.169-.243 1.591-.676.422-.433.659-1.02.659-1.632V7.385c0-.612-.237-1.2-.659-1.632a2.222 2.222 0 00-1.591-.676h-3V2.769a.78.78 0 00-.22-.544A.74.74 0 0014 2h-3a.74.74 0 00-.53.225.78.78 0 00-.22.544v2.308h-3c-.597 0-1.169.243-1.591.676A2.338 2.338 0 005 7.385v12.307c0 .612.237 1.2.659 1.632.422.433.994.676 1.591.676zm7.357-10c0 .456-.131.903-.379 1.282-.247.38-.598.675-1.01.85-.41.175-.863.22-1.3.131a2.234 2.234 0 01-1.151-.631 2.326 2.326 0 01-.616-1.182 2.363 2.363 0 01.128-1.333c.17-.422.459-.782.829-1.036a2.21 2.21 0 012.84.287c.422.433.66 1.02.66 1.632zm-3 3.077h1.786c.795 0 1.558.324 2.12.901.563.577.88 1.36.88 2.176a.78.78 0 01-.22.544.74.74 0 01-1.06 0 .78.78 0 01-.22-.544c0-.408-.159-.8-.44-1.088a1.481 1.481 0 00-1.06-.45h-1.786c-.397 0-.779.162-1.06.45-.282.289-.44.68-.44 1.088a.78.78 0 01-.22.544.74.74 0 01-1.06 0 .78.78 0 01-.22-.544c0-.816.317-1.599.88-2.176a2.963 2.963 0 012.12-.901zm.143-11.539h1.5v3.077h-1.5V3.538z"
      fill={fill}
    />
    <path d="M12.357 12.77a.76.76 0 00.75-.77.76.76 0 00-.75-.77.76.76 0 00-.75.77c0 .425.336.77.75.77z" fill={fill} />
  </svg>
);

IconUserCard.defaultProps = {
  ...iconDefaultProps,
};

export default IconUserCard;
