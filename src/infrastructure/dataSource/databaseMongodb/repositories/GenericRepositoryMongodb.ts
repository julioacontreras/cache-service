import { Collection, ObjectId } from 'mongodb'
import { database } from '../mongodb/connector'
import { logger } from '@/adapters/logger'
import { RepositoryInterface } from '@/adapters/database/Repository'

type ResponseCreate = { insertedId: string }

export class GenericRepositoryMongodb implements RepositoryInterface
{
  Model: Collection | undefined

  public setModelName(modelName: string) {
    this.Model = database.collection(modelName)
  }

  public async findById<T>(id: string): Promise<T> {
    return (await this.Model?.findOne({
      _id: new ObjectId(id),
    })) as unknown as T
  }

  public async create<T>(model: T): Promise<{ id: string }> {
    try {
      const userSavedResponse = (await this.Model?.insertOne(
        model as Document,
      )) as unknown as ResponseCreate
      return { id: userSavedResponse.insertedId.toString() }
    } catch (err) {
      logger.error(err + '')
      return { id: '' }
    }
  }

  public async update<T>(id: string, model: T): Promise<void> {
    try {
      await this.Model?.updateOne(
        { _id: new ObjectId(id) },
        { $set: model },
      )
    } catch (err) {
      logger.error(err + '')
    }
  }

  public async find(query: object, start: number, limit: number): Promise<unknown> {
    const array: any = []
    const total = await this.Model?.countDocuments(query)
    await this.Model?.find(query).skip(start).limit(limit).forEach(doc => {
      array.push(doc)
    })
    return {
      total,
      start,
      limit,
      collection: array,
    } 
  }

  public async delete(id: string): Promise<void> {
    await this.Model?.deleteOne({
      _id: new ObjectId(id),
    })
  }
}
