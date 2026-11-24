import { Route, Switch } from "wouter";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Health from "./pages/Health";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Simulator from "./pages/Simulator";
import Solutions from "./pages/Solutions";
import Technology from "./pages/Technology";

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/sobre" component={About} />
        <Route path="/solucoes" component={Solutions} />
        <Route path="/tecnologia" component={Technology} />
        <Route path="/saude" component={Health} />
        <Route path="/simulador" component={Simulator} />
        <Route path="/contato" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}
