import * as $ from "jquery";
export class App {
      ielow: Array<any>;
      constructor() {
            this.ielow =[1,2,3,4,4,5,4,6,4];

      }
      init() {
            let filtro= this.ielow.filter((v,i,a)=>a.indexOf(v) === i)
            this.ielow.map((elm) => {
                  console.log(`inside app counter: ${elm}`);
            })
            console.log(filtro)
            this.jqueryTest();
      }
      jqueryTest() {
            $('h1').html('Hello ielow!')
      }
}


