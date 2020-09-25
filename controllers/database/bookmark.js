const { Bookmark } = require("../../models/");
const { Bookmarkx } = require("../../models/");
const {user: User} = require("../../models/");
const {Userx} = require("../../models/");
const { Trip } = require("../../models/");
const { Tripx } = require("../../models/");
const bycript = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");
const { valid } = require("@hapi/joi");

exports.getBookmarkedByUserId = async (req, res) => {
  try {
    const { id } = req.params;

    const bookmarkedData = await Bookmarkx.findAll({
      order: [["createdAt", "DESC"]],
      where: {
        userId: id,
      },
      include: [
        {
          model: Tripx,
          include: [
            {
              model: Userx,
            },
          ]
        },
      ],
    });

    res.status(200).send({
      message: "response Success",
      data: {
        bookmarkedData,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.storeBookmark = async (req, res) => {
  console.log("isi req.body :")
  console.log(req.body);
  const {userId, journeyId} = req.body

  try {
    const isAlreadyBookmarked = await Bookmarkx.findOne({
      where: {
        journeyId: journeyId,
        userId: userId
      }
    });
    console.log(isAlreadyBookmarked)
    if (isAlreadyBookmarked)
      return res.status(400).send({
        message: `Trips is bookmarked already`,
      });


    console.log("breakpoint5")
    const queryResponse = await Bookmarkx.create({
      ...req.body, journeyId:journeyId, userId:userId
    });
    console.log(queryResponse);
    res.status(200).send({
      message: "trip berhasil di bookmark ",
      data: {
        id: queryResponse.id,
        name: queryResponse.journeyId,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.deleteBookmark = async (req, res) => {
  // console.log("isi req body :", req.body)
  // console.log("isi req data :", req.data)

  const {userId, journeyId} = req.body

  try {
    const bookmarkFound = await Bookmarkx.findOne({
      where: {
        userId: userId,
        journeyId: journeyId
      },
    });

    if (!bookmarkFound)
      return res.status(400).send({
        message: `trip is not existed`,
      });
    else {
      await Bookmarkx.destroy({
        where: {
          userId: userId,
          journeyId: journeyId
      },
      });
    }
    res.status(200).send({
      message: "bookmark data is removed",
      data: { id: journeyId },
    });
  } catch (err) {
    console.log(err);
    res.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};