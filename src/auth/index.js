export function isLoggedIn() {
    const idToken = localStorage['user'];
    return !!idToken;
  }

  export function requireAuth(to, from, next) {
    if (!isLoggedIn()) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      });
    } else {
      next();
    }
  }

  export function notRequireAuth(to, from, next) {
    if (isLoggedIn()) {
        next({
          path: '/',
          query: { redirect: to.fullPath }
        });
      } else {
        next();
      }
  }