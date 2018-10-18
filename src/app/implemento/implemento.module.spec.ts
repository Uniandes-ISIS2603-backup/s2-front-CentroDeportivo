import { ImplementoModule } from './implemento.module';

describe('ImplementoModule', () => {
  let implementoModule: ImplementoModule;

  beforeEach(() => {
    implementoModule = new ImplementoModule();
  });

  it('should create an instance', () => {
    expect(implementoModule).toBeTruthy();
  });
});
