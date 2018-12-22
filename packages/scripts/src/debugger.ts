import * as debug from '@dapp-stack/debugger'
import * as ethereum from '@dapp-stack/ethereum'
import * as lifecycle from './shared/lifecycle'
import { globalError } from './shared/globalError'

export async function start(txHash: string) {
  lifecycle.after()

  try {
    await ethereum.start()
    await debug.start(txHash)
  } catch (error) {
    globalError(error)
  }
}
