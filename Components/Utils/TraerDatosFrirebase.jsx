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
    nombre: doc.data().nombre_Producto,
    nombre_proveedor: doc.data().Nombre_Proveedor,
    categoria: doc.data().Categoria,
    cantidad: doc.data().cantida,
    unidad_medida: doc.data().Unidad_Medida,
    precio: doc.data().precio,
    fecha_venc: doc.data().fecha_Vencimiento,
    
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
