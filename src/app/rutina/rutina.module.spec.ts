import { RutinaModule } from './rutina.module';

describe('RutinaModule', () => {
  let rutinaModule: RutinaModule;

  beforeEach(() => {
    rutinaModule = new RutinaModule();
  });

  it('should create an instance', () => {
    expect(rutinaModule).toBeTruthy();
  });
});
