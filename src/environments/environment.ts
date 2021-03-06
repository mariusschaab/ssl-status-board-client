// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  availableStatusWebSockets: new Map()
    .set('Field A', 'ws://localhost:4201/ssl-status/field-a/subscribe')
    .set('Field B', 'ws://localhost:4201/ssl-status/field-b/subscribe'),
  availableVisionWebSockets: new Map()
    .set('Field A', 'ws://localhost:4201/ssl-vision/field-a/subscribe')
    .set('Field B', 'ws://localhost:4201/ssl-vision/field-b/subscribe'),
  legalNoticeUrl: '/legal-notice',
  dataProtectionUrl: '/data-protection',
};
