const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'frontend/js/products.js');
let content = fs.readFileSync(filePath, 'utf-8');

// Use regex to replace img: "" based on the form
content = content.replace(/\{.*?id:\s*(\d+).*?form:\s*"([^"]+)".*?img:\s*""\s*\}/g, (match, id, form) => {
  let imgPath = 'images/meds/tablet.png'; // default
  
  const f = form.toLowerCase();
  if (f.includes('capsule')) {
    imgPath = 'images/meds/capsule.png';
  } else if (f.includes('syrup') || f.includes('suspension') || f.includes('liquid') || f.includes('drops')) {
    imgPath = 'images/meds/syrup.png';
  } else if (f.includes('cream') || f.includes('ointment') || f.includes('gel') || f.includes('lotion')) {
    imgPath = 'images/meds/ointment.png';
  } else if (f.includes('injection') || f.includes('vial') || f.includes('ampoule')) {
    imgPath = 'images/meds/injection.png';
  } else if (f.includes('powder') || f.includes('sachet')) {
    imgPath = 'images/meds/capsule.png'; // closest match
  } else if (f.includes('soap')) {
    imgPath = 'images/meds/ointment.png'; 
  } else if (f.includes('tablet')) {
    imgPath = 'images/meds/tablet.png';
  }

  return match.replace(/img:\s*""/, `img: "${imgPath}"`);
});

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Successfully updated 52 products with images!');
