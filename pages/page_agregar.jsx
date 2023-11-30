import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Agregar.module.css';
import Fecha from "@/Components/Utils/Fecha";
import Hora from "@/Components/Utils/Hora";
import { FormAgregar } from '@/Components/FormAgregar';

export default function Agregar() {

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
               < FormAgregar />
            </section >

        </div >
    );
}
