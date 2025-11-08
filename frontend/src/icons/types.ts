import type { SVGProps } from 'react';

export type IconProps = SVGProps<SVGSVGElement> & {
  /**
   * Both numeric pixel values and any valid CSS length tokens are accepted.
   * Defaults to 24.
   */
  size?: number | string;
  /**
   * Defaults to currentColor so icons inherit the surrounding text color.
   */
  color?: string;
};

