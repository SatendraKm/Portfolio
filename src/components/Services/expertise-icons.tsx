import type { FC, SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

export const FullStackIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 8h8M8 12h8M8 16h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const FrontendIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="2.5" y="4" width="19" height="16" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
    <path d="M2.5 8h19M6 6h.01M9 6h.01M12 6h.01M8.5 12l-2 2 2 2M15.5 12l2 2-2 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export const BackendIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="4" y="3" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <rect x="4" y="15" width="16" height="6" rx="2" stroke="currentColor" strokeWidth="1.8" />
    <path d="M8 6h.01M8 18h.01M12 9v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const RealtimeIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx="12" cy="12" r="2" fill="currentColor" />
    <path d="M7.1 7.1a7 7 0 0 0 0 9.8M16.9 7.1a7 7 0 0 1 0 9.8M4.3 4.3a11 11 0 0 0 0 15.4M19.7 4.3a11 11 0 0 1 0 15.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
)

export const DatabaseIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <ellipse cx="12" cy="5.5" rx="7.5" ry="3" stroke="currentColor" strokeWidth="1.8" />
    <path d="M4.5 5.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6M4.5 11.5v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" stroke="currentColor" strokeWidth="1.8" />
  </svg>
)

export const ToolingIcon: FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M4 5h16v14H4zM8 9l-2 3 2 3M12 15h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
