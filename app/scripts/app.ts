import * as $ from "jquery";
export class App {
      ielow: Array<any>;
      template:any;
      constructor() {
            this.template= require('./../templates/simple');
            this.ielow =[1,2,3,4,4,5,4,6,4];
      }
      init() {
            let filtro= this.ielow.filter((v,i,a)=>a.indexOf(v) === i)
            this.ielow.map((elm) => {
                  console.log(`inside app counter: ${elm}`);
            })
            $('.wrapper').append(this.template({name:'chido'}));
            this.jqueryTest();
      }
      jqueryTest() {
            $('h1').html('Hello ielow!');
      }
}


