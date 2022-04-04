import {TableBooksService} from "./table-books.service";
import {HttpClient} from "@angular/common/http";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {inject, TestBed} from "@angular/core/testing";
import {RouterTestingModule} from "@angular/router/testing";
import {TableBooksComponent} from "./table-books.component";

describe('TableBookService', () => {
  let service: TableBooksService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      declarations: [TableBooksComponent],
      providers: [TableBooksComponent, HttpClient]
    })

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(TableBooksService);
  });

  it('Created component', inject([TableBooksService], (service: TableBooksService) => {
    expect(service).toBeTruthy();
  }))

  it('should get books', inject(
      [HttpTestingController, TableBooksService],
      (httpMock: HttpTestingController, service: TableBooksService) => {
        const mockBooks = {
          "qtyRelease1": 500,
          "qtyRelease2": 7500,
          "qtyRelease3": 9700
        }

        service.getBooks().subscribe(data => {
          expect(data.set2.data[0].qtyRelease).toEqual(mockBooks.qtyRelease1);
          // expect(data.set2.data[1].qtyRelease).toEqual(mockBooks.qtyRelease2);
          expect(data.set2.data[2].qtyRelease).toEqual(mockBooks.qtyRelease3);
        });

        const mockReq = httpMock.expectOne(service.firstUrl + '/books.json');

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockBooks);

        httpMock.verify();
      }
    )
  );
})
