import { db } from "../db.js";
import jwt from "jsonwebtoken";

export const getAllPost = (req, res) => {
  const q = req.query.cat
    ? //get list post by category
      "SELECT * FROM posts WHERE cat=?"
    : //get all posts
      "SELECT * FROM posts";

  db.query(q, [req.query.cat, req.params.id], (err, data) => {
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
  const token = req.cookies.access_token;
  if (!token) return res.status(401).json("Not authenticated!");

  jwt.verify(token, "quitam", (err, userInfo) => {
    if (err) return res.status(403).json("Token is not valid!");

    const postId = req.params.id;
    const q = "DELETE FROM posts WHERE `id` = ? AND `uid` = ?";

    db.query(q, [postId, userInfo.id], (err, data) => {
      if (err) return res.status(403).json("You can delete only your post!");

      return res.json("Post has been deleted!");
    });
  });
};
export const updatePost = (req, res) => {
  res.json("from controller");
};
