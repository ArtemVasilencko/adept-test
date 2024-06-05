import { MODES } from '../../../../constants/shared'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import {
    addNewCompany,
    addNewEmployee,
    deleteCheckedCompanies,
    deleteCheckedEmployees,
    toggleAllCompanyCheckboxes,
    toggleAllEmployeeCheckboxes,
} from '../../../../store/reducers/company-slice'
import styles from './table-header.module.scss'

interface TableHeaderProps {
    mode: 'companies' | 'employees'
    title: string
    activeCompanyId?: string
}

export function TableHeader(props: TableHeaderProps) {
    const { title, activeCompanyId, mode } = props
    const dispatch = useAppDispatch()
    const data =
        mode === MODES.COMPANIES
            ? useAppSelector((state) => state.companyReducer.companies)
            : useAppSelector((state) => state.companyReducer.companies).find(
                  (company) => company.id === activeCompanyId
              )?.employees

    return (
        <div className={styles.tableHeader}>
            <h1 className={styles.title}>{title}</h1>
            <div className={styles.controls}>
                <div>
                    <input
                        type="checkbox"
                        checked={
                            data?.length
                                ? data?.every((item) => item.checked)
                                : false
                        }
                        onChange={(e) => {
                            mode === MODES.COMPANIES &&
                                dispatch(
                                    toggleAllCompanyCheckboxes({
                                        isChecked: e.target.checked,
                                    })
                                )

                            mode === MODES.EMPLOYEES &&
                                dispatch(
                                    toggleAllEmployeeCheckboxes(
                                        e.target.checked
                                    )
                                )
                        }}
                        className={styles.checkbox}
                    />
                    <label htmlFor="selectAll" className={styles.label}>
                        Выделить всё
                    </label>
                </div>
                <div>
                    <button
                        onClick={() => {
                            mode === MODES.COMPANIES &&
                                dispatch(addNewCompany())
                            mode === MODES.EMPLOYEES &&
                                dispatch(addNewEmployee())
                        }}
                        className={`${styles.button} ${styles.buttonAdd}`}
                    >
                        Добавить
                    </button>
                    <button
                        onClick={() => {
                            mode === MODES.COMPANIES &&
                                dispatch(deleteCheckedCompanies())
                            mode === MODES.EMPLOYEES &&
                                dispatch(deleteCheckedEmployees())
                        }}
                        className={`${styles.button} ${styles.buttonDelete}`}
                    >
                        Удалить
                    </button>
                </div>
            </div>
        </div>
    )
}
