import { ratService } from "../services/RatService.js";
import BaseController from "../utils/BaseController.js";

export class RatController extends BaseController {
  constructor() {
    super('api/rats')
    this.router
      .get('', this.getRats)
  }
  async getRats(request, response, next) {
    try {
      const rats = await ratService.getRats()
      response.send(rats)
    } catch (error) {
      next(error)
    }
  }
}