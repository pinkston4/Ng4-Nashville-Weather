import { Ng4WeatherPage } from './app.po';

describe('ng4-weather App', () => {
  let page: Ng4WeatherPage;

  beforeEach(() => {
    page = new Ng4WeatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
