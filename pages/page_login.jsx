import styles from "@/styles/Index.module.css";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { userDate } from "@/Components/Utils/Usuarios";

export default function LoguinForm() {

    /**Declaramos las diversas constantes que se pretenden usar */
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('')
    const [validUser, setValidUser] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const router = useRouter();
    const [status, setStatus] = useState(false);

    /**Extracción del valor que se ingresa en campo para usuairio del login */
    const handleUserChange = (e) => {
        const { value } = e.target;
        setUser(value); /** seteo del valor que se brindó en el campo suario a su variable correspondiente*/
    }

    /**Extracción del valor que se ingresa en campo para contraseña del login */
    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setPassword(value);/** seteo del valor que se brindó en el campo de contraseña a su variable correspondiente*/
    }

    useEffect(() => { /***Efecto de estado para la validación de usuario y contraseña en el archivo de la base */
        const checkUser = async () => {
            const dataFound = await userDate(user, password); /**Constante que almacena la respuesta de la función de comprobaciones de la base de datos*/
            setValidUser(dataFound.userValid); /**Seteo de validación del usuario según la base */
            setValidPassword(dataFound.passwordValid); /**Seteo de validación de la contraseña según la base */
        };
        checkUser();
    }, [user, password]);

    const handleSubmit = async (event) => { /**Función asincronica para cuando se envía el form */
        event.preventDefault();

        if ((validUser && validPassword)) {/**Si los estados de estas variables son true */
            setStatus(true);
            localStorage.setItem('status', status);
            console.log(status);
            router.push('/main');
        } else {
            alert("Usuario o contraseña erronea");
        }
    }

    return (
        <div className={styles.Fbody}>
            <h1 className={styles.title}>Inicio Sesión</h1>

            <div className={styles.logo}>
            </div>

            <form className={styles.FormLog} onSubmit={handleSubmit}>
                <div className={styles.FormBody}>
                    <label className={styles.Ftexttos}>Nombre de usuario</label>

                    <div className={styles.divIcon}>
                        <span className={styles.icon1}></span>
                        <input
                            className={styles.Fuser}
                            type="text"
                            autoComplete="off"
                            placeholder="Ingrese su usuario"
                            name="user"
                            required="true"
                            value={user}
                            onChange={handleUserChange}
                        />
                        {
                            user.length > 0 && (
                                validUser ? (
                                    <p className={styles.Valid}>Usuario Correcto</p>
                                ) : (
                                    <p className={styles.Invalid}>Error Usuario Incorrecto</p>
                                )
                            )
                        }
                    </div>

                    <label className={styles.Ftexttos}>Contraseña</label>

                    <div className={styles.divIcon}>
                        <span className={styles.icon2}></span>
                        <input className={styles.Fpassword}
                            type="password"
                            autoComplete="off"
                            placeholder="Ingrese su contraseña"
                            name="password"
                            required="true"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                        {
                            password.length > 0 && (
                                validPassword ? (
                                    <p className={styles.Valid}>Contraseña Válida</p>
                                ) : (
                                    <p className={styles.Invalid}>Error contraseña Inválida</p>
                                )
                            )
                        }
                    </div>

                    <div className={styles.button}>
                        <input
                            className={styles.Fsubmir}
                            type="submit"
                            value={"Ingresar"}
                        />
                    </div>
                </div>
            </form>
        </div>
    )

}