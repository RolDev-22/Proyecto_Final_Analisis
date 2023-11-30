import React, { useState, useEffect } from "react";

import styles from '@/styles/BuscarGeneral.module.css';
import { datosProductos } from "./TraerDatosFrirebase";

const EliminarProducto = () => {


    {/**Almacenar la categoría de la base */ }

    const [productos, setProductos] = useState([]);
    const [mensaje, setMessage] = useState('');


    {/**Llamar los datos desde la base */ }
    useEffect(() => {
        const fetchData = async () => {
            const producto = await datosProductos();
            console.log("PRODUCTO", producto);
            setProductos(producto);

        };

        fetchData();
    }, []);

    const handleFormSubmit = async (event) => {//prescionar el botón de enviar
        event.preventDefault();

        try {

            if (window.confirm("Estas seguro que quieres Eliminar el producto")) {

                await db.firestore().collection('Productos').doc(productos.id).delete();
                //this.getPorductos()
            }

        } catch (error) {
            console.error('Error al ingresar el Id del producto: ' + error.mensaje);
        }
        event.target.reset();
    };




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
                    
                </tbody>
            </table>
        </div>
    )
}

export { EliminarProducto };