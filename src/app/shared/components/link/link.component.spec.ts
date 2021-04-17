import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LINK } from '../../mocks/link-mock';

import { LinkComponent } from './link.component';

describe('LinkComponent', () => {
  let component: LinkComponent;
  let fixture: ComponentFixture<LinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkComponent);
    component = fixture.componentInstance;
    component.link = LINK;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should clickDelete', () => {
    const sp = spyOn(component.deleteLink, 'next');
    component.clickDelete();
    expect(sp).toHaveBeenCalled();
  });
});
