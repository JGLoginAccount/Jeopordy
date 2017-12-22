import { JeopardyPage } from './app.po';

describe('jeopardy App', () => {
  let page: JeopardyPage;

  beforeEach(() => {
    page = new JeopardyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
