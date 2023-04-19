const mongoose = require("mongoose");

const UserStoriesSchema = new mongoose.Schema(
    {
        userStoryTitle: {
            type: String,
            required: true
        },
        userStoryDescription: {
            type: String,
            required: true
        },
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        textID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Text",
            required: true
        },
        userStoryStatus: {
            type: String
        },
        AcceptanceCriteria: {
            type: String
        },
        userStoryEffort: {
            type: Number
        },
        userStoryPriority: {
            type: String
        }
    },
    { timestamps: true, collection: "userStories" }
);

export const UserStories = mongoose.model("UserStories", UserStoriesSchema);
