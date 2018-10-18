import { ZonacuerpoModule } from './zonacuerpo.module';

describe('ZonacuerpoModule', () => {
  let zonacuerpoModule: ZonacuerpoModule;

  beforeEach(() => {
    zonacuerpoModule = new ZonacuerpoModule();
  });

  it('should create an instance', () => {
    expect(zonacuerpoModule).toBeTruthy();
  });
});
