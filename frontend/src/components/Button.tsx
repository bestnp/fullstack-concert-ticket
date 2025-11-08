import type { ButtonHTMLAttributes, ComponentType, CSSProperties } from "react";

import type { IconProps } from "@/icons";

type ButtonVariant = "primary" | "danger" | "neutral" | "outline";

type ButtonSize = "sm" | "md" | "lg";

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: "bg-[#1692EC] text-white border-transparent hover:bg-[#147ED0]",
  danger: "bg-[#F96464] text-white border-transparent hover:bg-[#e25656]",
  neutral: "bg-gray-200 text-gray-900 border-transparent hover:bg-gray-300",
  outline: "bg-white text-[#101828] border-[#D0D5DD] hover:bg-[#F7F9FB]",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-7 py-4 text-lg",
};

type ButtonProps = {
  icon?: ComponentType<IconProps>;
  text: string;
  variant?: ButtonVariant;
  iconPosition?: "left" | "right";
  size?: ButtonSize;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  icon: Icon,
  text,
  variant = "primary",
  iconPosition = "left",
  size = "md",
  backgroundColor,
  textColor,
  borderColor,
  className,
  ...rest
}: ButtonProps) {
  const variantClass = VARIANT_STYLES[variant];
  const sizeClass = SIZE_STYLES[size];
  const hasIcon = Boolean(Icon);
  const iconColor = textColor ?? "currentColor";
  const iconElement = hasIcon && Icon ? <Icon size={20} color={iconColor} className="shrink-0" /> : null;
  const contentClass = hasIcon ? "justify-start" : "justify-center";

  const dynamicStyle: CSSProperties = {
    ...(backgroundColor && variant !== "outline" ? { backgroundColor } : {}),
    ...(textColor ? { color: textColor } : {}),
    ...(borderColor ? { borderColor } : {}),
  };

  return (
    <button
      type="button"
      style={dynamicStyle}
      className={`inline-flex items-center ${contentClass} gap-3 rounded-[4px] border font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${variantClass} ${sizeClass} ${
        className ?? ""
      }`.trim()}
      {...rest}
    >
      {iconElement && iconPosition === "left" ? iconElement : null}
      <span>{text}</span>
      {iconElement && iconPosition === "right" ? iconElement : null}
    </button>
  );
}
