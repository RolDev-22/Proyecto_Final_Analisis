import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Eliminar.module.css';
import Fecha from "@/Components/Fecha";
import Hora from "@/Components/Hora";

export default function Eliminar() {

    return (
        <div className={styles.bodyAg}>

            <section className={styles.Bsuperior}>
                <Link href={"/main"} className={styles.Shome}>

                </Link>

                <section className={styles.Btitulo}>
                    <label className={styles.Title}>
                        Eliminar Producto
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
        </div>
    )
}