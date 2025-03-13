import { Schema } from "mongoose";

export const MissionSchema = new Schema(
  {
    codename: { type: String, required: true },
    objective: { type: String, required: true },
    year: { type: String, required: true },
    locationId: {type: Schema.ObjectId, required: true, ref: 'Location'},
    ratId: {type: Schema.ObjectId, required: true, ref: 'Rat'},
    completed: {type: Boolean, required: true}




  },

  {

  }
)

MissionSchema.virtual('Rats', { ref: 'Rat', localField: 'ratId', foreignField: '_id' })
MissionSchema.virtual('Locations', { ref: 'Location', localField: 'locationId', foreignField: '_id' })
