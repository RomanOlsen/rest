import { Schema } from "mongoose";

export const MissionSchema = new Schema(
  {
    codeName: {type:String, required: true},
    objective: {type:String, required: true},
    year: {type:Array, required: true},



  },

  {

  }
)

MissionSchema.virtual('Rats', {ref: 'Rats', localField: 'ratId', foreignField: '_id'})
