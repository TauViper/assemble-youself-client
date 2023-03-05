export const publicRoutePaths = {
  home: 'home',
  logIn: 'login',
  signUp: 'signUp',
  course: 'course'
};

export const privateRoutePaths = {
  home: 'home',
  courses: 'courses',
  aboutUs: 'about',
  course: 'course'
};

type RouteKeys = keyof typeof publicRoutePaths;

export const routeLabelsMap = new Map<RouteKeys, string>([
  ['logIn', 'Вход'],
  ['signUp', 'Регистрация'],
  ['home', 'Главная'],
  ['course', 'Курсы']
]);
