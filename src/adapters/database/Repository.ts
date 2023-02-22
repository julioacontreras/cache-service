export interface RepositoryInterface {
  setModelName: (modelName: string) => void
  findById: <T>(id: string) => Promise<T>
  find: (query: object, start: number, limit: number) => Promise<unknown>
  delete: <T>(id: string) => Promise<void>
  create: <T>(model: T) => Promise<{ id: string }>
  update: <T>(id: string, model: T) => Promise<void>
}
