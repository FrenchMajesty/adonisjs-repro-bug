import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Car from 'App/Models/Car'

export default class extends BaseSeeder {
  public async run () {
    await Car.createMany([
      {
        name: 'Fiat',
        model: 'Uno',
        year: '2020',
        color: 'Red',
        plate: 'ABC-1234'
      },
      {
        name: 'Chevrolet',
        model: 'Onix',
        year: '2021',
        color: 'Black',
        plate: 'DEF-5678'
      },
      {
        name: 'Ford',
        model: 'Ka',
        year: '2019',
        color: 'White',
        plate: 'GHI-9101'
      }
    ])
  }
}
