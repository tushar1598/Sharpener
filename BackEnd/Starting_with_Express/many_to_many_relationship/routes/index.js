const express = require("express");
const router = express.Router();

const homeController = require("../controller/homeController");

router.get("/", homeController.Home);
router.get("/profile", homeController.Profile);
router.get("/sign-in", homeController.SignIn);
router.get("/sign-up", homeController.SignUp);
router.post("/create", homeController.Create);
router.post("/create-session", homeController.CreateSession);
router.post("/create-slot", homeController.CreateAppointment);
router.get("/candidates", homeController.Candidates);
router.get("/sign-out", homeController.Destroy);
router.get("/delete/:email", homeController.Delete);
router.use("/api", require("./api"));

module.exports = router;
