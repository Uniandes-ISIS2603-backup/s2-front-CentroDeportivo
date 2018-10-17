import { ObjetivoModuleModule } from './objetivo-module.module';

describe('ObjetivoModuleModule', () => {
  let objetivoModuleModule: ObjetivoModuleModule;

  beforeEach(() => {
    objetivoModuleModule = new ObjetivoModuleModule();
  });

  it('should create an instance', () => {
    expect(objetivoModuleModule).toBeTruthy();
  });
});
