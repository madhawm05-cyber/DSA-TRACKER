const notesModel = require("../models/dsaNotes")
const { analyzeCode } = require("../services/ai.service")

async function notes(req, res) {
    try {
        const { code, questionNo } = req.body;

        const notesByAI = await analyzeCode(code, questionNo);

        const notes = await notesModel.create({
            code: code,
            edgeCases: notesByAI.edgeCases,
            logic: notesByAI.logic,
            optimisation: notesByAI.optimisation,
            timeComplexity: notesByAI.timeComplexity,
            spaceComplexity: notesByAI.spaceComplexity,
            mistakes: notesByAI.mistakes,
            concept: notesByAI.concept,
            question: {
                questionNo: notesByAI.question.questionNo,
                questionStatement: notesByAI.question.questionStatement,
                difficulty: notesByAI.question.difficulty,
                topic: notesByAI.question.topic
            }
        })

        res.status(200).json({
            success: true,
            message: "Code analyze successfully",
            notes
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { notes };