import React from "react";
import styles from '@/styles/BuscarGeneral.module.css';

const BuscarGeneral = () => {
  return (
    <div className={styles.bodyBuscar}>
      <table className={styles.tableStyle} from>
        <thead className={styles.theadStyle}>
          <tr>
            <th className={styles.thStyle}>Resultados de busqueda</th>
          </tr>
        </thead>
        <tbody className={styles.tbodyStyle}>
          <tr className={styles.trStyle}>
            <th className={styles.thStyle}>Id</th>
            <th className={styles.thStyle}> Nombre</th>
            <th className={styles.thStyle}>Id_Proveedor</th>
            <th className={styles.thStyle}>Cantidad</th>
            <th className={styles.thStyle}>Unidad</th>
            <th className={styles.thStyle}>Categoría</th>
          </tr>
          <tr className={styles.trStyle}>
            <td className={styles.tdStyle}>Id</td>
            <td className={styles.tdStyle}>Nombre</td>
            <td className={styles.tdStyle}>Id_Proveedor</td>
            <td className={styles.tdStyle}>Cantidad</td>
            <td className={styles.tdStyle}>Unidad</td>
            <td className={styles.tdStyle}>Categoría</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export { BuscarGeneral };