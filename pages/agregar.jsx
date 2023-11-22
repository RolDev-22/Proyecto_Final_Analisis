import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Agregar.module.css';
import Fecha from "@/Components/Fecha";
import Hora from "@/Components/Hora";

export default function Agregar() {

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
                            <select className={styles.selcts} >
                                <option value="someOption">Una opción</option>
                                <option value="otherOption">Otra opción</option>
                            </select>
                        </div>
                    </section>

                    <section className={styles.containerForm}>
                        <div className={styles.divContainer}>
                            <label className={styles.labels}>
                                Unidad de medida
                            </label>
                            <select className={styles.selcts}>
                                <option value="someOption">Una opción</option>
                                <option value="otherOption">Otra opción</option>
                            </select>
                        </div>
                        <div className={styles.divContainer}>
                            <label className={styles.labels}>
                                Nombre Proveedor
                            </label>
                            <select className={styles.selcts}>
                                <option value="someOption">Una opción</option>
                                <option value="otherOption">Otra opción</option>
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
