// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  trackingCode: 'UA-157507530-1',
  siteKey: '6LcUausUAAAAAEjFXFoqR0qnp9UvMiUoIsLGTra2',
  paySubscriptionUrl: 'http://localhost:8082/pay-subscription',
  generateClientTokenUrl: 'http://localhost:8083/generate-client-token',
  createCustomerUrl: 'http://localhost:8084/create-customer',
  cancelSubscriptionUrl: 'http://localhost:8085/cancel-subscription',
  contactUsEmail: 'http://localhost:8086/contact-us-email'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
