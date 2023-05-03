import { db } from "../db.js";
export const getAllPost = (req, res) => {
  const q = req.query.cat
    ? "SELECT * FROM posts WHERE cat=?"
    : "SELECT * FROM posts";

  db.query(q, [req.query.cat], (err, data) => {
    if (err) return res.status(500).send(err);
    return res.status(200).json(data);
  });
};
export const getPost = (req, res) => {
  const q =
    "SELECT p.id,`fullname`,`title`, `img`, `avatar`, `uid`,`desc`,`cat`,`date` FROM posts p, users u WHERE p.uid = u.id AND p.id=?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json(data[0]);
  });
};
export const addPost = (req, res) => {
  res.json("from controller");
};
export const deletePost = (req, res) => {
  res.json("from controller");
};
export const updatePost = (req, res) => {
  res.json("from controller");
};
