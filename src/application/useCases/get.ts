import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { fastdata } from '@/adapters/fastdata'

type Request = {
  params: {
    key: string,
  }
}

export const getCaseUse = async (request: Request): Promise<HTTPReturn> => {
  await fastdata.connect()
  const data = await fastdata.get(request.params.key)
  await fastdata.disconnect()
  return {
    response: JSON.parse(data),
    code: statusHTTP.OK,
  }
}
