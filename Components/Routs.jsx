import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormLog from '../pages/index'
import Main from '../pages/main';
import Producto from '../pages/producto';
import Agregar from '../pages/agregar';
import Modificar from '../pages/modificar';
import Buscar from '../pages/buscar';
import Eliminar from '../pages/eliminar';


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FormLog} />
        <Route path="/main" component={Main} />
        <Route path="/producto" component={Producto} />
        <Route path="/agregar" component={Agregar} />
        <Route path="/modificar" component={Modificar} />
        <Route path="/buscar" component={Buscar} />
        <Route path="/eliminar" component={Eliminar} />
      </Switch>
    </Router>
  );
};

export default Routes;