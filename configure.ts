import type Configure from '@adonisjs/core/commands/configure'

/**
 * Configures the package
 */
export async function configure(command: Configure) {
  const codemods = await command.createCodemods()

  await codemods.defineEnvVariables({
    MICROSOFT_CLIENT_ID: '',
    MICROSOFT_CLIENT_SECRET: '',
    MICROSOFT_CALLBACK_URL: '',
  })

  //login.microsoftonline.com/consumers/oauth2/v2.0/authorize?client_id=2529605a-978b-42af-83bc-061ddaa04fb8&response_type=id_token&redirect_uri=http://localhost:3333/auth/microsoft/callback&response_mode=form_post&scope=openid&state=12345&nonce=678910

  await codemods.defineEnvValidations({
    variables: {
      MICROSOFT_CLIENT_ID: 'Env.schema.string()',
      MICROSOFT_CLIENT_SECRET: 'Env.schema.string()',
      MICROSOFT_CALLBACK_URL: 'Env.schema.string()',
    },
    leadingComment: 'Variables for @rlanz/ally-twitch',
  })
}