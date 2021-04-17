import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthStoreService } from 'src/app/auth/services/auth-store.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { LinkStoreService } from '../../services/link-store.service';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [SharedModule],
      providers: [
        {
          provide: AuthStoreService,
          useValue: {
            user(): void { }
          }
        },
        {
          provide: LinkStoreService,
          useValue: {
            getLinks(): void { },
            saveLink(data: any): void { }
          }
        }
      ],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onSubmit', () => {
    const service = TestBed.inject(LinkStoreService);
    const sp = spyOn(service, 'saveLink');
    component.saveLink();
    component.form.controls.url.setValue('test@test.com');
    component.form.controls.name.setValue('123456');
    component.saveLink();
    expect(sp).toHaveBeenCalled();
  });
});
