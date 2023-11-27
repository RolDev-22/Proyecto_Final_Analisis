import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/Agregar.module.css';
import Fecha from "@/Components/Utils/Fecha";
import Hora from "@/Components/Utils/Hora";
import { collection, addDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/ConectFirebase";
import { datosCategoria, datosProveedor, datosUnidad } from '@/Components/Utils/TraerDatosFrirebase';
import { ProductoNuevo } from '@/Components/Utils/ProductoNuevo';

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

    const [cantidadInput, setCantidadInput] = useState('');
    const handleInputnumber1 = (event) => {
        const inputValue = event.target.value;
        setCantidadInput(inputValue);
    };

    //extracción del valor del precio
    const [precioInput, setPrecioInput] = useState('');
    const handleInputnumber2 = (event) => {
        const inputValue = event.target.value;
        setPrecioInput(inputValue);
    };

    const handleFormSubmit = (event) => {//prescionar el botón de enviar
        event.preventDefault();
        const { /**constante de datos que se extraeran */
            Id_Producto,
            Nombre_Producto,
            Fecha_Vencimiento,
            Cantidad,
            Precio,
        } = event.target;
        /**Datos lamados por value directo no por target */
        const Categoria = opcionCategoria;
        const Unidad_Medida = opcionUnidad;
        const Nombre_Proveedor = opcionProveedor;

        const productosRef = collection(db, 'Productos');//obtenemos referencia de la colección de la base
        addDoc(productosRef, {//procedemos a añadir el producto a la base
            id_Producto: Id_Producto.value,
            nombre_Producto: Nombre_Producto.value,
            Categoria,
            Unidad_Medida,
            Nombre_Proveedor,
            fecha_Vencimiento: Fecha_Vencimiento.value,
            cantida: Cantidad.value,
            precio: Precio.value,
        })
            .then((doc) => {
                alert("Documento agregado con éxito con el ID:" + doc.id);
            })
            .catch((error) => {
                alert("Error al agregar el documento:", error);
            });

        // Limpiar los campos del formulario
        event.target.reset();
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

                <form className={styles.NewProd} onSubmit={handleFormSubmit}>
                    {/**Para ingreso del id del producto */}
                    <section className={styles.containerForm}>
                        <div className={styles.divContainer}>
                            <label className={styles.labels}>
                                Id Producto
                            </label>
                            <input
                                autoComplete="off"
                                type='text'
                                className={styles.textos}
                                name="Id_Producto"
                                placeholder='PD001'
                                maxLength={5}
                                required
                            />
                        </div>

                        {/**Para ingreso del nombre del producto */}
                        <div className={styles.divContainer}>
                            <label className={styles.labels}>
                                Nombre Producto
                            </label>
                            <input
                                autoComplete="off"
                                type='text'
                                className={styles.textos}
                                name="Nombre_Producto"
                                required
                            />
                        </div>

                        {/**Para ingreso de la categoría del producto */}
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

                        {/**Para ingreso de la unidad de medida del producto */}
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

                        {/**Para ingreso del nombre del proveedor del producto */}
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

                        {/**Para ingreso de la fecha de vencimient del producto */}
                        <div className={styles.divContainer}>
                            <label className={styles.labels}>
                                Fecha Vencimiento
                            </label>
                            <input
                                type='date'
                                className={styles.date}
                                name="Fecha_Vencimiento"
                                required
                            />
                        </div>
                    </section>

                    <section className={styles.containerForm3}>

                        {/**Para ingreso de la cantidad del producto */}
                        <div className={styles.divContainer}>
                            <label className={styles.labels}>
                                Cantidad
                            </label>
                            <input
                                autoComplete="off"
                                type='number'
                                className={styles.number}
                                name="Cantidad"
                                min={0}
                                onChange={handleInputnumber1}
                                required
                            />
                            {
                                cantidadInput && isNaN(cantidadInput) || cantidadInput < 0 ? (
                                    <p className={styles.mensError}>Error el valor debe de ser Positivo</p>
                                ) : null
                            }
                        </div>

                        {/**Para ingreso del precio del producto */}
                        <div className={styles.divContainer}>
                            <label className={styles.labels}>
                                Precio
                            </label>
                            <input
                                autoComplete="off"
                                type='number'
                                className={styles.number}
                                placeholder='₡'
                                name="Precio"
                                min={0}
                                onChange={handleInputnumber2}
                                required
                            />
                            {
                                precioInput && isNaN(precioInput) || precioInput < 0 ? (
                                    <p className={styles.mensError}>Error el valor debe de ser Positivo</p>
                                ) : null
                            }
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
