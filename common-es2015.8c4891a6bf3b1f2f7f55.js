(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0DVh":function(t,e,r){"use strict";r.d(e,"a",function(){return b});var s=r("lJxs"),a=r("vkgz"),i=r("5+tZ"),o=r("0gpM"),n=r("2Qvw"),u=r("fXoL"),c=r("AytR"),h=r("tk/3");let v=(()=>{class t{constructor(t){this.http=t,this.server=c.a.urlAuth}saveUser(t){return this.http.post(this.server+"register",t)}findUser(t){return this.http.get(this.server+"user/"+t)}authUser(t){return this.http.post(this.server+"login",t)}}return t.\u0275fac=function(e){return new(e||t)(u.Pb(h.a))},t.\u0275prov=u.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),S=(()=>{class t{set(t,e){localStorage.setItem(t,e)}get(t){return localStorage.getItem(t)}remove(t){localStorage.removeItem(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=u.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var l=r("tyNb");let b=(()=>{class t extends n.a{constructor(t,e,r){super({user:void 0,error:void 0}),this.authService=t,this.localStorageService=e,this.router=r,this.error$=this.state$.pipe(Object(s.a)(t=>t.error)),this.user$=this.state$.pipe(Object(s.a)(t=>t.user))}saveUser(t){this.authService.saveUser(t).subscribe(t=>{this.router.navigate([o.a.AUTH.SING_IN])},()=>this.setErrorState())}userAuth(t){this.authService.authUser(t).pipe(Object(a.a)(t=>this.localStorageService.set("Token",t)),Object(i.a)(t=>this.authService.findUser("1"))).subscribe(t=>{this.setUsetState(t),this.router.navigate([o.a.LINK.LIST])},()=>this.setErrorState())}user(){void 0===this.state.user?this.authService.findUser("1").subscribe(t=>this.setUsetState(t)):this.setState(Object.assign({},this.state))}logOut(){this.localStorageService.remove("Token"),this.router.navigate([o.a.AUTH.SING_IN])}get isAuthenticated(){return null!==this.localStorageService.get("Token")}setUsetState(t){this.setState(Object.assign(Object.assign({},this.state),{user:t,error:void 0}))}setErrorState(){this.setState(Object.assign(Object.assign({},this.state),{error:"Ha ocurrido un error, por favor int\xe9ntelo de nuevo m\xe1s tarde"}))}}return t.\u0275fac=function(e){return new(e||t)(u.Pb(v),u.Pb(S),u.Pb(l.a))},t.\u0275prov=u.Eb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"0gpM":function(t,e,r){"use strict";r.d(e,"a",function(){return s});const s={AUTH:{SING_IN:"/auth/sign-in",SING_UP:"/auth/sign-up",PROFILE:"/auth/profile"},LINK:{LIST:"/link/list"},ERRORS:{E500:"/errors/500"}}},"2Qvw":function(t,e,r){"use strict";r.d(e,"a",function(){return a});var s=r("2Vo4");class a{constructor(t){this.stateObj$=new s.a(t),this.state$=this.stateObj$.asObservable()}get state(){return this.stateObj$.getValue()}setState(t){this.stateObj$.next(t)}}}}]);