const express = require("express");
const { auth, authAdmin } = require('../middleware/auth');
const router = express.Router();
const multer = require("multer");
var upload = multer({dest:'uploads/'});
// const multiparty = require('connect-multiparty')
// const MultipartyMiddleware = multiparty({uploadDir:'./images'})
const { getAllUsers, getUser, storeUser, login, changeProfile} = require("../controllers/database/user");
const { getAllTrips,getbyMonth, getTripByUserId, getTrip, storeTrip, searchTrip} = require("../controllers/database/trip");
const { getBookmarkedByUserId, storeBookmark, deleteBookmark} = require("../controllers/database/bookmark");
const { fileUpload, profileUpload } = require("../middleware/file-upload");

//TABEL USER: get getall post delete checkUser
router.get("/users", getAllUsers);
router.get("/user/:id", getUser);
router.post("/user", storeUser);
router.post("/login", login);
router.patch("/user/:id", auth, profileUpload('profile'), changeProfile);

//TABEL TRIP: get getall post edit delete
router.get("/trips", getAllTrips);
router.get("/trips/getbyMonth/:id", getbyMonth);
router.get("/trips/:id", getTripByUserId);
router.get("/trip/:id", getTrip);
router.post("/trip/", auth, storeTrip);
router.get("/search/", searchTrip);
//TABEL BOOKMARK
router.get("/bookmark/:id", getBookmarkedByUserId);
router.post("/bookmark/", storeBookmark);
router.delete("/bookmark/", auth, deleteBookmark);

//UPLOAD
router.post("/upload", fileUpload('image'), storeTrip);

//export roouter
module.exports = router;