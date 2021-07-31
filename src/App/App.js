import Header from "../Containers/Header";
import ГЛАВНАЯ from "../Pages/ГЛАВНАЯ";
import НАС from "../Pages/НАС";
import ПРОИЗВОДСТВО from "../Pages/ПРОИЗВОДСТВО";
import УСЛУГИ from "../Pages/УСЛУГИ";
import ПРОДУКЦИЯ from "../Pages/ПРОДУКЦИЯ";
import КОНСТРУКТОР from "../Pages/КОНСТРУКТОР";
import НОВОСТИ from "../Pages/НОВОСТИ";
import КОНТАКТЫ from "../Pages/КОНТАКТЫ";
import { Route, Switch } from "react-router-dom";
import Footer from "../Containers/Footer";

const routrs = [
  { path: "/", components: <ГЛАВНАЯ />, exact: true },
  { path: "/НАС", components: <НАС />, },
  { path: "/ПРОИЗВОДСТВО", components: <ПРОИЗВОДСТВО />, },
  { path: "/УСЛУГИ", components: <УСЛУГИ /> },
  { path: "/ПРОДУКЦИЯ", components: <ПРОДУКЦИЯ /> },
  { path: "/КОНСТРУКТОР", components: <КОНСТРУКТОР /> },
  { path: "/НОВОСТИ", components: <НОВОСТИ /> },
  { path: "/КОНТАКТЫ", components: <КОНТАКТЫ /> },
]

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        {
          routrs.map((value, index) => <Route exact={value.exact} path={value.path} key={value.path}>
            {value.components}
          </Route>)
        }
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
