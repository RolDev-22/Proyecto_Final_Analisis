import { Router, Route, Routes } from 'react-router-dom';
import Home from '../pages'
import Main from '../pages/page_main';
import Producto from '../pages/page_producto';
import Agregar from '../pages/page_agregar';
import Modificar from '../pages/page_modificar';
import Eliminar from '../pages/page_eliminar';
import Buscar from '../pages/page_buscar';

const Routes = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Home} />
          <Route path="/page_main" component={Main} />
          <Route path="/page_producto" component={Producto} />
          <Route path="/page_agregar" component={Agregar} />
          <Route path="/page_modificar" component={Modificar} />
          <Route path="/page_buscar" component={Buscar} />
          <Route path="/page_eliminar" component={Eliminar} />
          <Route path="*" component={Main} />
          <Route component={() => <Redirect to="/" />} />
      </Routes>
    </Router>
  );
};

export default Routes;