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
            type: Array,
            required: true
        },

    },
    logic: {
        type: Array,
        required: true
    },
    edgeCases: {
        type: Array,
    },
    optimisation: {
        type: Array
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
        type: Array
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