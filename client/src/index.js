import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import { App } from './App';

const app = App();

ReactDOM.render(
  app,
  document.getElementById('root')
);
registerServiceWorker();
