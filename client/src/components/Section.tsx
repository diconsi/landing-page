import type { ReactNode } from 'react'

export function Section(props: React.HTMLAttributes<HTMLDivElement> & { children: ReactNode }) {
  return (
    <div {...props} style={{ height: '100vh', display: 'grid', placeContent: 'center', ...props.style }}>
      {props.children}
    </div>
  )
}
