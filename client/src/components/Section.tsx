import { ReactNode } from "react";

export function Section(props: { id?: string, children: ReactNode }) {
    return (
        <div id={props.id} style={{ height: '100vh' }}>
            {props.children}
        </div>
    )
}