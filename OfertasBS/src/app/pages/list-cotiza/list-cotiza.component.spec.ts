import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCotizaComponent } from './list-cotiza.component';

describe('ListCotizaComponent', () => {
  let component: ListCotizaComponent;
  let fixture: ComponentFixture<ListCotizaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCotizaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCotizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
