import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePickerCheckBoxComponent } from './file-picker-check-box.component';

describe('FilePickerCheckBoxComponent', () => {
  let component: FilePickerCheckBoxComponent;
  let fixture: ComponentFixture<FilePickerCheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilePickerCheckBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilePickerCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
