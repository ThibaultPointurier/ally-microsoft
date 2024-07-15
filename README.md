# Microsoft Driver for Adonis Ally

A Microsoft driver for [AdonisJS Ally](https://docs.adonisjs.com/guides/social-auth).

## Getting started

### 1. Install the package

Install the package from your command line

```bash
npm install @tpointurier/ally-microsoft
```

### 2. Configure the package

Run the following command to configure the package:

```bash
node ace configure @tpointurier/ally-microsoft
```

### 3. Configure the Package Manually

Validate environment variables
```ts
MICROSOFT_CLIENT_ID: 'Env.schema.string()',
MICROSOFT_CLIENT_SECRET: 'Env.schema.string()',
MICROSOFT_CALLBACK_URL: 'Env.schema.string()',
```

### 4. Add Variables to Your Ally Configuration

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

You can pass an array of scopes in your configuration, such as `['openid', 'profile', 'email']`. You can find a full list of scopes in the [Microsoft Scopes Reference](https://learn.microsoft.com/fr-fr/entra/identity-platform/scopes-oidc)

## How it works

Learn more about [AdonisJS Ally](https://docs.adonisjs.com/guides/social-auth)  in the documentation. You can also learn about the implementation in the [ally-starter-kit](https://github.com/adonisjs-community/ally-starter-kit) repository.

## License

[MIT](LICENSE)