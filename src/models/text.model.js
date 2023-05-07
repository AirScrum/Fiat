import mongoose from "mongoose";
// import { UserStories } from "./userStory.model";
const Schema = mongoose.Schema;

const textSchema = new Schema(
    {
        textContent: {
            type: String,
            required: true
        },
        userID: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: false
        }
    },
    { timestamps: true }
);
textSchema.pre("findOneAndRemove", async function () {
    /**
     * Removing all userStories associated with
     * the deleted meeting.
     */
    var textID = this.getQuery()["_id"];
    if (!textID) {
        throw new Error("No textID found!");
    }
    const UserStories = mongoose.model("UserStories");
    await UserStories.deleteMany({ textID: textID });
});
export const Text = mongoose.model("Text", textSchema);
