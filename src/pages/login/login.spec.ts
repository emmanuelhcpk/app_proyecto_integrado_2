import { ComponentFixture, async } from '@angular/core/testing';
import { TestUtils }               from '../../test';
import { LoginPage }          from './login';

let fixture: ComponentFixture<LoginPage> = null;
let instance: any = null;

describe('Page: LoginPage', () => {

  beforeEach(async(() => TestUtils.beforeEachCompiler([LoginPage]).then(compiled => {
    fixture = compiled.fixture;
    instance = compiled.instance;
  })));
  it('1 should be 1',()=>{
      expect(1).toBe(1);
  })
});