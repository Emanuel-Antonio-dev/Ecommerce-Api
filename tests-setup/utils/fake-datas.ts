function generateFakePhoneNumber() {
  return `9${Math.floor(10000000 + Math.random() * 90000000)}`;
}

function generateFakeEmail() {
  const unique = `${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  return `test_${unique}@gmail.com`;
}

export { generateFakePhoneNumber, generateFakeEmail };
