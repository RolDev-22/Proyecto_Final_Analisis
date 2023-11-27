import React from "react";
import styles from '@/styles/Main.module.css';
import Fecha from '@/Components/Utils/Fecha';
import Link from 'next/link';

export default function Main() {
    return (
        <div className={styles.bodyM}>

            <div className={styles.arriba}>
                <p className={styles.cambioDolar}>Tipo de cambio del dolar para el día {< Fecha />} Compra ₡535 Venta ₡520</p>
            </div>

            <section className={styles.sectContain}>


                <div className={styles.izquierdo}>

                    <section className={styles.Iarriba}>

                        <Link className={styles.IBuser} href={"/"}>
                        </Link>

                    </section>
                    <section className={styles.Imedio}>

                        <span className={styles.Itittle}>
                            Módulos
                        </span>

                        <Link href="/main" className={styles.buttonCentro}>
                            RECETAS
                        </Link>

                        <Link href="/main" className={styles.buttonCentro}>
                            PROVEEDORES
                        </Link>

                        <Link href="/producto" className={styles.buttonCentro}>
                            PRODUCTOS                        </Link>

                        <Link href="/main" className={styles.buttonCentro}>
                            FACTURACIÓN
                        </Link>

                        <Link href="/main" className={styles.buttonCentro}>
                            COMPRA
                        </Link>

                        <Link href="/main" className={styles.buttonCentro}>
                            INVENTARIO
                        </Link>

                        <Link href="/main" className={styles.buttonCentro}>
                            REPORTES
                        </Link>

                    </section>

                </div>

                <div className={styles.derecho}>

                    <section className={styles.Darriba}>
                        < Fecha />
                    </section>

                    <section className={styles.Dmedio}>
                        <span className={styles.title}>
                            Módulo {<br />}
                            Principal
                        </span>
                    </section>

                    <section className={styles.Dbajo}>
                        <div className={styles.logo}>

                        </div>
                    </section>

                </div>

            </section>
        </div>
    )
}