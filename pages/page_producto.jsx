import React from "react";
import styles from '@/styles/Producto.module.css';
import Fecha from '@/Components/Utils/Fecha';
import Link from 'next/link';

export default function Producto() {
    return (
        <div className={styles.body}>

            <div className={styles.izquierdo}>

                <section className={styles.arriba}>

                    <Link className={styles.Buser} href={"/"}>
                    </Link>

                    <Link className={styles.Bhome} href={"/page_main"}>
                    </Link>

                </section>

                <section className={styles.Icentro}>

                    <Link href={"/page_agregar"} className={styles.buttonCentro}>
                        AGREGAR <br />
                        PRODUCTO
                    </Link>

                    <Link href={"/page_modificar"} className={styles.buttonCentro}>
                        MODIFICAR <br />
                        PRODUCTO
                    </Link>

                    <Link href={"/page_buscar"} className={styles.buttonCentro}>
                        BUSCAR <br />
                        PRODUCTO
                    </Link>

                    <Link href={"/page_eliminar"} className={styles.buttonCentro}>
                        ELIMINAR <br />
                        PRODUCTO
                    </Link>

                </section>

                <section className={styles.Iabajo}>
                    <Link className={styles.Bvolver} href={"/page_main"}>
                    </Link>
                </section>

            </div>

            <div className={styles.derecho}>
                <section className={styles.Dfecha}>
                    <Fecha />
                </section>

                <section className={styles.Dtitulo}>
                    Módulo<br /> de<br /> producto
                </section>

                <section className={styles.Dlogo}>
                    <div className={styles.imageProd}>

                    </div>
                </section>

            </div>
        </div>
    )
}