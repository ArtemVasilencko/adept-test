import { ChangeEvent } from 'react'
import { FIELD_NAMES, FIELD_PLACEHOLDERS } from '../../../../constants/shared'
import { useAppDispatch } from '../../../../hooks/redux'
import { Employee } from '../../../../interfaces/companies'
import {
    handleEmployeeFieldChange,
    toggleEmployeeCheckbox,
} from '../../../../store/reducers/company-slice'
import styles from './table-employees.module.scss'

interface TableEmployeesProps {
    activeCompany: Employee[] | undefined
}

export function TableEmployees(props: TableEmployeesProps) {
    const { activeCompany } = props
    const dispatch = useAppDispatch()

    const handleFieldChange = (
        e: ChangeEvent<HTMLInputElement>,
        employee: Employee
    ) =>
        dispatch(
            handleEmployeeFieldChange({
                id: employee.id,
                fieldName: e.target.name,
                value: e.target.value,
            })
        )

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Чекбокс</th>
                    <th>Имя сотрудника</th>
                    <th>Фамилия сотрудника</th>
                    <th>Должность</th>
                </tr>
            </thead>
            <tbody>
                {activeCompany?.length ? (
                    activeCompany?.map((employee: Employee) => (
                        <tr
                            className={employee.checked ? styles.checked : ''}
                            key={employee.id}
                        >
                            <td>
                                <input
                                    type="checkbox"
                                    checked={employee.checked}
                                    onChange={() =>
                                        dispatch(
                                            toggleEmployeeCheckbox(employee.id)
                                        )
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name={FIELD_NAMES.FIRST_NAME}
                                    defaultValue={employee.firstName}
                                    placeholder={FIELD_PLACEHOLDERS.FIRST_NAME}
                                    onChange={(e) =>
                                        handleFieldChange(e, employee)
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name={FIELD_NAMES.LAST_NAME}
                                    defaultValue={employee.lastName}
                                    placeholder={FIELD_PLACEHOLDERS.LAST_NAME}
                                    onChange={(e) =>
                                        handleFieldChange(e, employee)
                                    }
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name={FIELD_NAMES.JOB_TITLE}
                                    defaultValue={employee.jobTitle}
                                    placeholder={FIELD_PLACEHOLDERS.JOB_TITLE}
                                    onChange={(e) =>
                                        handleFieldChange(e, employee)
                                    }
                                />
                            </td>
                        </tr>
                    ))
                ) : (
                    <h3 >В этой компании пусто :(</h3>
                )}
            </tbody>
        </table>
    )
}
