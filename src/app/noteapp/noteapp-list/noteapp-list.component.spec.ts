import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteappListComponent } from './noteapp-list.component';

describe('NoteappListComponent', () => {
  let component: NoteappListComponent;
  let fixture: ComponentFixture<NoteappListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoteappListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteappListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
