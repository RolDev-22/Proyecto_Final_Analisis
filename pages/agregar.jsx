import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '@/styles/Agregar.module.css';
import Fecha from "@/Components/Fecha";
import Hora from "@/Components/Hora";
import { datosCategoria, datosProveedor, datosUnidad } from "@/Components/TraerDatosFrirebase";


export default function Agregar() {

    {/**Almacenar la categoría de la base */ }
    const [categorias, setCategorias] = useState([
        {
            id: Number,
            Categoria: String
        }
    ]);

    const [proveedores, setProveedores] = useState([
        {
            id: Number,
            Nombre: String,
        }
    ]);

    const [unidadMedida, setUnidadMedida] = useState([
        {
            id: Number,
            Nombre: String,
            Sigla: String
        }
    ]);

    {/**Llamar los datos desde la base */ }
    useEffect(() => {
        const fetchData = async () => {
            const categoria = await datosCategoria();
            setCategorias(categoria);

            const proveedor = await datosProveedor();
            setProveedores(proveedor);

            const unidad = await datosUnidad();
            setUnidadMedida(unidad);
        };

        fetchData();
    }, []);

    {/**Insertar lo que se seleccione en el select de categorias */ }
    const [opcionCategoria, setOpcionCategoria] = useState("1");
    const handleChange1 = (event) => {
        setOpcionCategoria(event.target.value);
    };

    const [opcionProveedor, setOpcionProveedor] = useState("1");
    const handleChange2 = (event) => {
        setOpcionProveedor(event.target.value);
    };

    const [opcionUnidad, setOpcionUnidad] = useState("1");
    const handleChange3 = (event) => {
        setOpcionUnidad(event.target.value);
    };

    return (
        <div className={styles.bodyAg}>

            <section className={styles.Bsuperior}>
                <Link href={"/main"} className={styles.Shome}>

                </Link>

                <section className={styles.Btitulo}>
                    <label className={styles.Title}>
                        Agregar Producto
                    </label>

                    <label className={styles.Fecha}>
                        <Fecha />
                    </label>

                    <label className={styles.Hora}>
                        <Hora />
                    </label>
                </section>

                <Link href={"/"} className={styles.Suser}>

                </Link>
            </section>

            <section className={styles.Binferior}>

                <form className={styles.NewProd} onSubmit={"/"}>

                    <section className={styles.containerForm}>
                        <div className={styles.divContainer}>
                            <label className={styles.labels}>
                                Id Producto
                            </label>
                            <input autoComplete="off" type='text' className={styles.textos} />
                        </div>
                        <div className={styles.divContainer}>
                            <label className={styles.labels}>
                                Nombre Producto
                            </label>
                            <input autoComplete="off" type='text' className={styles.textos} />
                        </div>
                        <div className={styles.divContainer}>
                            <label className={styles.labels}>
                                Tipo/Catgoría
                            </label>
                            <select
                                className={styles.selcts}
                                name="opcionCategoria"
                                value={opcionCategoria}
                                onChange={handleChange1}
                                required
                            >
                                {categorias.map((categoria) => (
                                    <option key={categoria.id} value={categoria.id}>
                                        {categoria.Categoria}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </section>

                    <section className={styles.containerForm}>
                        <div className={styles.divContainer}>
                            <label className={styles.labels}>
                                Unidad de medida
                            </label>
                            <select
                                className={styles.selcts}
                                name="opcionUnidad"
                                value={opcionUnidad}
                                onChange={handleChange3}
                                required
                            >
                                {unidadMedida.map((unidad) => (
                                    <option key={unidad.id} value={unidad.id}>
                                        {unidad.Sigla} - {unidad.Nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.divContainer}>
                            <label className={styles.labels}>
                                Nombre Proveedor
                            </label>
                            <select
                                className={styles.selcts}
                                name="opcionProveedor"
                                value={opcionProveedor}
                                onChange={handleChange2}
                                required
                            >
                                {proveedores.map((proveedor) => (
                                    <option key={proveedor.id} value={proveedor.id}>
                                        {proveedor.Nombre}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={styles.divContainer}>
                            <label className={styles.labels}>
                                Fecha Vencimiento
                            </label>
                            <input type='date' className={styles.date} />
                        </div>
                    </section>

                    <section className={styles.containerForm3}>
                        <div className={styles.divContainer}>
                            <label className={styles.labels}>
                                Cantidad
                            </label>
                            <input autoComplete="off" type='text' className={styles.textos} />
                        </div>
                        <div className={styles.divContainer}>
                            <label className={styles.labels}>
                                Precio
                            </label>
                            <input autoComplete="off" type='text' className={styles.textos} placeholder='₡' />
                        </div>
                    </section>

                    <section className={styles.containerForm}>
                        <div className={styles.divContainer4}>
                            <input type='submit' value="Enviar" className={styles.sibmit} />
                        </div>
                    </section>
                </form>

            </section >

        </div >
    );
}
