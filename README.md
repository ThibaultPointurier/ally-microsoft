<p align="center">
  <img src="https://github.com/ThibaultPointurier/ally-microsoft/blob/assets/assets/microsoft.png?raw=true" alt="@tpointurier/microsft">
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@tpointurier/ally-microsoft"><img src="https://img.shields.io/npm/dm/@tpointurier/ally-microsoft.svg?style=flat-square" alt="Download"></a>
  <a href="https://www.npmjs.com/package/@tpointurier/ally-microsoft"><img src="https://img.shields.io/npm/v/@tpointurier/ally-microsoft.svg?style=flat-square" alt="Version"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/npm/l/@tpointurier/ally-microsoft.svg?style=flat-square" alt="License"></a>
</p>

`@tpointurier/ally-microsoft` is a Microsoft driver for [AdonisJS Ally](https://docs.adonisjs.com/guides/social-auth).

## Getting Started

This package is available in the npm registry.
```bash
npm install @tpointurier/ally-microsoft
```

Next, configure the package by running the followind command.
```bash
node ace configure @tpointurier/ally-microsoft
```

Alternatively, you can use a single command to install and configure the package:
```bash
node ace add @tpointurier/ally-microsoft
```

Then register the service inside the configuration file `config/ally.ts`.

```ts
const allyConfig: AllyConfig = {
  microsoft: microsoft({
    clientId: env.get('MICROSOFT_CLIENT_ID'),
    clientSecret: env.get('MICROSOFT_CLIENT_SECRET'),
    callbackUrl: env.get('MICROSOFT_CALLBACK_URL'),
    scopes: ['openid', 'profile', 'email'],
    tenantId: env.get('MICROSOFT_TENANT_ID', 'common'),
  }),
}
```