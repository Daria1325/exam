import { TestBed } from '@angular/core/testing';

import { ServiceService } from './service.service';

describe('ServiceService', () => {
  let service: ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('add (1,2,3) (2,2,2)',()=>{
    let vec1 = [1,2,3];
    let vec2=[2,2,2];

    let add1 = [3,4,5];
    let add2= service.add(vec1,vec2);
    expect(add1).toEqual(add2);
  })

  fit('minus (1,2,3) (2,2,2)',()=>{
    let vec1 = [1,2,3];
    let vec2=[2,2,2];

    let add1 = [-1,0,1];
    let add2= service.minus(vec1,vec2);
    expect(add1).toEqual(add2);
  })
  fit('multiply (1,2,3) (2,2,2)',()=>{
    let vec1 = [1,2,3];
    let vec2=[2,2,2];

    let add1 = [2,4,6];
    let add2= service.multiply(vec1,vec2);
    expect(add1).toEqual(add2);
  })

  fit('devide (1,2,3) (2,2,2)',()=>{
    let vec1 = [1,2,3];
    let vec2=[2,2,2];

    let add1 = [0.5,1,1.5];
    let add2= service.divide(vec1,vec2);
    expect(add1).toEqual(add2);
  })
});
