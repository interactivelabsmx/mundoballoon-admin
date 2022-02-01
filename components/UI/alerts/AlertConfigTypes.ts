import {
  CheckCircleIcon,
  ExclamationIcon,
  XCircleIcon,
} from '@heroicons/react/solid';

export enum SimpleTextAlertType {
  SUCCESS,
  ERROR,
  WARNING,
}

export const SimpleTextAlertTypeConfig = {
  [SimpleTextAlertType.SUCCESS]: {
    colors: {
      bg: 'bg-green-50',
      text: 'text-green-800',
      icon: 'text-green-400',
    },
    Icon: CheckCircleIcon,
  },
  [SimpleTextAlertType.ERROR]: {
    colors: {
      bg: 'bg-red-50',
      text: 'text-red-800',
      icon: 'text-red-400',
    },
    Icon: XCircleIcon,
  },
  [SimpleTextAlertType.WARNING]: {
    colors: {
      bg: 'bg-yellow-50',
      text: 'text-yellow-800',
      icon: 'text-yellow-400',
    },
    Icon: ExclamationIcon,
  },
};

export const DismissAlertButtonColors = {
  [SimpleTextAlertType.SUCCESS]: [
    'bg-green-50', //bg
    'text-green-500', //text
    'hover:bg-green-100', //hover
    'focus:ring-offset-green-50 focus:ring-green-600', //focus
  ],
  [SimpleTextAlertType.ERROR]: [
    'bg-red-50', //bg
    'text-red-500', //text
    'hover:bg-red-100', //hover
    'focus:ring-offset-red-50 focus:ring-red-600', //focus
  ],
  [SimpleTextAlertType.WARNING]: [
    'bg-yellow-50', //bg
    'text-yellow-500', //text
    'hover:bg-yellow-100', //hover
    'focus:ring-offset-yellow-50 focus:ring-yellow-600', //focus
  ],
};
