import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { Repository } from '@/adapters/database'

type Request = {
  body: unknown,
  params: {
    id: string
    formularyName: string
  }
}

export const updateCaseUse = async (request: Request): Promise<HTTPReturn> => {
  const data = request.body
  const id = request.params.id
  const repository = new Repository()
  repository.setModelName(request.params.formularyName)
  await repository.update(id, data)
  return {
    response: {},
    code: statusHTTP.OK,
  }
}
