import React, { Component } from 'react';
import styles from '@/styles/BuscarGeneral.module.css';

class BuscarGeneral extends Component {
  constructor(props) {
    super(props);
    this.state = {
      busqueda: '',
      cantidad: 0,
      proveedores: [],
      productos: [],
      categorias: [],
      unidades: [],
    };
  }

  componentDidMount() {
    // Mock API call
    setTimeout(() => {
      this.setState({
        proveedores: [
          { id: 'PRO01', nombre: 'Proveedor 1' },
          { id: 'PR002', nombre: 'Proveedor 2' },
          { id: 'PR003', nombre: 'Proveedor 3' },
        ],
        productos: [
          { id: 'PD001', nombre: 'Producto 1' },
          { id: 'PD002', nombre: 'Producto 2' },
          { id: 'PD003', nombre: 'Producto 3' },
        ],
        categorias: [
          { id: 'CAT001', nombre: 'Categoria 1' },
          { id: 'CAT002', nombre: 'Categoria 2' },
          { id: 'CAT003', nombre: 'Categoria 3' },
        ],
        unidades: [
          { id: 'UNI001', nombre: 'Unidad 1' },
          { id: 'UNI002', nombre: 'Unidad 2' },
          { id: 'UNI003', nombre: 'Unidad 3' },
        ],
      });
    }, 1000);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className={styles.divBody}>
        <h1>Buscar General</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Buscar:
            <input
              type="text"
              value={this.state.busqueda}
              onChange={(e) => this.setState({ busqueda: e.target.value })}
            />
          </label>
          <label>
            Cantidad:
            <input
              type="number"
              value={this.state.cantidad}
              onChange={(e) => this.setState({ cantidad: e.target.value })}
            />
          </label>
          <label>
            Proveedor:
            <select
              value={this.state.proveedor}
              onChange={(e) => this.setState({ proveedor: e.target.value })}
            >
              <option value="">Seleccione un proveedor</option>
              {this.state.proveedores.map((proveedor) => (
                <option key={proveedor.id} value={proveedor.id}>
                  {proveedor.nombre}
                </option>
              ))}
            </select>
          </label>
          <label>
            Producto:
            <select
              value={this.state.producto}
              onChange={(e) => this.setState({ producto: e.target.value })}
            >
              <option value="">Seleccione un producto</option>
              {this.state.productos.map((producto) => (
                <option key={producto.id} value={producto.id}>
                  {producto.nombre}
                </option>
              ))}
            </select>
          </label>
          <label>
            Categoria:
            <select
              value={this.state.categoria}
              onChange={(e) => this.setState({ categoria: e.target.value })}
            >
              <option value="">Seleccione una categoria</option>
              {this.state.categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nombre}
                </option>
              ))}
            </select>
          </label>
          <label>
            Unidad:
            <select
              value={this.state.unidad}
              onChange={(e) => this.setState({ unidad: e.target.value })}
            >
              <option value="">Seleccione una unidad</option>
              {this.state.unidades.map((unidad) => (
                <option key={unidad.id} value={unidad.id}>
                  {unidad.nombre}
                </option>
              ))}
            </select>
          </label>
          <button type="submit">Buscar</button>
        </form>
      </div>
    );
  }
}

export default BuscarGeneral;