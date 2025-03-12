import { dbContext } from "../db/DbContext.js"

class RatService {
  async getRats() {
    const rats = await dbContext.Rats.find()
    return rats
  }
}
export const ratService = new RatService()