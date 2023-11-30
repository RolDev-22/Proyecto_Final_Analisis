import { getDocs, collection } from 'firebase/firestore';
import { db } from '../../firebase/ConectFirebase';

async function datosCategoria() {
  const querySnapshot = await getDocs(collection(db, 'categorias'));
  const datos = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    Categoria: doc.data().Categoria,
  }));
  return datos;
}

async function datosUnidad() {
  const querySnapshot = await getDocs(collection(db, 'UnidadMedida'));
  const datos = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    Nombre: doc.data().Nombre,
    Sigla: doc.data().Sigla,
  }));
  return datos;
}

async function datosProductos() {
  const querySnapshot = await getDocs(collection(db, 'Productos'));
  const datos = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    id_Producto: doc.data().id_Producto,
    nombre_Producto: doc.data().nombre_Producto,
    opcion_Proveedor: doc.data().opcion_Proveedor,
    opcion_Categoria: doc.data().opcion_Categoria,
    cantidad: doc.data().cantidad,
    opcion_Unidad: doc.data().opcion_Unidad,
    precio: doc.data().precio,
    fecha_Vencimiento: doc.data().fecha_Vencimiento,
  }));
  return datos;
}

async function datosProveedor() {
  const querySnapshot = await getDocs(collection(db, 'provedor'));
  const datos = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    Nombre: doc.data().NombreProveedor,
  }));
  return datos;
}

export { datosCategoria, datosProveedor, datosUnidad, datosProductos };
