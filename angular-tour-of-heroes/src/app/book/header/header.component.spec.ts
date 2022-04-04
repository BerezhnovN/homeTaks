import {HeaderComponent} from "./header.component";

describe('Тест HEADER компонента', () => {
  let header: HeaderComponent;

  beforeEach(() => {
    header = new HeaderComponent();
  })

  it('create headerпше ', () => {
    expect(header).toBeTruthy();
  })
})
