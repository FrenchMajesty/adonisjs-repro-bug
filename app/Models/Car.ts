import { DateTime } from 'luxon'
import { BaseModel, afterUpdate, column } from '@ioc:Adonis/Lucid/Orm'

export default class Car extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public model: string

  @column()
  public year: string

  @column()
  public color: string

  @column()
  public plate: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @afterUpdate()
  public static async afterUpdateHook(car: Car) {
    console.log('Car ID updated', car.id)
    console.log('is dirty?', car.$isDirty)
    console.log('fields changed:', car.$dirty)
  }
}
