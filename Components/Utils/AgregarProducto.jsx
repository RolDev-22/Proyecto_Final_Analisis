import { addDoc, collection } from 'firebase/firestore';
import { db } from '@/firebase/ConectFirebase';

async function AgregarProducto ({dataObject}) {

    try {
        const infProducto = {
            id_Producto: dataObject.id_Producto,
            nombre_Producto: dataObject.nombre_Producto,
            opcion_Categoria: dataObject.opcion_Categoria,
            opcion_Unidad: dataObject.opcion_Unidad,
            opcion_Proveedor: dataObject.opcion_Proveedor,
            fecha_Vencimiento: dataObject.fecha_Vencimiento,
            cantidad: dataObject.cantidad,
            precio: dataObject.precio
        };

        const productosRef = await collection(db, 'Productos');
        const docRef = await addDoc(productosRef, infProducto);
        console.log('Producto añadido con ID: ', docRef.id);
    } catch (error) {
        console.error('Error al agregar el producto: ', error);
    }

}
export {AgregarProducto};
