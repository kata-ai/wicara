import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconUnuser: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12.003 3a8.934 8.934 0 00-5.809 2.133l-.412-.413a.753.753 0 10-1.066 1.066l13.508 13.517a.749.749 0 001.065 0 .751.751 0 000-1.067l-.413-.413A9.014 9.014 0 0012.003 3zm5.808 13.765l-3.752-3.755a3.574 3.574 0 001.56-2.966 3.614 3.614 0 00-2.534-3.52A3.607 3.607 0 009.001 7.98l-1.749-1.78a7.418 7.418 0 014.75-1.697 7.512 7.512 0 017.504 7.51 7.43 7.43 0 01-1.695 4.753zM16.423 19.032a.687.687 0 00-.128-.172l-3.985-3.935a.75.75 0 00-.525-.218H9.466a5.206 5.206 0 00-3.684 1.502 7.513 7.513 0 01-.466-7.615.751.751 0 00-1.335-.683 9.017 9.017 0 001.133 9.89l.172.18c.143.158.285.308.436.458l.277.256.413.352.33.24.428.301.345.21c.158.09.315.173.48.248a3.5 3.5 0 00.338.166c.18.082.353.15.533.217l.33.12c.197.066.398.121.6.166l.308.082c.218.045.45.083.675.113l.255.037c.316 0 .638.053.961.053a8.91 8.91 0 004.097-.984.84.84 0 00.248-.21l.045-.083a.689.689 0 00.12-.202v-.045c.004-.05.004-.1 0-.15a.828.828 0 00-.075-.256l-.007-.038z"
      fill={fill}
    />
  </svg>
);

IconUnuser.defaultProps = {
  ...iconDefaultProps,
};

export default IconUnuser;