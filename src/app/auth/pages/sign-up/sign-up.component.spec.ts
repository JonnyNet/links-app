import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthStoreService } from '../../services/auth-store.service';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpComponent ],
      imports: [SharedModule],
      providers: [
        {
          provide: AuthStoreService,
          useValue: {
            error$: of(''),
            saveUser: jasmine.createSpy('saveUser'),
          }
        }
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onSubmit', () => {
    const service = TestBed.inject(AuthStoreService);
    component.onSubmit();
    component.form.controls.name.setValue('test');
    component.form.controls.email.setValue('test@test.com');
    component.form.controls.password.setValue('123456');
    component.onSubmit();
    expect(service.saveUser).toHaveBeenCalled();
  });
});
