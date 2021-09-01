const express = require("express");
const router = express.Router();
const fs = require("fs");
const crypto = require("crypto");
const algorithm = "aes-256-ctr";
const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
const iv = crypto.randomBytes(16);

const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, secretKey, iv);

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: iv.toString("hex"),
    content: encrypted.toString("hex"),
  };
};

const decrypt = (hash) => {
  const decipher = crypto.createDecipheriv(
    algorithm,
    secretKey,
    Buffer.from(hash.iv, "hex")
  );

  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(hash.content, "hex")),
    decipher.final(),
  ]);

  return decrpyted.toString();
};

router.get("/", function (req, res) {
  const file = req.query.file;
  if (file) {
    try {
      fs.access("./files/" + file + ".txt", fs.F_OK, (err) => {
        if (err) {
          res.send({ error: "No such file exists" }).json();
        } else {
          const data = fs.readFileSync("./files/" + file + ".txt");
          const decrypted = decrypt(JSON.parse(data.toString()));
          const fd = fs.openSync("./files/" + file + "_D.txt", "w");
          fs.writeFileSync(fd, decrypted);
          res.send({ decrypted }).json();
        }
      });
    } catch (exception) {
      res.send({ error: "An exception was thrown" }).json();
    }
  } else {
    res.send({ error: "Provide a valid file name" }).json();
  }
});

router.post("/", function (req, res) {
  const body = req.body;
  try {
    fs.access("./files/" + body.file + ".txt", fs.F_OK, (err) => {
      if (err) {
        res.send({ error: "No such file exists" }).json();
      } else {
        const file = fs.readFileSync("./files/" + body.file + ".txt");
        const encrypted = encrypt(file.toString());
        const fd = fs.openSync("./files/" + body.file + "_C.txt", "w");
        fs.writeFileSync(fd, JSON.stringify(encrypted));
        res.send({ encrypted }).json();
      }
    });
  } catch (exception) {
    res.send({ error: "An exception was thrown" }).json();
  }
});

module.exports = router;
