import express from "express";
import Jimp from "jimp";
import fs from "fs";
import path from "path";
import { User } from "../models/User.js"; // Presupunând că ai modelul User definit

const router = express.Router();

router.post("/uploadAvatar", upload.single("avatar"), async (req, res) => {
  try {
    const userId = req.user.id; // Obține ID-ul utilizatorului (presupunând că ai middleware de autentificare)

    // Procesează avatarul cu Jimp
    const avatar = await Jimp.read(req.file.path);
    await avatar.resize(250, 250).quality(80).write(req.file.path);

    // Mută avatarul în public/avatars
    const newFilename = `${userId}_${Date.now()}${path.extname(
      req.file.originalname
    )}`;
    const newPath = path.join("public", "avatars", newFilename);
    await fs.promises.rename(req.file.path, newPath);

    // Salvează URL-ul în baza de date
    const avatarURL = `/avatars/${newFilename}`;
    await User.findByIdAndUpdate(userId, { avatarURL });

    res.json({ message: "Avatar încărcat și procesat cu succes", avatarURL });
  } catch (error) {
    console.error("Eroare la încărcarea avatarului:", error);
    res.status(500).json({ message: "Eroare server" });
  }
});

/**
 *
 *

Explicații

* **upload.single('avatar')**: Middleware-ul Multer gestionează încărcarea unui singur fișier numit "avatar".
* **Jimp.read(req.file.path)**: Încarcă fișierul temporar în Jimp.
* **resize(250, 250).quality(80).write(req.file.path)**: Redimensionează, setează calitatea și suprascrie fișierul temporar.
* **fs.promises.rename(...)**: Mută fișierul în folderul `public/avatars` cu un nume unic.
* **User.findByIdAndUpdate(...)**: Actualizează câmpul `avatarURL` al utilizatorului în baza de date.

Note importante

* Asigură-te că ai creat folderul `public/avatars` în proiectul tău.
* Implementează un middleware de autentificare pentru a obține `req.user.id`.
* Gestionează erorile (de exemplu, dacă utilizatorul nu este găsit, dacă încărcarea sau procesarea fișierului eșuează).
* Poți adăuga validări suplimentare pentru tipul și dimensiunea fișierului.
* Servește fișierele statice din folderul `public` folosind `app.use(express.static('public'))`.
 */
