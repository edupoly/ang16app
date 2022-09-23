import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoutnriesComponent } from './coutnries.component';

describe('CoutnriesComponent', () => {
  let component: CoutnriesComponent;
  let fixture: ComponentFixture<CoutnriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoutnriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoutnriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
