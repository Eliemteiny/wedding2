const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const XLSX = require('xlsx');
const admin = require('firebase-admin');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Initialize Firebase Admin SDK
const serviceAccount = require('./firebaseServiceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

app.post('/submit', async (req, res) => {
  const formData = req.body;

  try {
    // Save to Firestore
    const docRef = await db.collection('guests').add(formData);
    console.log('Document written with ID: ', docRef.id);

    // Read existing data
    let data = [];
    const filePath = 'guest_info.xlsx';
    if (fs.existsSync(filePath)) {
      const workbook = XLSX.readFile(filePath);
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      data = XLSX.utils.sheet_to_json(worksheet);
    }

    // Append new data
    data.push(formData);

    // Write data to Excel file
    const newWorkbook = XLSX.utils.book_new();
    const newWorksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'Guests');
    XLSX.writeFile(newWorkbook, filePath);

    res.send({ message: 'Guest information submitted successfully!' });
  } catch (error) {
    console.error('Error adding document: ', error);
    res.status(500).send({ message: 'Error adding guest info, please try again.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
