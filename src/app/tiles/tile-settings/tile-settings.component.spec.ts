import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TileSettingsComponent } from './tile-settings.component';

describe('TileSettingsComponent', () => {
  let component: TileSettingsComponent;
  let fixture: ComponentFixture<TileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TileSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
