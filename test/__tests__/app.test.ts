import {App} from './../../app/scripts/app'
let Appi=new App()
test('True from app testing', () => {
    Appi.init();
    expect(Appi.testing()).toBe(true);
});
  