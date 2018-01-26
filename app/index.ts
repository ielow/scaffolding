import {App} from "./scripts/app";
import * as $ from "jquery";
// CSS Styles Imports 

import './styles/styles';
import './styles/stylesheet';
// var template= require('./templates/simple');

let app:App= new App();
$(document).ready(()=>{
    app.init(); 
});
