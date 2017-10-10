import * as $ from "jquery";
// import * as Handelbars from 'handlebars';
export class App {
      ielow: Array<number>;
      testVar:boolean=true;
      template:Function;
      templateOutput:string;
      constructor() {
            this.ielow =[1,2,3,4,4,5,4,6,4];
            this.template= require('./../templates/simple.hbs');
            this.templateOutput= this.template({name:'ielow'});
      }
      init() {
            let filtro= this.ielow.filter((v,i,a)=>a.indexOf(v) === i)
            this.ielow.map((elm) => {
                  //console.log(`inside app counter: ${elm}`);
            })
            $('.wrapper').append(this.templateOutput);
            this.jqueryTest();
      }
      jqueryTest() {
            $('h1').html('Hello ielow!');
      }
      testing():boolean{
            return true;
      }
}


