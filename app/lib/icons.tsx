import type { ReactNode, SVGProps } from "react";

export function IconBase({
  children,
  ...props
}: SVGProps<SVGSVGElement> & { children?: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function FlameLeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3C10.4 6.2 6.6 7.8 6.6 12.2C6.6 15.5 8.9 18 12 18C15.1 18 17.4 15.5 17.4 12.2C17.4 9.5 15.8 7.1 13.9 5.5C13.5 8 11.8 9.1 10.3 10.1C10.4 7.9 11.1 5.9 12 3Z" fill="currentColor" />
      <path d="M12 11.5C11 12.4 10.3 13.2 10.3 14.4C10.3 15.7 11.1 16.7 12.2 16.7C13.4 16.7 14.2 15.8 14.2 14.5C14.2 13.4 13.6 12.5 12 11.5Z" fill="rgba(12,12,12,0.4)" />
    </svg>
  );
}

export function LocationPinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 21C15.6 16.8 18 13.9 18 10.5C18 6.9 15.3 4 12 4C8.7 4 6 6.9 6 10.5C6 13.9 8.4 16.8 12 21Z" />
      <circle cx="12" cy="10.5" r="2.2" />
    </IconBase>
  );
}

export function MapPinIcon(props: SVGProps<SVGSVGElement>) {
  return <LocationPinIcon {...props} />;
}

export function UtensilsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M7 4V12" />
      <path d="M10 4V12" />
      <path d="M7 8H10" />
      <path d="M8.5 12V20" />
      <path d="M15 4C16.7 5.5 17.5 7.5 17.5 10V20" />
      <path d="M15 4V20" />
    </IconBase>
  );
}

export function DeliveryIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M3 13H13" />
      <path d="M13 9H17L20 12V16H18" />
      <path d="M6 16H13" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <path d="M3 10H9" />
    </IconBase>
  );
}

export function StarOutlineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 3.8L14.7 9.3L20.8 10.2L16.4 14.5L17.4 20.6L12 17.8L6.6 20.6L7.6 14.5L3.2 10.2L9.3 9.3L12 3.8Z" />
    </IconBase>
  );
}

export function CurrencyIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M7 5V19" />
      <path d="M17 5V19" />
      <path d="M7 9H17" />
      <path d="M7 15H17" />
      <path d="M17 7.5C16.1 6.5 14.9 6 13.3 6C10.8 6 9.5 7 9.5 8.6C9.5 10.4 11.2 10.9 13.1 11.4C15.3 12 17 12.6 17 14.7C17 16.7 15.2 18 12.8 18C11 18 9.4 17.4 8.3 16.2" />
    </IconBase>
  );
}

export function ClockIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8V12L14.8 14.5" />
    </IconBase>
  );
}

export function ShoppingBagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M6 8.5H18L17 20H7L6 8.5Z" />
      <path d="M9 9V7.5C9 5.8 10.3 4.5 12 4.5C13.7 4.5 15 5.8 15 7.5V9" />
    </IconBase>
  );
}

export function SearchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16L20 20" />
    </IconBase>
  );
}

export function FilterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4 6H20" />
      <path d="M7 12H17" />
      <path d="M10 18H14" />
    </IconBase>
  );
}

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M12 5V19" />
      <path d="M5 12H19" />
    </IconBase>
  );
}

export function MinusIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M5 12H19" />
    </IconBase>
  );
}

export function TrashIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M4.5 7H19.5" />
      <path d="M9 7V5.5C9 4.7 9.7 4 10.5 4H13.5C14.3 4 15 4.7 15 5.5V7" />
      <path d="M7.5 7L8.3 19C8.4 19.8 9 20.4 9.8 20.4H14.2C15 20.4 15.6 19.8 15.7 19L16.5 7" />
      <path d="M10 10.5V16.5" />
      <path d="M14 10.5V16.5" />
    </IconBase>
  );
}

export function XIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M6 6L18 18" />
      <path d="M18 6L6 18" />
    </IconBase>
  );
}

