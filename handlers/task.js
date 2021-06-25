const db = require("../models");

exports.getTasks = async (req, res, next) => {
  try {
    const { username } = req.params;
    const user = await db.User.findOne({ username: username });
    if (user) {
      res.status(200).json(user.work);
    } else {
      throw new Error("No user found");
    }
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.createTask = async (req, res, next) => {
  try {
    const { username, title, description, date, person } = req.body;
    const user = await db.User.findOne({ username: username });
    if (user) {
      const task = {
        title: title,
        description: description,
        pending: date,
        organizer: username,
        attendent: person,
      };
      user.work.push(task);
      await user.save();
      const otherPerson = await db.User.findOne({ username: person });
      if (person) {
        otherPerson.work.push(task);
        await otherPerson.save();
      } else {
        throw new Error("No user found");
      }
      res.status(200).json(user.work);
    } else {
      throw new Error("No user found");
    }
  } catch (err) {
    err.status = 400;
    next(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const { username, objectid } = req.body;
    const result = await db.User.findOneAndUpdate(
      { username: username },
      { $pull: { work: { _id: objectid } } },
      function (err, result) {
        if (err) {
          next(err);
        } else {
          res.status(200).json(result);
        }
      }
    );
  } catch (err) {
    err.status = 400;
    next(err);
  }
};
