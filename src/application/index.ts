import { serverHTTP } from '@/adapters/serverHTTP'

import { getCaseUse } from '@/application/useCases/get'
import { setCaseUse } from '@/application/useCases/set'

export function startApp() {
  serverHTTP.add('get', {
    useCase: getCaseUse,
    route: '/api/fastdata/:key',
    method: 'GET'
  })

  serverHTTP.add('set', {
    useCase: setCaseUse,
    route: '/api/fastdata/:key',
    method: 'POST'
  })

  serverHTTP.run()
}
