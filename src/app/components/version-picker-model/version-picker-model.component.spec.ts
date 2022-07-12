import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionPickerModelComponent } from './version-picker-model.component';

describe('VersionPickerModelComponent', () => {
  let component: VersionPickerModelComponent;
  let fixture: ComponentFixture<VersionPickerModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionPickerModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersionPickerModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
