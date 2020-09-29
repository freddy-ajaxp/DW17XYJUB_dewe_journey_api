// const { Trip: trip } = require("../../models");
const { Tripx: tripx } = require("../../models");
// const { User } = require("../../models");
const { Userx } = require("../../models");
const bycript = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");
const { valid } = require("@hapi/joi");
const { Op } = require("sequelize");
const TODAY_START = new Date().setHours(0, 0, 0, 0);
const NOW = new Date();

exports.getAllTrips = async (request, response) => {
  try {
    const trips = await tripx.findAll({
      order: [["createdAt", "DESC"]],
      // where: {
      //   createdAt: {
      //     [Op.gt]: TODAY_START,
      //     [Op.lt]: NOW
      //   }
      // },
      include: {
        model: Userx,
        attributes: { exclude: ["updatedAt", "password"] },
      },
      attributes: { exclude: ["updatedAt"] },
    });
    response.status(200).send({
      message: "response berhasil",
      data: { trips },
    });

  } catch (err) {
    console.log(err);
    response.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};


exports.getbyMonth = async (request, response) => {
  const bulanDiminta = request.params.id;
  const tahunSkrg = new Date().getFullYear()
  console.log("tahun sekarang", tahunSkrg)
  try {
    const trips = await tripx.findAll({
      order: [["createdAt", "DESC"]],
      where: {
        createdAt: {
          [Op.gt]: new Date(`${tahunSkrg}-${bulanDiminta}-01`),
          [Op.lt]: new Date(`${tahunSkrg}-${bulanDiminta}-31`),          
        }
      },
      include: {
        model: Userx,
        attributes: { exclude: ["updatedAt", "password"] },
      },
      attributes: { exclude: ["updatedAt"] },
    });
    response.status(200).send({
      message: "response berhasil",
      data: { trips },
    });

  } catch (err) {
    console.log(err);
    response.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.getTrip = async (req, res) => {
  try {
    const { id } = req.params;
    const detailTrip = await tripx.findOne({
      where: {
        id: id,
      },
      include: {
        model: Userx,
      },
      attributes: {
        exclude: ["updatedAt"],
      },
    });

    if (!detailTrip)
      return res.status(400).send({
        message: `trip with id: ${id} is not existed`,
      });

    res.status(200).send({
      message: "response Success",
      data: {
        detailTrip,
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

exports.storeTrip = async (req, res) => {
  console.log("apakah req diterima dari sebelumnya", req.namaFileUpload);
  console.log("apakah req diterima dari sebelumnya", req.body.title);
  console.log("apakah req diterima dari sebelumnya", req.body.description);
  console.log("apakah req idUser dari sebelumnya", req.body.idUser);
  try {
    const { title, description, content, idUser, namaFileUpload } = req.body;
    const tripExist = await tripx.findOne({
      where: {
        title: title,
      },
    });
    console.log(tripExist);
    if (tripExist) {
      return res.status(409).send({
        error: {
          message: "nama trip sudah terdaftar",
        },
      });
    }
    console.log("breakpoint5");
    const queryResponse = await tripx.create({
      title: title,
      description,
      content,
      image: namaFileUpload,
      userId: idUser,
    });
    console.log(queryResponse);
    res.status(200).send({
      message: "trip baru berhasil ditambahkan",
      data: {
        id: queryResponse.id,
        title: queryResponse.title,
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

exports.getTripByUserId = async (request, response) => {
  try {
    const { id } = request.params;
    const trips = await tripx.findAll({
      order: [["createdAt", "DESC"]],
      where: {
        userId: id,
      },
      include: {
        model: Userx,
      },
      attributes: { exclude: ["updatedAt"] },
    });
    response.status(200).send({
      message: "response Success",
      data: { trips },
    });
  } catch (err) {
    console.log(err);
    response.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};

exports.searchTrip = async (request, response) => {
  // console.log('Request.body',request.query.keyword)
  let name = request.query.keyword;
  // let  name = request.body.keyword

  console.log("name yang ditangkap", name);
  // name="jepang"
  try {
    const trips = await tripx.findAll({
      order: [["createdAt", "DESC"]],
      where: { title: { [Op.like]: "%" + name + "%" } },
      include: {
        model: Userx,
      },
      attributes: { exclude: ["createdAt", "updatedAt"] },
    });
    response.status(200).send({
      message: "response Success",
      data: { trips },
    });
  } catch (err) {
    console.log(err);
    response.status(500).send({
      error: {
        message: "Server ERROR",
      },
    });
  }
};
