import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteappEditComponent } from './noteapp-edit.component';

describe('NoteappEditComponent', () => {
  let component: NoteappEditComponent;
  let fixture: ComponentFixture<NoteappEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteappEditComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoteappEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
