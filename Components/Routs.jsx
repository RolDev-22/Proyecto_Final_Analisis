import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FormLog from '../pages/index'
import Main from '../pages/main';
import Producto from '../pages/producto';
import Agregar from '../pages/agregar';


const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={FormLog} />
        <Route path="/main" component={Main} />
        <Route path="/producto" component={Producto} />
        <Route path="/agregar" component={Agregar} />
      </Switch>
    </Router>
  );
};

export default Routes;