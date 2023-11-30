import React, { useState,useEffect } from "react";
import styles from '@/styles/BuscarGeneral.module.css';
import { datosProductos } from '@/Components/Utils/TraerDatosFrirebase';


async function BuscarGeneral({props}){

  // const [productos, setProductos] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const Producto = await datosProductos();
  //     console.log(Producto);
  //     setProductos(Producto);
  //   };

  //   fetchData();
  // }, []);


  // useEffect(() => {
  //   const headerContainer = document.getElementById('header-container');
  //   const dataContainer = document.getElementById('data-container');

  //   if (headerContainer && dataContainer) {
  //     const scrollHandler = () => {
  //       headerContainer.scrollLeft = dataContainer.scrollLeft;
  //     };

  //     dataContainer.addEventListener('scroll', scrollHandler);

  //     return () => {
  //       dataContainer.removeEventListener('scroll', scrollHandler);
  //     };
  //   }
  // }, []);


  return (
    <></>
//     <div className={styles.bodyBuscar}>
//       <div id="header-container" className={styles.headerContainer}>
//         <table className={styles.tableStyle}>
//           <thead className={styles.tbodyStyle}>
//             <tr className={styles.trStyle}>
//               <th className={styles.thStyle}>Id</th>
//               <th className={styles.thStyle}> Nombre</th>
//               <th className={styles.thStyle}>Id_Proveedor</th>
//               <th className={styles.thStyle}>Cantidad</th>
//               <th className={styles.thStyle}>Unidad</th>
//               <th className={styles.thStyle}>Categoría</th>
//             </tr>
//           </thead>
//         </table>
//       </div>
// {console.log(props)}
//       {props ? (
//         <div id="data-container" className={styles.dataContainer}>
//           <table className={styles.tableStyle}>
//             <tbody className={styles.tbodyStyle}>
//               <tr className={styles.trStyle}>
//                 <td className={styles.tdStyle}>Id</td>
//                 <td className={styles.tdStyle}>Nombre</td>
//                 <td className={styles.tdStyle}>Id_Proveedor</td>
//                 <td className={styles.tdStyle}>Cantidad</td>
//                 <td className={styles.tdStyle}>Unidad</td>
//                 <td className={styles.tdStyle}>Categoría</td>
//               </tr>
//             </tbody>
//           </table >
//         </div>
//       ) : null}
//     </div >

  )
}

export { BuscarGeneral };