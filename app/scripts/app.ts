import * as $ from "jquery";
export class App {
      ielow: Array<number>;
      constructor() {
            this.ielow = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
      }
      init() {
            this.ielow.map((elm) => {
                  console.log(`inside app counter: ${elm}`);
            })
            this.jqueryTest();
      }
      jqueryTest() {
            $('h1').html('Desde jqry')
      }
}


