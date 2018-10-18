import { DeportistaModule } from './deportista.module';

describe('DeportistaModule', () => {
  let deportistaModule: DeportistaModule;

  beforeEach(() => {
    deportistaModule = new DeportistaModule();
  });

  it('should create an instance', () => {
    expect(deportistaModule).toBeTruthy();
  });
});
