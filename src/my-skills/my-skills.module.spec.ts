import { MySkillsModule } from './my-skills.module';

describe('MySkillsModule', () => {
  let mySkillsModule: MySkillsModule;

  beforeEach(() => {
    mySkillsModule = new MySkillsModule();
  });

  it('should create an instance', () => {
    expect(mySkillsModule).toBeTruthy();
  });
});
