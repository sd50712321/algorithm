const { createWorker } = require("tesseract.js");
const fs = require("fs");

async function extractText(imagePath) {
  const worker = await createWorker();

  await worker.load();
  await worker.loadLanguage("kor+eng");
  await worker.initialize("kor+eng");
  const {
    data: { text },
  } = await worker.recognize(imagePath);

  await worker.terminate();

  return text;
}

fs.readFile("./image.png", async (err, image) => {
  if (err) {
    console.error(err);
  } else {
    const text = await extractText(image);
    console.log(text);
  }
});
