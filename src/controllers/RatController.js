import { ratService } from "../services/RatService.js";
import BaseController from "../utils/BaseController.js";

export class RatController extends BaseController {
  constructor() {
    super()
    this.router
      .get('api/rats', this.getRats)
  }
  async getRats(request, response, next) {
    try {
      const rats = await ratService.getRats()
      response(rats)
    } catch (error) {
      next(error)
    }
  }
}