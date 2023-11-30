import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Eliminar.module.css';
import Fecha from "@/Components/Utils/Fecha";
import Hora from "@/Components/Utils/Hora";
import {EliminarProducto} from "@/Components/Utils/EliminarProducto"


export default function Eliminar() {



    return (
        <div className={styles.bodyAg}>
            <title>Pagina De Eliminar Producto</title>

            <section className={styles.Bsuperior}>
                <Link href={"/page_main"} className={styles.Shome}>

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


            <section className={styles.Binferior}>

                <form className={styles.formMu}>

                    <section className={styles.formArriba}>

                        <div className={styles.searchCont}>
                            <input className={styles.search} type="search" placeholder="Ingresé el ID ó Nombre" />
                            <input type="button" value="" className={styles.butSearch} />
                        </div>

                    </section>

                    <section className={styles.formMedio}>
                        <h1 className={styles.results}>Resultados de búsqueda</h1>

                        <EliminarProducto/>
                    </section>

                    <section className={styles.formBajo}>
                        <button className={styles.boton}>Enviar</button>
                    </section>

                </form>
            </section>

        </div>
    )
}