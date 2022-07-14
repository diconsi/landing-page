import type { ReactNode } from 'react'

export function Section(props: { id?: string, children: ReactNode }) {
  return (
    <div id={props.id} style={{ height: '100vh', display: 'grid', placeContent: 'center' }}>
      {props.children}
    </div>
  )
}
