/**
Model CRUD Controllers

getAll()

Parameters:
Description: returns all models inside the database
Authentication: not required
Example: /api/company

createOne()

Parameters: request body (model's attributes)
Description: creates a model
Authentication: required

updateOne()

Parameters: models's id, attributes to be updated
Description: updates a model
Authentication: required

removeOne()

Parameters: models's id
Description: removes a a model matching this id
Authentication: required
Example: /api/company/6183dcbd835c31a77ab91b86

*/
export const getAll = (model) => async (req, res) => {
    try {
        console.log("here");
        const doc = await model.find({});
        if (!doc) {
            return res.status(404).end();
        }
        res.status(200).json(doc);
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
};

export const getOne = (model) => async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        const doc = await model.findOne({ _id: id }).lean().exec();
        if (!doc) {
            return res.status(404).end();
        }
        res.status(200).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
};

export const createOne = (model) => async (req, res) => {
    try {
        const doc = await model.create({ ...req.body });
        res.status(201).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
};

export const updateOne = (model) => async (req, res) => {
    try {
        const doc = await model.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!doc) {
            return res.status(400).end();
        }
        res.status(200).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
};

export const removeOne = (model) => async (req, res) => {
    try {
        const doc = await model
            .findOneAndRemove({
                _id: req.params.id
            })
            .exec();
        if (!doc) {
            return res.status(400).end();
        }
        res.status(200).json({ data: doc });
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
};

//  ----------------------NUKE; NEVER EVER TOUCH IT----------------------
export const removeAll = (model) => async (req, res) => {
    try {
        const doc = await model.deleteMany({}).exec();
        if (!doc) {
            return res.status(400).end();
        } else {
            res.status(200).json({ data: "Nuked successfully" });
        }
    } catch (e) {
        console.error(e);
        res.status(400).end();
    }
};
// References the crudControllers functions
export const crudControllers = (model) => ({
    getAll: getAll(model),
    getOne: getOne(model),
    removeOne: removeOne(model),
    updateOne: updateOne(model),
    createOne: createOne(model)
});
