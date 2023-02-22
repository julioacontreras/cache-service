import { HTTPReturn } from '@/adapters/serverHTTP/types'
import { statusHTTP } from '@/adapters/serverHTTP'
import { Repository } from '@/adapters/database'

type Request = {
  params: {
    id: string,
    formularyName: string
  }
}

export const deleteCaseUse = async (request: Request): Promise<HTTPReturn> => {
  const repository = new Repository()
  repository.setModelName(request.params.formularyName)
  await repository.delete(request.params.id)
  return {
    response: {},
    code: statusHTTP.OK,
  }
}
