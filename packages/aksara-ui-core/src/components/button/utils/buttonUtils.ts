import { css } from 'styled-components';
import { colors } from '../../../utils/variables';
import { ButtonBaseProps } from '../types';
import { componentStyles } from '../../../utils';

export const ButtonDefault = css`
  color: ${colors.grey08};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.grey03};
      color: ${colors.blue08};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.grey03};
      color: ${colors.blue08};
      border-color: ${colors.blue06};
      box-shadow: 0px 0px 2px rgba(0, 111, 230, 0.4), 0 0 0 1px ${colors.blue06};
    }
  }

  &:disabled,
  &.disabled {
    border-color: ${colors.grey04};
    background-color: ${colors.grey04};
    color: ${colors.grey01};
  }
`;

export const ButtonPrimary = css`
  background-color: ${colors.blue06};
  color: ${colors.white};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.blue07};
      color: ${colors.white};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.blue08};
      border-color: ${colors.blue06};
      box-shadow: 0px 0px 2px rgba(0, 111, 230, 0.4), 0 0 0 1px ${colors.blue06};
    }
  }

  &:disabled,
  &.disabled {
    border-color: ${colors.grey04};
    background-color: ${colors.grey04};
    color: ${colors.grey01};
  }
`;

export const ButtonSupport = css`
  border-color: ${colors.grey04};
  background-color: ${colors.grey01};
  color: ${colors.grey08};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.grey03};
      border-color: ${colors.grey04};
      color: ${colors.blue08};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.grey03};
      color: ${colors.blue08};
      border-color: ${colors.blue06};
      box-shadow: 0px 0px 2px rgba(0, 111, 230, 0.4), 0 0 0 1px ${colors.blue06};
    }
  }

  &:disabled,
  &.disabled {
    border-color: ${colors.grey04};
    background-color: ${colors.grey01};
    color: ${colors.grey04};
  }
`;

export const ButtonLink = css`
  color: ${colors.kataBlue};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      color: ${colors.darkKataBlue};
      text-decoration: underline;
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      box-shadow: 0 0 0 1px ${colors.blue04};
    }
  }

  &:disabled,
  &.disabled {
    color: ${colors.gray50};
  }
`;

export const ButtonDestructive = css`
  background-color: ${colors.red07};
  color: ${colors.grey01};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.red08};
      color: ${colors.grey01};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.red09};
      border-color: ${colors.red07};
      color: ${colors.grey01};
      box-shadow: 0px 0px 2px rgba(186, 19, 9, 0.4), 0 0 0 1px ${colors.red07};
    }
  }

  &:disabled,
  &.disabled {
    border-color: ${colors.grey04};
    background-color: ${colors.grey04};
    color: ${colors.grey01};
  }
`;

export const ButtonGhost = css`
  color: ${colors.grey08};

  &:not(:disabled):not(.disabled) {
    &:hover,
    &.hover,
    &:focus,
    &.focus {
      background-color: ${colors.grey03};
      color: ${colors.blue08};
    }

    &:focus,
    &.focus,
    &:active,
    &.active {
      background-color: ${colors.grey03};
      color: ${colors.blue08};
      border-color: ${colors.blue06};
      box-shadow: 0px 0px 2px rgba(0, 111, 230, 0.4), 0 0 0 1px ${colors.blue06};
    }
  }

  &:disabled,
  &.disabled {
    border-color: ${colors.grey04};
    background-color: ${colors.grey04};
    color: ${colors.grey01};
  }
`;

export const ButtonSmall = (props: ButtonBaseProps) => css`
  height: 32px;
  padding: 0 12px;
  font-size: ${componentStyles.text[300].fontSize};
  line-height: ${componentStyles.text[300].lineHeight};
  border-radius: 4px;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 36px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 36px;'}
`;

export const ButtonMedium = (props: ButtonBaseProps) => css`
  height: 40px;
  padding: 0 16px;
  font-size: ${componentStyles.text[300].fontSize};
  line-height: ${componentStyles.text[300].lineHeight};
  border-radius: 4px;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 46px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 46px;'}
`;

export const ButtonLarge = (props: ButtonBaseProps) => css`
  height: 48px;
  padding: 0 24px;
  font-size: ${componentStyles.text[400].fontSize};
  line-height: ${componentStyles.text[400].lineHeight};
  border-radius: 4px;

  ${props.icon && props.iconPosition === 'left' && 'padding-left: 46px;'}
  ${props.icon && props.iconPosition === 'right' && 'padding-right: 46px;'}
`;

export const InverseButton = css`
  border-color: ${colors.white};
  color: ${colors.white};

  &:disabled,
  &.disabled {
    opacity: 0.5;
  }
`;
