import {App} from "./scripts/app";
import * as $ from "jquery";

let app:App= new App();
$(document).ready(()=>{
    app.init();    
});
