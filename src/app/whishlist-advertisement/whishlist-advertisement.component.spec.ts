import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhishlistAdvertisementComponent } from './whishlist-advertisement.component';

describe('WhishlistAdvertisementComponent', () => {
  let component: WhishlistAdvertisementComponent;
  let fixture: ComponentFixture<WhishlistAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhishlistAdvertisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhishlistAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
