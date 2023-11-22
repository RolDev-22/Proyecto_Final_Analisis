import React from "react";
import styles from '@/styles/Producto.module.css';
import Fecha from '@/Components/Fecha';
import Link from 'next/link';

export default function Producto() {
    return (
        <div className={styles.body}>

            <div className={styles.izquierdo}>

                <section className={styles.arriba}>

                    <Link className={styles.Buser} href={"/"}>
                    </Link>

                    <Link className={styles.Bhome} href={"/main"}>
                    </Link>

                </section>

                <section className={styles.Icentro}>

                    <Link href={"/agregar"} className={styles.buttonCentro}>
                        AGREGAR <br />
                        PRODUCTO
                    </Link>

                    <Link href={"/"} className={styles.buttonCentro}>
                        MODIFICAR <br />
                        PRODUCTO
                    </Link>

                    <Link href={"/"} className={styles.buttonCentro}>
                        BUSCAR <br />
                        PRODUCTO
                    </Link>

                    <Link href={"/"} className={styles.buttonCentro}>
                        ELIMINAR <br />
                        PRODUCTO
                    </Link>

                </section>

                <section className={styles.Iabajo}>
                    <Link className={styles.Bvolver} href={"/main"}>
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