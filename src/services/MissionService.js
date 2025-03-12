import { dbContext } from "../db/DbContext.js"

class MissionService {
  async getMissions() {
    const missions = await dbContext.Missions.find()
    return missions
  }
}
export const missionService = new MissionService()