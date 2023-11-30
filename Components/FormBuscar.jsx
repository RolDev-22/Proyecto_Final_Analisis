import React, { useState, useEffect } from "react";
import styles from '@/styles/FormBuscar.module.css';
import { datosProductos } from '@/Components/Utils/TraerDatosFrirebase';

const FormBuscar = () => {
    {/**Almacenar la categoría de la base */ }

    const [checkState, setCheckState] = useState({
        input_check: false,
    });

    const onClickBuuton = () => {
        setCheckState((prevProps) => ({
            ...prevProps,
            input_check: !checkState.input_check,
        }));
    }


    const handleCheckChange = (event) => {
        const { name, value } = event.target;
        console.log(event);
        console.log(name, value);
        setCheckState((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };


    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const Producto = await datosProductos();
            console.log(Producto);
            setProductos(Producto);
        };

        fetchData();
    }, []);


    useEffect(() => {
        const headerContainer = document.getElementById('header-container');
        const dataContainer = document.getElementById('data-container');

        if (headerContainer && dataContainer) {
            const scrollHandler = () => {
                headerContainer.scrollLeft = dataContainer.scrollLeft;
            };

            dataContainer.addEventListener('scroll', scrollHandler);

            return () => {
                dataContainer.removeEventListener('scroll', scrollHandler);
            };
        }
    }, []);


    return (

        <form className={styles.formMu}>

            <section className={styles.formArriba}>

                <div className={styles.searchCont}>
                    <input className={styles.search} type="search" placeholder="Ingresé el ID ó Nombre" />
                    <input type="button" value="" className={styles.butSearch} />
                </div>

                <div className={styles.container1}>
                    {/* <input
                        onChange={handleCheckChange}
                        type="bu" id="miCheckbox"
                        //className={styles.check} 
                        name='input_check'
                        value='false'
                    />
                    <label forHtml="miCheckbox"></label> */}

                    <button type="button" onClick={onClickBuuton}>
                        <p className={styles.listGen}>Listado General</p>
                    </button>

                    {/* <p className={styles.listGen}>Listado General</p> */}
                </div>

                <div className={styles.container2}>
                    <p className={styles.filtText}>Filtro por Categoría</p>
                    <select className={styles.selectCat}>
                        <option value="">Seleccionar</option>
                        <option value="opcion1">Categoria 1</option>
                        <option value="opcion2">Categoria 2</option>
                        <option value="opcion3">Categoria 3</option>
                    </select>
                </div>
            </section>

            <section className={styles.formMedio}>
                <h1 className={styles.results}>Resultados de búsqueda</h1>
                {console.log(checkState)}
                {checkState.input_check ? (

                    <div className={styles.bodyBuscar}>
                        <div id="header-container" className={styles.headerContainer}>
                            <table className={styles.tableStyle}>
                                <thead className={styles.tbodyStyle}>
                                    <tr className={styles.trStyle}>
                                        <th className={styles.thStyle}>Id</th>
                                        <th className={styles.thStyle}> Nombre</th>
                                        <th className={styles.thStyle}>Id_Proveedor</th>
                                        <th className={styles.thStyle}>Cantidad</th>
                                        <th className={styles.thStyle}>Unidad</th>
                                        <th className={styles.thStyle}>Categoría</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div id="data-container" className={styles.dataContainer}>
                            <table className={styles.tableStyle}>
                                <tbody className={styles.tbodyStyle}>
                                    {productos.map((producto) => (
                                        <tr className={styles.trStyle}>
                                            <td className={styles.tdStyle}>{producto.id}</td>
                                            <td className={styles.tdStyle}>{producto.nombre}</td>
                                            <td className={styles.tdStyle}>{producto.id_proveedor}</td>
                                            <td className={styles.tdStyle}>{producto.cantidad}</td>
                                            <td className={styles.tdStyle}>{producto.unidad}</td>
                                            <td className={styles.tdStyle}>{producto.categoria}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table >
                        </div>

                    </div >
                ) : null}

            </section>

            <section className={styles.formBajo}>
                <button className={styles.boton}>Enviar</button>
            </section>

        </form>
    )
}

export { FormBuscar };