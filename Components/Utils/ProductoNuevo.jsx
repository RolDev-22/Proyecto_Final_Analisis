import { collection, addDoc } from "firebase/firestore";
import { db } from "@/firebase/ConectFirebase";

async function ProductoNuevo(dataEnv) {

        const productosRef = collection(db, 'Productos');

        try {
                // Extraer los campos del objeto nuevoRegistro
                const {
                        id_Producto,
                        nombre_Producto,
                        Categoria,
                        Unidad_Medida,
                        Nombre_Proveedor,
                        fecha_Vencimiento,
                        cantidad,
                        precio
                } = dataEnv;

                // Crear un nuevo objeto con los campos extraídos
                const productoData = {
                        id_Producto,
                        nombre_Producto,
                        Categoria,
                        Unidad_Medida,
                        Nombre_Proveedor,
                        fecha_Vencimiento,
                        cantidad,
                        precio
                };

                // Agregar el nuevo objeto (productoData) a la colección 'Productos'
                await addDoc(productosRef, productoData);
                console.log('Producto agregado:', productoData);
        } catch (error) {
                console.error('Error al agregar el producto:', error);
        }
}


export { ProductoNuevo };