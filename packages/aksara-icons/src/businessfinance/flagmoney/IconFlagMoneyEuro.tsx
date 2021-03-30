import * as React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconFlagMoneyEuro: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20.163 4.24a18.89 18.89 0 00-8.387.545 17.269 17.269 0 01-7.607.546 1.827 1.827 0 00-.828.06 1.866 1.866 0 00-.721.423 1.786 1.786 0 00-.455.61c-.107.234-.163.49-.165.75v10.294a2.39 2.39 0 00.524 1.47c.333.415.793.699 1.305.805.937.171 1.887.257 2.84.257a23.058 23.058 0 005.447-.803 19.664 19.664 0 016.788-.71h.7a2.238 2.238 0 001.611-.57c.445-.397.724-.957.778-1.561v-.113c.01-.155.01-.31 0-.464V6.515a2.39 2.39 0 00-.524-1.472 2.268 2.268 0 00-1.306-.804zm-.17 9.264a2.118 2.118 0 00-.5-.133c-.33-.028-.662.019-.974.135a2.31 2.31 0 00-.833.54 2.394 2.394 0 00-.54.846c-.12.318-.171.66-.152 1 .002.163.018.325.05.484-1.808.085-3.604.36-5.358.824a22.143 22.143 0 01-4.758.73.148.148 0 000-.06 2.893 2.893 0 000-.516 2.831 2.831 0 00-.757-1.822 2.677 2.677 0 00-1.742-.844h-.5v-4.22c.161.065.329.11.5.133.335.038.675 0 .994-.11.32-.111.612-.293.857-.532.244-.239.435-.53.56-.853.123-.323.178-.67.158-1.016.01-.155.01-.31 0-.464a23.519 23.519 0 005.218-.782 23.086 23.086 0 014.848-.762.15.15 0 000 .062c-.032.17-.048.342-.05.515.028.682.297 1.33.758 1.822.46.491 1.08.792 1.742.844h.5v4.22l-.02-.04z"
      fill={fill}
    />
    <path
      d="M14.265 9.562c.19.062.396.045.573-.049a.768.768 0 00.372-.45.794.794 0 00-.047-.59.757.757 0 00-.438-.383 3.14 3.14 0 00-1.61-.103 4.385 4.385 0 00-1.86.913 4.557 4.557 0 00-1.258 1.68l-.59.104a.746.746 0 00-.467.284.788.788 0 00.074 1.04.738.738 0 00.503.21h.09v.442h-.23a.744.744 0 00-.514.266.789.789 0 00.078 1.092c.15.134.347.201.546.186h.11l.49-.082c.157.263.353.499.58.7.56.482 1.269.745 1.999.741.221 0 .442-.021.66-.062a4.107 4.107 0 001.52-.607.783.783 0 00.308-.469.803.803 0 00-.079-.56.74.74 0 00-.453-.326.722.722 0 00-.546.089c-.308.194-.646.33-1 .401a1.812 1.812 0 01-1.25-.195h.09l1.08-.206a.748.748 0 00.479-.32.784.784 0 00-.19-1.072.742.742 0 00-.559-.132l-1.09.216-.59.114v-.072c-.01-.12-.01-.24 0-.36l.95-.217 1-.206a.739.739 0 00.483-.321.787.787 0 00.122-.58.788.788 0 00-.312-.497.743.743 0 00-.563-.125l-.7.134a2.78 2.78 0 011.31-.68c.309-.069.63-.051.93.052z"
      fill={fill}
    />
  </svg>
);

IconFlagMoneyEuro.defaultProps = {
  ...iconDefaultProps,
};

export default IconFlagMoneyEuro;