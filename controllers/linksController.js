const knex = require("../db/db");

exports.index = async (req, res) => {
  try {
    const links = await knex("links").select("*");
    res.status(200).json(links);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.singleLink = async (req, res) => {
  const linkId = req.params.id;
  try {
    const link = await knex("links").where({ id: linkId }).first();
    if (!link) {
      return res.status(404).json({ message: "Link not found" });
    }
    res.status(200).json(link);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.createLink = async (req, res) => {
  try {
    await knex("links").insert(req.body);
    res.status(201).json({ message: "Link created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.updateLink = async (req, res) => {
  const linkId = req.params.id;
  try {
    await knex("links").where({ id: linkId }).update(req.body);
    res.status(200).json({ message: "Link updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteLink = async (req, res) => {
  const linkId = req.params.id;
  try {
    await knex("links").where({ id: linkId }).del();
    res.status(200).json({ message: "Link deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
