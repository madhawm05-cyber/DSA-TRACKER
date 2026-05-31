const mongoose = require("mongoose")

const notesSchema = new mongoose.Schema({
    question: {
        questionNo: {
            type: Number,
            requird: true
        },
        questionStatement: {
            type: String,
            required: true
        },
        difficulty: {
            type: String,
            enum: ["Easy","Medium","Hard"],
            required: true
        },
        topic: {
            type: String,
            required: true
        },

    },
    logic: {
        type: String,
        required: true
    },
    edgeCases: {
        type: String,
    },
    optimisation: {
        type: String
    },
    timeComplexity: {
        type: String,
        required: true
    },
    spaceComplexity: {
        type: String,
        required: true
    },
    mistakes: {
        type:String
    },
    concept: {
        type: String,
        required: true
    },
    code: {
        type: String,
    },
    dateSolved: {
        type: Date,
        default: Date.now
    },
    isFavourite: {
        type: Boolean,
        default: false
    }

})

const notesModel = mongoose.model("notes", notesSchema);
module.exports = notesModel;