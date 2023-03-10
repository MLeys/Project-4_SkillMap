import mongoose from "mongoose";
const Schema = mongoose.Schema;

const subSkillSchema = Schema({
    parentSkill: { type: Schema.Types.ObjectId, ref: 'Skill', autopopulate: true },
    title: String,
    details: String,
    resources: [{type: Schema.Types.ObjectId, ref: 'Resource', autopopulate: true}],
    usersAssigned: [{type: Schema.Types.ObjectId, ref: 'User', autopopulate: true}],
}, {
    timestamps: true
})


const skillSchema = new Schema({
    // user: {type: Schema.Types.ObjectId, ref: 'User', autopopulate: true},
    name: {type: String, required: true, unique: true},
    type: String,
    usersAssigned: [{type: Schema.Types.ObjectId, ref: 'User', autopopulate: true}],
    subSkills: [subSkillSchema],
    resources: [{type: Schema.Types.ObjectId, ref: 'Resource', autopopulate: true}],

}, {
    timestamps: true
})

export default mongoose.model('Skill', skillSchema)
// export default mongoose.model('SubSkill', subSkillSchema)