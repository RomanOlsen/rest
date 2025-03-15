import { Schema } from "mongoose";

export const RatSchema = new Schema(
  {
    name: {type:String, required: true},
    callsign: {type:String, required: true},
    picture: {type:String, required: true},
    specialties: {type:Array, required: true}, // unsure what to put for type


  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)

RatSchema.virtual('Account', {ref: 'Account', localField: 'ratId', foreignField: '_id', justOne: true })