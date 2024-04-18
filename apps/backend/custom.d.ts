
type Auth = {
  name: string;
  email: string;
  picture: string;
  sub: string;
  role: string;
  iat: number;
  exp: number;
  jti: string;
};

declare global {
  namespace Express {
    interface Request extends Auth { }
  }
}

// // Augment the `TsRestRequest` interface provided by `@ts-rest/express` to include the `auth` property
// declare module "@ts-rest/express" {
//   interface TsRestRequest {
//     auth: Auth;
//   }
// }
