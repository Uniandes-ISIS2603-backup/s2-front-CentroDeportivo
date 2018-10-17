import { DeportistaModuleModule } from './deportista-module.module';

describe('DeportistaModuleModule', () => {
  let deportistaModuleModule: DeportistaModuleModule;

  beforeEach(() => {
    deportistaModuleModule = new DeportistaModuleModule();
  });

  it('should create an instance', () => {
    expect(deportistaModuleModule).toBeTruthy();
  });
});
