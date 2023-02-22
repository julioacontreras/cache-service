import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { Repository } from '@/adapters/database'

type Request = {
  body: unknown,
  params: {
    id: string,
    formularyName: string
  }
}

export const createCaseUse = async (request: Request): Promise<HTTPReturn> => {
  const repository = new Repository()
  repository.setModelName(request.params.formularyName)
  const response = await repository.create(request.body)

  return {
    response,
    code: statusHTTP.OK,
  }
}
