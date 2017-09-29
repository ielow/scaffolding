import {App} from "./scripts/app";

import * as $ from "jquery";
// CSS Styles Imports 

import './styles/styles';
import './styles/stylesheet';


let app:App= new App();
$(document).ready(()=>{
    app.init(); 
});
