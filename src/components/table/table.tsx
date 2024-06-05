import { ReactNode } from 'react'
import { TableHeader } from './ui/table-header/table-header'
import styles from './table.module.scss'

interface TableProps {
    mode: 'companies' | 'employees'
    title: string
    activeCompanyId?: string
    component: ReactNode
}

export function Table(props: TableProps) {
    const { title, activeCompanyId, mode, component } = props
    return (
        <div className={styles.tableWrapper}>
            <TableHeader
                title={title}
                activeCompanyId={activeCompanyId}
                mode={mode}
            />
            {component}
        </div>
    )
}
