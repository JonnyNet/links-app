import { AuthState } from 'src/app/auth/models/auth-state';
import { Store } from './store';

class TestStore extends Store<AuthState>{
  constructor(){
    super({
      user: undefined,
      error: undefined,
    });
  }
}

describe('Store', () => {
  it('should create an instance', () => {
    expect(new TestStore()).toBeTruthy();
  });
});
