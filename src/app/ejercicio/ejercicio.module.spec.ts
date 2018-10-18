import { EjercicioModule } from './ejercicio.module';

describe('EjercicioModule', () => {
  let ejercicioModule: EjercicioModule;

  beforeEach(() => {
    ejercicioModule = new EjercicioModule();
  });

  it('should create an instance', () => {
    expect(ejercicioModule).toBeTruthy();
  });
});
