import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { fastdata } from '@/adapters/fastdata'

type Request = {
  body: object,
  params: {
    key: string,
  }
}

export const setCaseUse = async (request: Request): Promise<HTTPReturn> => {
  await fastdata.connect()
  await fastdata.set(request.params.key, JSON.stringify(request.body))
  await fastdata.disconnect()
  return {
    response: {},
    code: statusHTTP.OK,
  }
}
