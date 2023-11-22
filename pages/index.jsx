import styles from "@/styles/Index.module.css";
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function FormLog() {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('')
    const [validUser, setvalidUser] = useState(false);
    const [validPassword, setValidPassword] = useState(false);
    const router = useRouter();

    const handleUserChance = (event) => {
        const { value } = event.target;
        setUser(value);

        if (value === 'Rolando' || value === 'Kevin' || value === 'Are') {
            setvalidUser(true);
        } else {
            setvalidUser(false);
        }
    }

    const handlePasswordChance = (event) => {
        const {value} = event.target;
        setPassword(value);

        if(value === '1234') {
            setValidPassword(true);
        }else{
            setValidPassword(false);
        }

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(validUser && validPassword) {
            router.push('/main');
        }else{
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
                            onChange={handleUserChance}
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
                            onChange={handlePasswordChance}
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