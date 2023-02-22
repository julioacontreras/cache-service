import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { Repository } from '@/adapters/database'

type Request = {
  query: {
    query?: string,
    start?: string,
    limit?: string
  },
  params: {
    formularyName: string
  }
}

export const findQueryCaseUse = async (
  request: Request,
): Promise<HTTPReturn> => {
  const start = Number(request.query.start)
  const limit = Number(request.query.limit)
  const query = JSON.parse(request?.query?.query || '{}') 
  const repository = new Repository()
  repository.setModelName(request.params.formularyName)
  const response = await repository.find(query, start, limit)
  return {
    response,
    code: statusHTTP.OK,
  }
}
