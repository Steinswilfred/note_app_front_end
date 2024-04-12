import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteappComponent } from './noteapp.component';

describe('NoteappComponent', () => {
  let component: NoteappComponent;
  let fixture: ComponentFixture<NoteappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteappComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
