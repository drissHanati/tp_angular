import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetBackgroundDialogComponent } from './set-background-dialog.component';

describe('SetBackgroundDialogComponent', () => {
  let component: SetBackgroundDialogComponent;
  let fixture: ComponentFixture<SetBackgroundDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetBackgroundDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SetBackgroundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
