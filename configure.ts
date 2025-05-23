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
    MICROSOFT_TENANT_ID: '',
  })

  await codemods.defineEnvValidations({
    variables: {
      MICROSOFT_CLIENT_ID: 'Env.schema.string()',
      MICROSOFT_CLIENT_SECRET: 'Env.schema.string()',
      MICROSOFT_CALLBACK_URL: 'Env.schema.string()',
      MICROSOFT_TENANT_ID: 'Env.schema.string.optional()',
    },
    leadingComment: 'Variables for @tpointurier/ally-microsoft',
  })
}
