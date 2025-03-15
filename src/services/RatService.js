import { BadRequest } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"

class RatService {

  // async getMissionForRat(ratID) {
  //   const mission = await dbContext.Rats.findById(ratID).populate('location')
  //   return mission
  // }
  async getRats() {
    const rats = await dbContext.Rats.find()
    return rats
  }

  async getRatbyID(ratID){
    const foundRat = await dbContext.Rats.findById(ratID)
    if (ratID == null) {
      throw new BadRequest('no matching rat id')
    }
    return foundRat
  }


}
export const ratService = new RatService()