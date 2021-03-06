/*
   routes to handle database queries
*/

/* ================================= SETUP ================================= */

const router = require("express").Router();

/* =========================== LOAD CONTROLLERS ============================ */

const propertyCtrl = require("../controllers/properties.ctrl");


/* ============================ PROPERTY ROUTES ============================ */

// GET ALL PROPERTIES
//   Example: GET >> /api/properties
//   Secured: no
//   Expects: null
//   Returns: Array of property objects on success.
//
router.get("/properties", propertyCtrl.getProperties);

/* ================================ EXPORT ================================= */

module.exports = router;
