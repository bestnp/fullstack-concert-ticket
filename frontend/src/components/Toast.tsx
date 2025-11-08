"use client";

import { useEffect } from "react";
import { CheckCircleIcon, XIcon } from "@/icons";

export type ToastVariant = "success" | "error" | "info";

type ToastProps = {
  open: boolean;
  message: string;
  onClose: () => void;
  duration?: number;
  variant?: ToastVariant;
};

const VARIANT_STYLES: Record<ToastVariant, string> = {
  success: "bg-[#D0E7D2] text-[#000000]",
  error: "bg-[#FEE2E2] text-[#000000]",
  info: "bg-[#E0F2FE] text-[#000000]",
};

export function Toast({ open, message, onClose, duration = 3000, variant = "success" }: ToastProps) {
  useEffect(() => {
    if (!open) return;

    const timeout = window.setTimeout(() => {
      onClose();
    }, duration);

    return () => window.clearTimeout(timeout);
  }, [open, duration, onClose]);

  if (!open) return null;

  return (
    <div className="fixed top-6 right-6 z-50 flex justify-end">
      <div className={`flex min-w-[240px] max-w-sm min-h-[52px] max-h-[52px] items-center gap-3 rounded-lg px-4 py-3 shadow-md ${VARIANT_STYLES[variant]}`}>
        {variant === "success" ? (
          <span aria-hidden className="text-lg"><CheckCircleIcon size={20} color="#00A743" /></span>
        ) : variant === "error" ? (
          <span aria-hidden className="text-lg">⚠️</span>
        ) : (
          <span aria-hidden className="text-lg">ℹ️</span>
        )}
        <p className="flex-1 text-sm font-medium">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="text-sm font-semibold text-current transition-opacity hover:opacity-70"
          aria-label="Close notification"
        >
          <XIcon size={20} color="#1E4620" />
        </button>
      </div>
    </div>
  );
}

