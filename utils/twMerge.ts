import { extendTailwindMerge } from 'tailwind-merge';
import config from '@/tailwind.config';

export const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': Object.keys(config?.theme?.extend?.fontSize ?? []).map((key) => `text-${key}`),
    },
  },
});
