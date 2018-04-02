// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  config: {
    firebase: {
      apiKey: "AIzaSyDY1y0c23nGpjRUHixPmzsj1Skjzdk1Vjk",
      authDomain: "workplan-64fb1.firebaseapp.com",
      databaseURL: "https://workplan-64fb1.firebaseio.com",
      projectId: "workplan-64fb1",
      storageBucket: "workplan-64fb1.appspot.com",
      messagingSenderId: "1096393177613"
    }
  }
};
