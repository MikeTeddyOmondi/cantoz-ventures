const { Router } = require("express");
const router = Router();
const controller = require("../controllers");

router.get("/", controller.index);
router.get("/about", controller.about);
router.get("/contact", controller.contact);
router.get("/services", controller.services);
router.get("/portfolio", controller.portfolio);

module.exports = router;