export function ChevronRightIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M9 6L15 12L9 18" />
    </IconBase>
  );
}

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <IconBase {...props}>
      <path d="M7.6 4.8L9.6 8.5L8.3 10C8.9 11.6 10.4 13.1 12 13.7L13.5 12.4L17.2 14.4C17.6 14.6 17.8 15.1 17.6 15.5L16.7 18.1C16.5 18.6 16 18.9 15.5 18.8C9.4 17.9 5.1 13.6 4.2 7.5C4.1 7 4.4 6.5 4.9 6.3L7.5 5.4C7.9 5.2 8.4 5.4 8.6 5.8" />
    </IconBase>
  );
}

export function AppleIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M15.7 12.4C15.7 10.3 17.5 9.3 17.6 9.2C16.6 7.7 15.1 7.4 14.5 7.4C13.1 7.3 11.7 8.2 11 8.2C10.3 8.2 9.1 7.4 7.9 7.4C5.3 7.5 3 9.5 3 13.2C3 14.8 3.3 16.5 4.2 18C5 19.3 6 20.8 7.4 20.7C8.7 20.7 9.2 19.9 10.8 19.9C12.3 19.9 12.8 20.7 14.2 20.7C15.6 20.7 16.5 19.4 17.3 18.1C18.2 16.7 18.5 15.4 18.5 15.3C18.5 15.2 15.7 14.2 15.7 12.4Z" />
      <path d="M13.7 6.1C14.3 5.4 14.8 4.4 14.7 3.4C13.8 3.4 12.7 4 12.1 4.7C11.5 5.3 11 6.4 11.1 7.4C12.1 7.5 13.1 6.9 13.7 6.1Z" />
    </svg>
  );
}

export function PlayStoreIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M4.8 4.2L13.9 13.1L16.9 10.1L4.8 4.2Z" fill="#34A853" />
      <path d="M4.8 4.2L4.7 19.8L13.9 13.1L4.8 4.2Z" fill="#4285F4" />
      <path d="M19.3 8.8L16.9 10.1L13.9 13.1L16.9 16.1L19.4 14.7C21.1 13.8 21.1 9.8 19.3 8.8Z" fill="#FBBC04" />
      <path d="M4.7 19.8L16.9 16.1L13.9 13.1L4.7 19.8Z" fill="#EA4335" />
    </svg>
  );
}

export function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.8 3H21L14 11L22.2 21H15.8L10.8 14.9L5.5 21H2.2L9.7 12.4L1.8 3H8.3L12.8 8.6L17.8 3ZM16.7 19.2H18.5L7.3 4.7H5.3L16.7 19.2Z" />
    </svg>
  );
}

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
      {...props}
    >
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M5.4 8.3C6.8 8.3 7.9 7.2 7.9 5.8C7.9 4.4 6.8 3.3 5.4 3.3C4.1 3.3 2.9 4.4 2.9 5.8C2.9 7.2 4.1 8.3 5.4 8.3ZM3.3 9.8H7.5V20.7H3.3V9.8ZM10 9.8H14V11.3H14.1C14.7 10.2 16 9.5 17.6 9.5C21 9.5 21.7 11.7 21.7 14.7V20.7H17.6V15.4C17.6 14.1 17.6 12.3 15.7 12.3C13.8 12.3 13.5 13.7 13.5 15.3V20.7H9.4V9.8H10Z" />
    </svg>
  );
}

export function TikTokIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14.8 3C15.2 5 16.4 6.7 18.3 7.6C19.2 8 20.1 8.2 21 8.2V11.6C19.4 11.6 17.8 11.2 16.4 10.4V15.8C16.4 19.2 13.7 21.8 10.3 21.8C6.9 21.8 4.2 19.2 4.2 15.8C4.2 12.4 6.9 9.8 10.3 9.8C10.7 9.8 11.1 9.8 11.5 10V13.5C11.1 13.3 10.7 13.2 10.3 13.2C8.8 13.2 7.6 14.4 7.6 15.8C7.6 17.3 8.8 18.5 10.3 18.5C11.7 18.5 12.9 17.3 12.9 15.8V3H14.8Z" />
    </svg>
  );
}
