import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Buscar.module.css';
import Fecha from "@/Components/Utils/Fecha";
import Hora from "@/Components/Utils/Hora";
import { FormBuscar } from '@/Components/FormBuscar';


export default function Buscar() {

    return (
        <div className={styles.bodyAg}>
             <title>Pagina De Buscar Producto</title>

            <section className={styles.Bsuperior}>
                <Link href={"/page_main"} className={styles.Shome}>

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


            <section className={styles.Binferior}>
                <FormBuscar/>
            </section>


        </div >
    )
}