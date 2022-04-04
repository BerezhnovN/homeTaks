import {HeaderComponent} from "./header.component";

describe('Тест Чарт компонента', () => {
  let header: HeaderComponent;

  beforeEach(() => {
    header = new HeaderComponent();
  })

  it('create headerпше ', () => {
    expect(header).toBeTruthy();
  })
})
