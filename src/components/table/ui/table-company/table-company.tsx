import { Companies } from '../../../../interfaces/companies'
import { useAppDispatch } from '../../../../hooks/redux'
import {
    handleCompanyFieldChange,
    setActiveCompanyId,
    toggleCompanyCheckbox,
} from '../../../../store/reducers/company-slice'
import { FIELD_NAMES, FIELD_PLACEHOLDERS } from '../../../../constants/shared'
import { ChangeEvent } from 'react'
import styles from './table-company.module.scss'

interface TableCompanyProps {
    companies: Companies
}

export function TableCompany(props: TableCompanyProps) {
    const { companies } = props
    const dispatch = useAppDispatch()

    const handleFieldChange = (e: ChangeEvent<HTMLInputElement>, id: string) =>
        dispatch(
            handleCompanyFieldChange({
                id: id,
                fieldName: e.target.name,
                value: e.target.value,
            })
        )

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Чекбокс</th>
                    <th>Название компании</th>
                    <th>Кол-во сотрудников</th>
                    <th>Адрес</th>
                </tr>
            </thead>
            <tbody>
                {companies.length ? (
                    companies.map((company) => (
                        <tr
                            className={company.checked ? styles.checked : ''}
                            key={company.id}
                        >
                            <td>
                                <input
                                    type="checkbox"
                                    checked={company.checked}
                                    onChange={(e) => {
                                        dispatch(
                                            toggleCompanyCheckbox(company.id)
                                        )
                                        dispatch(
                                            setActiveCompanyId({
                                                id: company.id,
                                                isChecked: e.target.checked,
                                            })
                                        )
                                    }}
                                />
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name={FIELD_NAMES.NAME}
                                    defaultValue={company.name}
                                    placeholder={FIELD_PLACEHOLDERS.NAME}
                                    onChange={(e) =>
                                        handleFieldChange(e, company.id)
                                    }
                                />
                            </td>
                            <td>{company.employeesCount || '-'}</td>
                            <td>
                                <input
                                    type="text"
                                    name={FIELD_NAMES.ADDRESS}
                                    defaultValue={company.address}
                                    placeholder={FIELD_PLACEHOLDERS.ADDRESS}
                                    onChange={(e) =>
                                        handleFieldChange(e, company.id)
                                    }
                                />
                            </td>
                        </tr>
                    ))
                ) : (
                    <h3 >
                        Все компании видимо закончились :(
                    </h3>
                )}
            </tbody>
        </table>
    )
}
