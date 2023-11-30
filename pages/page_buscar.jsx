import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Buscar.module.css';
import Fecha from "@/Components/Utils/Fecha";
import Hora from "@/Components/Utils/Hora";


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


            <section className={styles.Binferior}>

                <form className={styles.formMu}>

                    <section className={styles.formArriba}>

                        <div className={styles.searchCont}>
                            <input className={styles.search} type="search" placeholder="Ingresé el ID ó Nombre" />
                            <input type="button" value="" className={styles.butSearch} />
                        </div>

                        <div className={styles.container1}>
                            <input type="checkbox" id="miCheckbox" className={styles.check} />
                            <label for="miCheckbox"></label>
                            <p className={styles.listGen}>Listado General</p>
                        </div>

                        <div className={styles.container2}>
                            <p className={styles.filtText}>Filtro por Categoría</p>
                            <select className={styles.selectCat}>
                                <option value="">Seleccionar</option>
                                <option value="opcion1">Categoria 1</option>
                                <option value="opcion2">Categoria 2</option>
                                <option value="opcion3">Categoria 3</option>
                            </select>
                        </div>
                    </section>

                    <section className={styles.formMedio}>
                        <h1 className={styles.results}>Resultados de búsqueda</h1>
                    </section>
                {/************************************************************************* */
                    <section className={styles.formMedio2}> 
                    <div className={styles.container3}>
                        <p className={styles.filtText}>Filtro por Proveedor</p>
                        <select className={styles.selectCat}>
                            <option value="">Seleccionar</option>
                            <option value="opcion1">Proveedor 1</option>
                            <option value="opcion2">Proveedor 2</option>
                            <option value="opcion3">Proveedor 3</option>
                        </select>
                    </div>
                </section>


                /**************************************************************************** */}    
                        

                    <section className={styles.formBajo}>
                        <button className={styles.boton}>Enviar</button>
                    </section>

                </form>
            </section>


        </div >
    )
}