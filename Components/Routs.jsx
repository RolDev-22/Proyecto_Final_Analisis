import { Router, Route, Routes } from 'react-router-dom';
import FormLog from '../pages'
import Main from '../pages/main';
import Producto from '../pages/producto';
import Agregar from '../pages/agregar';
import Modificar from '../pages/modificar';
import Eliminar from '../pages/eliminar';
import Buscar from '../pages/buscar';

const Routes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={FormLog} />
          <Route path="/Main" component={Main} />
          <Route path="/producto" component={Producto} />
          <Route path="/agregar" component={Agregar} />
          <Route path="/modificar" component={Modificar} />
          <Route path="/buscar" component={Buscar} />
          <Route path="/eliminar" component={Eliminar} />
        <Route component={() => <Redirect to="/" />} />
      </Routes>
    </Router>
  );
};

export default Routes;