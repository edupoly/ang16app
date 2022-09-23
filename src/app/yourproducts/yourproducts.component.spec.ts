import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourproductsComponent } from './yourproducts.component';

describe('YourproductsComponent', () => {
  let component: YourproductsComponent;
  let fixture: ComponentFixture<YourproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YourproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YourproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
