const HOME = '/home'

export function isLoggedIn() {
  const idToken = localStorage['user'];
  return !!idToken;
}

export function requireAuth(to, from, next) {
  if (!isLoggedIn()) {
    next({
      path: HOME,
      query: {
        redirect: to.fullPath
      }
    });
  } else {
    next();
  }
}

export function notRequireAuth(to, from, next) {
  if (isLoggedIn()) {
    next({
      path: HOME,
      query: {
        redirect: to.fullPath
      }
    });
  } else {
    next();
  }
}


export function signUp(context, email, password) {
    context.$auth.createUserWithEmailAndPassword(email, password)
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err))
}

export function login (context, email, password) {
    context.$nextTick(function() {
        context.$auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                context.$router.push(HOME)
            })
            .catch((e) => {
                console.warn(e.code, e.message)
            })
    })
}