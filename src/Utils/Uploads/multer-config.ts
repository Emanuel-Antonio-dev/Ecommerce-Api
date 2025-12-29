import { Request } from "express";
import fs from "fs";
import multer, { StorageEngine } from "multer";
import path from "path";
import { HttpException } from "../../Common/Middlewares/Filters/HttpException";

const pathDir = path.resolve(__dirname, "../Uploads");

if (!fs.existsSync(pathDir))
{
  fs.mkdirSync(pathDir, { recursive: true });
  console.log("Diretorio criado");
}

const directories = {
  ProductImages: "ProductImages",
};

Object.values(directories).forEach((dir) => {
  const fullPath = path.join(pathDir, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log("Diretorio criado");
  }
});

const createUploader = () => {
  const storage: StorageEngine = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb) => {
      let uploaderFolder = pathDir;

      if (file.fieldname === "ProductImages") {
        uploaderFolder = path.join(pathDir, directories.ProductImages);
      }

      cb(null, uploaderFolder);
    },
    filename: (req: Request, file: Express.Multer.File, cb) => {
      const uniqueSuffix = `${Date.now()}-${Math.round(
        Math.random() * 1e9
      )}${path.extname(file.originalname)}`;
      cb(null, uniqueSuffix);
    },
  });

  const fileFilter = (
    req: Request,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
  ) => {
    const allowedMimes = {
      ProductImages: ["image/jpeg", "image/png", "image/jpg", "image/svg+xml"],
    };

    const field = file.fieldname as keyof typeof allowedMimes;

    if (allowedMimes[field] && allowedMimes[field].includes(file.mimetype)) {
      cb(null, true);
    } else {
      console.log(file)
      console.log("Tipo de arquivo inválido:", file.mimetype);
      cb(new HttpException(false, 400, "Tipo de arquivo inválido. Apenas imagens são permitidas."));
    }
  };

  return multer({
    storage,
    fileFilter,
    limits: { fileSize: 50 * 1024 * 1024 },
  });
};

const upload = createUploader();

export { upload, createUploader };
