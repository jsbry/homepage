import { h, render } from "/homepage/web_modules/preact.js";
import App from "./App.js";
var appMount = document.querySelector("#preact");
if (appMount)
    render(h(App, null), appMount);
export default App;