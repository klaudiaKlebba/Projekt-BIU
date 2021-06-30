import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAdvertisementsComponent } from './details-advertisements.component';

describe('DetailsAdvertisementsComponent', () => {
  let component: DetailsAdvertisementsComponent;
  let fixture: ComponentFixture<DetailsAdvertisementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAdvertisementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAdvertisementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
