import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductOmsComponent } from './product-oms.component';

describe('ProductOmsComponent', () => {
  let component: ProductOmsComponent;
  let fixture: ComponentFixture<ProductOmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductOmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductOmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
