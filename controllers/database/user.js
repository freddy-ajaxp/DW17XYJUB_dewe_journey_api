const { user } = require("../../models");
const { Userx } = require("../../models");
const bycript = require("bcrypt");
const jwt = require("jsonwebtoken");
const joi = require("@hapi/joi");
const { valid } = require("@hapi/joi");

exports.getAllUsers = async (request, response) => {
  try {
    const users = await Userx.findAll({
      attributes: {
        exclude: [
          "createdAt",
          "updatedAt",
          "id",
          "fullname",
          "phone",
          "address",
        ],
      },
    });
    response.status(200).send({
      message: "response Success",
      data: { users },
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

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const detailUser = await Userx.findOne({
      where: {
        id: id,
      },
    });

    if (!detailUser)
      return res.status(400).send({
        message: `user with id: ${id} is not existed`,
      });

    res.status(200).send({
      message: "response Success",
      data: {
        detailUser,
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

exports.storeUser = async (req, res) => {
  try {
    const { fullname, email, password, phone, address} = req.body;
    const emailExist = await Userx.findOne({
      where: {
        email,
      },
    });

    if (emailExist) {
      return res.status(400).send({
        error: {
          message: "existing email is already registered",
        },
      });
    }

    const saltRounds = 10;
    const hashedPassword = await bycript.hash(password, saltRounds);

    const createResponse = await Userx.create({
      fullname: fullname,
      email: email,
      password: hashedPassword,
      phone: phone,
      address: address,
      picture: "default.png",
    });

    const secret_key = process.env.SECRET_KEY;
    const token = jwt.sign(
      {
        id: createResponse.id,
      },
      secret_key
    );

    res.status(200).send({
      message: "user baru berhasil didaftarkan",
      data: {
        id: createResponse.id,
        email: createResponse.email,
        token,
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

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const userFound = await Userx.findOne({
    where: {
      email: email,
    },
  });
  if (!userFound)
    return res.status(400).send({
      message: `Username or Password is invalid`,
    });
  try {
    const validPass = await bycript.compare(password, userFound.password);

    if (!validPass)
      return res.status(400).send({
        message: `Username or Password is invalid`,
      });

    const token = jwt.sign(
      {
        id: userFound.id,
      },
      process.env.SECRET_KEY
    );
    
    res.status(200).send({
      data: {
        id: userFound.id,
        email: userFound.email,
        token: token,
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

exports.changeProfile = async (req, res) => {
  try {
    const newData = {
      picture: req.body.namaFileUpload,
    };
    const queryResult = await Userx.update(newData, {
      where: {
        id: req.params.id,
      },
    });
    console.log(queryResult);
    return res.status(200).send({
      data: {
        message: "profile is successfully updated ",
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      error: {
        message: "Something Happenned, contact Admin",
      },
    });
  }
};