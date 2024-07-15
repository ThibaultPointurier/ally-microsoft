import { MicrosoftDriver } from './src/microsoft.js'
import type { MicrosoftDriverConfig } from './src/types/main.js'
import type { HttpContext } from '@adonisjs/core/http'

export function microsoft(config: MicrosoftDriverConfig) {
  return (ctx: HttpContext) => new MicrosoftDriver(ctx, config)
}