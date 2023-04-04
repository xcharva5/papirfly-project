import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileDashboardComponent } from './tile-dashboard.component';

describe('TileDashboardComponent', () => {
  let component: TileDashboardComponent;
  let fixture: ComponentFixture<TileDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
