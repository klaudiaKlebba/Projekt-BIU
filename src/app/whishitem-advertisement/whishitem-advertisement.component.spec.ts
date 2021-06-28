import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhishitemAdvertisementComponent } from './whishitem-advertisement.component';

describe('WhishitemAdvertisementComponent', () => {
  let component: WhishitemAdvertisementComponent;
  let fixture: ComponentFixture<WhishitemAdvertisementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhishitemAdvertisementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhishitemAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
