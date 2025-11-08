import type { IconProps } from './types';

export function XIcon({ size = 28, color = 'currentColor', className, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...rest}
    >
      <path
        d="M19.8334 9.34175L18.6584 8.16675L14.0001 12.8251L9.34175 8.16675L8.16675 9.34175L12.8251 14.0001L8.16675 18.6584L9.34175 19.8334L14.0001 15.1751L18.6584 19.8334L19.8334 18.6584L15.1751 14.0001L19.8334 9.34175Z"
        fill={color}
      />
    </svg>
  );
}

