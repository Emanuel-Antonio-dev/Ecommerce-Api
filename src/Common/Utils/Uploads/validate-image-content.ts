import { Request, Response, NextFunction } from "express";
import fs from "fs";

// ✅ FIX (upload inseguro): o `mimetype` que o multer usa no fileFilter vem do
// header Content-Type enviado pelo cliente no multipart/form-data — é
// facilmente falsificável. Esta camada extra lê a assinatura binária real
// (magic bytes) do arquivo já salvo em disco e rejeita qualquer coisa que não
// seja de fato um JPEG ou PNG, independente do que o cliente declarou.
const MAGIC_BYTES: Record<string, Buffer[]> = {
  jpeg: [Buffer.from([0xff, 0xd8, 0xff])],
  png: [Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])],
};

function isValidImageSignature(filePath: string): boolean {
  const fd = fs.openSync(filePath, "r");
  try {
    const header = Buffer.alloc(8);
    fs.readSync(fd, header, 0, 8, 0);

    return Object.values(MAGIC_BYTES).some((signatures) =>
      signatures.some((sig) => header.slice(0, sig.length).equals(sig))
    );
  } finally {
    fs.closeSync(fd);
  }
}

export function validateUploadedImageContent(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const filesByField = (req.files ?? {}) as Record<string, Express.Multer.File[]>;
  const allFiles = Object.values(filesByField).flat();

  if (allFiles.length === 0) {
    return next();
  }

  for (const file of allFiles) {
    let valid = false;
    try {
      valid = isValidImageSignature(file.path);
    } catch {
      valid = false;
    }

    if (!valid) {
      // remove todos os arquivos já salvos desta requisição antes de rejeitar
      for (const f of allFiles) {
        fs.unlink(f.path, () => {});
      }
      return res.status(400).json({
        success: false,
        statusCode: 400,
        message: `O arquivo "${file.originalname}" não é uma imagem JPEG/PNG válida.`,
      });
    }
  }

  return next();
}
