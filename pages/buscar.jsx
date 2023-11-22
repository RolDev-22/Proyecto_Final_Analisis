import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Buscar.module.css';
import Fecha from "@/Components/Fecha";
import Hora from "@/Components/Hora";

export default function Buscar() {

    return (
        <div className={styles.bodyAg}>

            <section className={styles.Bsuperior}>
                <Link href={"/main"} className={styles.Shome}>

                </Link>

                <section className={styles.Btitulo}>
                    <label className={styles.Title}>
                        Buscar Producto
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