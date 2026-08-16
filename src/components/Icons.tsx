import type { ReactNode, SVGProps } from 'react'
import type { IconName } from '@/content/types'

export type UiIconName =
  | IconName
  | 'arrowRight'
  | 'arrowUp'
  | 'arrowDown'
  | 'mail'
  | 'phone'
  | 'pin'
  | 'linkedin'
  | 'check'
  | 'clock'
  | 'menu'
  | 'close'
  | 'badge'
  | 'translate'

/* Line icons on a 24×24 grid, drawn with the currentColor stroke. */
const PATHS: Record<UiIconName, ReactNode> = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.2 8.8-1.9 4.5-4.5 1.9 1.9-4.5z" />
    </>
  ),
  flow: (
    <>
      <rect x="3" y="3.5" width="6" height="5" rx="1.5" />
      <rect x="15" y="3.5" width="6" height="5" rx="1.5" />
      <rect x="9" y="15.5" width="6" height="5" rx="1.5" />
      <path d="M6 8.5v3a1.5 1.5 0 0 0 1.5 1.5h9A1.5 1.5 0 0 0 18 11.5v-3M12 13v2.5" />
    </>
  ),
  refresh: (
    <>
      <path d="M20 11a8 8 0 0 0-13.9-5.3L3 8.5" />
      <path d="M4 13a8 8 0 0 0 13.9 5.3L21 15.5" />
      <path d="M3 4v4.5h4.5M21 20v-4.5h-4.5" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1Z" />
      <path d="M17 9a4 4 0 0 1 0 6" />
      <path d="M7 15v3.5a1.5 1.5 0 0 0 3 0V17" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  handshake: (
    <>
      <path d="m3 11 3-3 3.5 1.5L12 8l2.5 1.5L18 8l3 3" />
      <path d="M6 8v7.5a1.5 1.5 0 0 0 1.5 1.5H9l2.5 2 2.5-2h1.5a1.5 1.5 0 0 0 1.5-1.5V8" />
      <path d="M9 13h6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5.5c0 4.2 2.9 7.6 7 9.5 4.1-1.9 7-5.3 7-9.5V6l-7-3Z" />
      <path d="m9.2 12 2 2 3.6-3.8" />
    </>
  ),
  model: (
    <>
      <circle cx="6" cy="7" r="2.2" />
      <circle cx="6" cy="17" r="2.2" />
      <circle cx="18" cy="12" r="2.2" />
      <path d="M8.2 7.9 15.8 11M8.2 16.1 15.8 13" />
    </>
  ),
  flask: (
    <>
      <path d="M9.5 3h5M10.5 3v6L5.6 17.4A2 2 0 0 0 7.3 20.5h9.4a2 2 0 0 0 1.7-3.1L13.5 9V3" />
      <path d="M8 14.5h8" />
    </>
  ),
  chart: (
    <>
      <path d="M4 20V4M4 20h16" />
      <path d="M8 20v-5M12 20V9M16 20v-8M20 20V6" />
    </>
  ),
  board: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M9 4v16M15 4v16" />
      <path d="M5.5 8h1.5M11 8h2M16.5 8h2M5.5 12h1.5M11 12h2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" />
      <path d="M16 5.5a3.2 3.2 0 0 1 0 5.6M17.5 14.6a5.5 5.5 0 0 1 3 4.9" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3.5 13.7 9l5.5 1.7-5.5 1.8L12 18l-1.7-5.5L4.8 10.7 10.3 9 12 3.5Z" />
      <path d="M18.5 4v3M20 5.5h-3" />
    </>
  ),

  arrowRight: <path d="M4.5 12h14m-5.5-5.5L18.5 12 13 17.5" />,
  arrowUp: <path d="M12 19.5v-14m-5.5 5.5L12 5.5l5.5 5.5" />,
  arrowDown: <path d="M12 4.5v14m5.5-5.5L12 18.5 6.5 13" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4.5 7.5 6.4 4.7a2 2 0 0 0 2.2 0l6.4-4.7" />
    </>
  ),
  phone: (
    <path d="M6.5 3.5h2l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v2a2.5 2.5 0 0 1-2.7 2.5C9.4 17.4 6.6 14.6 4 8.2A2.5 2.5 0 0 1 6.5 3.5Z" />
  ),
  pin: (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5V17M7.5 7.4v.1M11.5 17v-3.6a2.4 2.4 0 0 1 4.8 0V17" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.4 2" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  cap: (
    <>
      <path d="m12 4 9 4.5-9 4.5-9-4.5L12 4Z" />
      <path d="M6.5 10.8V15c0 1.7 2.5 3 5.5 3s5.5-1.3 5.5-3v-4.2M20.5 9v5" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9.5" r="5.5" />
      <path d="m8.6 14.2-1.1 6 4.5-2.3 4.5 2.3-1.1-6" />
    </>
  ),
  translate: (
    <>
      <path d="M3.5 6h8M7.5 4.2V6M9.3 6c-.4 3.5-2.6 6.3-5.8 7.6M6 9.4c.9 2 2.6 3.5 4.7 4.2" />
      <path d="m12.5 20 3.8-9 3.7 9M13.9 17h5" />
    </>
  ),
}

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: UiIconName
  size?: number
}

export function Icon({ name, size = 20, strokeWidth = 1.5, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {PATHS[name]}
    </svg>
  )
}

export default Icon
