import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionPickerButtonComponent } from './version-picker-button.component';

describe('VersionPickerButtonComponent', () => {
  let component: VersionPickerButtonComponent;
  let fixture: ComponentFixture<VersionPickerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionPickerButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VersionPickerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
