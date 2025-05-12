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
import { microsoft } from '@tpointurier/ally-microsoft'

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

## Available Scopes

Microsoft OAuth2 supports various scopes that you can use to request different levels of access. Here are some commonly used scopes:

- `openid`: Required for OpenID Connect authentication
- `profile`: Access to basic profile information
- `email`: Access to email address
- `offline_access`: Get a refresh token
- `User.Read`: Read user profile
- `User.Read.All`: Read all users' basic profiles
- `Mail.Read`: Read user's email
- `Calendars.Read`: Read user's calendars
- `Files.Read`: Read user's files

You can add these scopes to the configuration like this:

```ts
scopes: ['openid', 'profile', 'email', 'User.Read']
```

For a complete list of available scopes, please refer to the [Microsoft Graph permissions reference](https://docs.microsoft.com/en-us/graph/permissions-reference).