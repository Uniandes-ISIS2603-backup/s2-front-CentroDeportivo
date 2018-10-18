import { EspecialistaModule } from './especialista.module';

describe('EspecialistaModule', () => {
  let especialistaModule: EspecialistaModule;

  beforeEach(() => {
    especialistaModule = new EspecialistaModule();
  });

  it('should create an instance', () => {
    expect(especialistaModule).toBeTruthy();
  });
});
