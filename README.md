# Adonis Ally Microsoft Driver

A TikTok driver for [AdonisJS Ally](https://docs.adonisjs.com/guides/social-auth).

## Getting started

### 1. Install the package

Install the package from your command line

```bash
npm install @tpointurier/ally-microsoft
```

### 2. Configure the package

```bash
node ace configure @tpointurier/ally-microsoft
```

### 3. Configure the package manually

Validate environment variables
```ts
MICROSOFT_CLIENT_ID: 'Env.schema.string()',
MICROSOFT_CLIENT_SECRET: 'Env.schema.string()',
MICROSOFT_CALLBACK_URL: 'Env.schema.string()',
```

### 3. Add variables to your ally configuration

```ts
const allyConfig: AllyConfig = {
  // ... other drivers
  microsoft: microsoft({
    clientId: env.get('MICROSOFT_CLIENT_ID'),
    clientSecret: env.get('MICROSOFT_CLIENT_SECRET'),
    callbackUrl: env.get('MICROSOFT_CALLBACK_URL'),
    scopes: ['openid', 'profile', 'email'],
  }),
}
```

## Scopes

You can pass an array of scopes in your configuration, for example `['openid', 'profile', 'email']`. You have a full list of scopes in the [Microsoft Scopes Reference](https://learn.microsoft.com/fr-fr/entra/identity-platform/scopes-oidc)

## How it works

You can learn more about [AdonisJS Ally](https://docs.adonisjs.com/guides/social-auth) in the documentation. And learn about the implementation in the [ally-starter-kit](https://github.com/adonisjs-community/ally-starter-kit) repository.

## License

[MIT](LICENSE)