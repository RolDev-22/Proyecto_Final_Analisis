import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '@/styles/Agregar.module.css';
import Fecha from "@/Components/Utils/Fecha";
import Hora from "@/Components/Utils/Hora";
import { datosCategoria, datosProveedor, datosUnidad } from '@/Components/Utils/TraerDatosFrirebase';
import { AgregarProducto } from '@/Components/Utils/AgregarProducto';
//import { addDoc, collection } from 'firebase/firestore';
//import { db } from '@/firebase/ConectFirebase';

export default function Agregar() {

    {/**Almacenar la categoría de la base */ }
    const [categorias, setCategorias] = useState([]);

    const [proveedores, setProveedores] = useState([]);

    const [unidadMedida, setUnidadMedida] = useState([]);

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

    const [data, setData] = useState({
        id_Producto: '',
        nombre_Producto: '',
        opcion_Categoria:'',
        opcion_Unidad: '',
        opcion_Proveedor: '',
        fecha_Vencimiento: '',
        cantidad: '',
        precio: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setData((prevProps) => ({
            ...prevProps,
            [name]: value
        }));
    };

    const handleFormSubmit = async (event) => {//prescionar el botón de enviar
        event.preventDefault();

        try{
            console.log(data);
            await AgregarProducto(data);
        }catch(error){
            console.error('Error al agregar el producto: ', error);
        }
        //AGREGAR DATOS A FIREBASE EN "PRODUCTOS"
        //DESCOMENTAR //import { addDoc, collection } from 'firebase/firestore';
        //import { db } from '@/firebase/ConectFirebase';


        // try {
        //     const productosRef = collection(db, 'Productos');
        //     const docRef = await addDoc(productosRef, datos);
        //     console.log('Producto añadido con ID: ', docRef.id);
        // } catch (error) {
        //     console.error('Error al agregar el producto: ', error);
        // }

        event.target.reset();
    };




    return (
        <div className={styles.bodyAg}>

            <section className={styles.Bsuperior}>
                <Link href={"/page_main"} className={styles.Shome}>

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
                                name="id_Producto"
                                placeholder='PD001'
                                maxLength={5}
                                onChange={handleInputChange}
                                value={data.id_Producto}
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
                                name="nombre_Producto"
                                onChange={handleInputChange}
                                value={data.nombre_Producto}
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
                                name="opcion_Categoria"
                                onChange={handleInputChange}
                                value={data.opcion_Categoria}
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
                                name="opcion_Unidad"
                                onChange={handleInputChange}
                                value={data.opcion_Unidad}
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
                                name="opcion_Proveedor"
                                onChange={handleInputChange}
                                value={data.opcion_Proveedor}
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
                                name="fecha_Vencimiento"
                                onChange={handleInputChange}
                                value={data.fecha_Vencimiento}
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
                                name="cantidad"
                                min={0}
                                onChange={handleInputChange}
                                value={data.cantidad}
                                required
                            />
                            {
                                Number(data.cantidad) < 0 && (
                                    <p className={styles.mensError}>Error el valor debe de ser Positivo</p>
                                )
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
                                name="precio"
                                min={0}
                                onChange={handleInputChange}
                                value={data.precio}
                                required
                            />
                            {
                                Number(data.precio) < 0 &&  (
                                    <p className={styles.mensError}>Error el valor debe de ser Positivo</p>
                                )
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
