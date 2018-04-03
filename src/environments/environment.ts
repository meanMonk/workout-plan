// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  config: {
    firebase: {
      apiKey: "AIzaSyCS1lJfEEVNWKQfp-VfHKgRMpexZTy-Dq0",
      authDomain: "workout-plan-12.firebaseapp.com",
      databaseURL: "https://workout-plan-12.firebaseio.com",
      projectId: "workout-plan-12",
      storageBucket: "workout-plan-12.appspot.com",
      messagingSenderId: "154805823244"
    }
  }
};
