const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const authorizeRole = require("../middleware/roleMiddleware");

const router = express.Router();


// only admin can access this router
router.get("/admin", verifyToken, authorizeRole("admin"), (req, res) => {
  res.json({ message: "welcome admin" });
});

// admin and manager can access this router
router.get(
  "/manager",
  verifyToken,
  authorizeRole("admin", "manager"),
  (req, res) => {
    res.json({ message: "welcome manager" });
  }
);

// All can access this router
router.get(
  "/user",
  verifyToken,
  authorizeRole("admin", "manager", "user"),
  (req, res) => {
    res.json({ message: "welcome user" });
  }
);

module.exports = router;
