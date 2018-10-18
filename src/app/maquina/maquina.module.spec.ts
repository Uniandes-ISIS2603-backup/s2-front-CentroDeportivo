import { MaquinaModule } from './maquina.module';

describe('MaquinaModule', () => {
  let maquinaModule: MaquinaModule;

  beforeEach(() => {
    maquinaModule = new MaquinaModule();
  });

  it('should create an instance', () => {
    expect(maquinaModule).toBeTruthy();
  });
});
