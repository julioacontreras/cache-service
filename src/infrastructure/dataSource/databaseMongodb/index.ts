import { setRepository } from '@/adapters/database'
import { RepositoryInterface } from '@/adapters/database/Repository'
import { run } from './mongodb/connector'
import { GenericRepositoryMongodb } from './repositories/GenericRepositoryMongodb'

async function useDatabase(): Promise<void> {
  const urlConnection = process.env.MONGO_CONNECTION
  if (!urlConnection) throw 'Not exist url connection to mongoDB'

  await run(urlConnection)
  setRepository(GenericRepositoryMongodb as unknown as RepositoryInterface)
}

async function start() {
  await useDatabase()
}

start()
