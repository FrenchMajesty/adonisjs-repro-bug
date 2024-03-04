import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Car from 'App/Models/Car'

export default class CarController {
    public async update({ request }: HttpContextContract) {
        const data = request.only(['name', 'model', 'year', 'color', 'plate'])
        const id = request.param('id')
        const car = await Car.findOrFail(id)

        await car.merge(data).save()
        return car
    }
}
