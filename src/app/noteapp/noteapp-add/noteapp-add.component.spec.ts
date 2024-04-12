import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteappAddComponent } from './noteapp-add.component';

describe('NoteappAddComponent', () => {
  let component: NoteappAddComponent;
  let fixture: ComponentFixture<NoteappAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NoteappAddComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NoteappAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
