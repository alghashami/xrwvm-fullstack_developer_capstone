const express = require('express');
const app = express();
const port = 5000;

// هذا هو الكود الذي يعالج طلب "جميع الوكلاء"
app.get('/api/dealership', (req, res) => {
  // هذه بيانات وهمية، لأننا لا نملك قاعدة بيانات حقيقية
  const dealerships = [
    { "id": 1, "full_name": "Best Cars", "city": "New York", "state": "NY", "st": "NY", "address": "123 Main St", "zip": "10001", "lat": 40.7128, "long": -74.0060 },
    { "id": 2, "full_name": "Super Autos", "city": "Los Angeles", "state": "CA", "st": "CA", "address": "456 Auto Row", "zip": "90001", "lat": 34.0522, "long": -118.2437 },
    { "id": 3, "full_name": "Luxury Motors", "city": "Chicago", "state": "IL", "st": "IL", "address": "789 Drive Ave", "zip": "60601", "lat": 41.8781, "long": -87.6298 }
  ];
  res.json(dealerships); // إرسال قائمة الوكلاء كـ JSON
});

// هذا هو الكود الذي يعالج طلب "المراجعات"
app.get('/api/review', (req, res) => {
  const reviews = [
      { "id": 1, "name": "John Doe", "dealership": 1, "review": "Great service!", "purchase": true, "purchase_date": "2023-10-01", "car_make": "Toyota", "car_model": "Camry", "car_year": 2022 }
  ];
  res.json(reviews);
});

// هذا الكود يشغل الخادم
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});