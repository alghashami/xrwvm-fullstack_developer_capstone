const express = require('express');
const app = express();
const port = 5000;

// بيانات وهمية للوكلاء (لقد أضفت وكيلاً في كانساس!)
const dealerships = [
    { "id": 1, "full_name": "Best Cars", "city": "New York", "state": "New York", "st": "NY", "address": "123 Main St", "zip": "10001", "lat": 40.7128, "long": -74.0060 },
    { "id": 2, "full_name": "Super Autos", "city": "Los Angeles", "state": "California", "st": "CA", "address": "456 Auto Row", "zip": "90001", "lat": 34.0522, "long": -118.2437 },
    { "id": 3, "full_name": "Luxury Motors", "city": "Chicago", "state": "Illinois", "st": "IL", "address": "789 Drive Ave", "zip": "60601", "lat": 41.8781, "long": -87.6298 },
    { "id": 4, "full_name": "Kansas Fine Cars", "city": "Wichita", "state": "Kansas", "st": "KS", "address": "101 KS Ave", "zip": "67202", "lat": 37.6872, "long": -97.3301 } // هذا هو الوكيل الجديد
];

// بيانات وهمية للمراجعات
const reviews = [
    { "id": 1, "name": "John Doe", "dealership": 1, "review": "Great service!", "purchase": true, "purchase_date": "2023-10-01", "car_make": "Toyota", "car_model": "Camry", "car_year": 2022 }
];

// *** هذا هو الكود الذي تم تعديله لهذه المهمة ***
// نقطة نهاية للحصول على كل الوكلاء أو فلترتهم حسب الولاية
app.get('/api/dealership', (req, res) => {
  const state = req.query.state; // الحصول على قيمة 'state' من الرابط
  if (state) {
    // إذا كان هناك 'state' في الرابط، قم بالفلترة
    const filteredDealers = dealerships.filter(d => d.st === state);
    res.json(filteredDealers);
  } else {
    // إذا لم يكن هناك 'state'، أرسل كل الوكلاء
    res.json(dealerships);
  }
});

// نقطة نهاية للحصول على تفاصيل وكيل محدد بالـ ID
app.get('/api/dealership/:id', (req, res) => {
  const dealerId = parseInt(req.params.id);
  const dealer = dealerships.find(d => d.id === dealerId);
  if (dealer) {
    res.json(dealer);
  } else {
    res.status(404).send('Dealer not found');
  }
});

// نقطة نهاية للحصول على المراجعات
app.get('/api/review', (req, res) => {
  res.json(reviews);
});

// تشغيل الخادم
app.listen(port, () => {
  console.log(`Express server is running on port ${port}`);
});