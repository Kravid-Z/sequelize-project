const express = require("express");
const Tutor = require("../../db").Tutor;
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      if (!req.body.data){
        const data = await Tutor.create(req.body);
        res.status(201).send(data);
      }else{
      const data = await Tutor.bulkCreate(req.body.data);
      res.status(201).send(data);}
    } catch (e) {
      console.log(e);
    }
  });

router.route("/:tutorId/classes/:classId").post(async (req, res, next) => {
  try {
    const tutor = await Tutor.findByPk(req.params.tutorId);
    const result = await tutor.addClass(req.params.classId);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      const data = await Tutor.findByPk(req.params.id);
      res.send(data);
    } catch (e) {
      console.log(e);
    }
  })
  .put(async (req, res, next) => {
    try {
      const data = await Tutor.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });
      res.status(200).send(data[1][0]);
    } catch (e) {
      console.log(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const data = await Tutor.destroy({ where: { id: req.params.id } });
      if (data > 0) {
        res.status(204).send();
      } else {
        res.status(404).send("not found");
      }
    } catch (e) {
      console.log(e);
    }
  });

module.exports = router;
