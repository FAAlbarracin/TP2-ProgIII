import mongoose from "mongoose";

const weatherSchema = mongoose.Schema(
    {
    city: {
        type: String
    },
    country: {
        type: String
    },
    temperature: {
        type: String
    },
    condition: {
        type: String
    }
    },
    {
        timestamps: true
    })

    const ModelWeather = mongoose.model("History", weatherSchema, "historial")
    export default ModelWeather