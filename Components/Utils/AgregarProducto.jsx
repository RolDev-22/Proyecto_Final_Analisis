import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase/ConectFirebase';

async function AgregarProducto( dataObject ) {
    const referenceCollection = db.getDocs()

    addDoc(referenceCollection, {
        id_Producto: dataObject.id_Producto,
        nombre_Producto: dataObject.nombre_Producto,
        Categoria: dataObject.Categoria,
        Unidad_Medida: dataObject.Unidad_Medida,
        Nombre_Proveedor: dataObject.Nombre_Proveedor,
        fecha_Vencimiento: dataObject.fecha_Vencimiento,
        cantida: dataObject.cantida,
        precio: dataObject.precio,
    })
        .then((doc) => {
            alert("Documento agregado con éxito con el ID:" + doc.id);
        })
        .catch((error) => {
            alert("Error al agregar el documento:", error);
        });

}

export { AgregarProducto };