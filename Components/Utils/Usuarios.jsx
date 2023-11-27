import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase/ConectFirebase';

{/**Llamado de los datos de la base */ }
async function userDate(user, password) {
    const querySnapshot = await getDocs(collection(db, 'Usuarios'));
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        Usuario: doc.data().Usuario,
        Contrasena: doc.data().Contrasena
    }));

    // Encontrar el usuario en la base de datos y devuelve true o false
    const userIndex = data.findIndex((searchedUser) => searchedUser.Usuario === user);
    let userValid = false;
    let passwordValid = false;

    if (userIndex !== -1) {
        if (data[userIndex].Contrasena === password) {
            userValid = true;
            passwordValid = true;
        } else {
            userValid = true;
            passwordValid = false;
        }
    }

    return{
        userValid,
        passwordValid
    }

}

export { userDate };