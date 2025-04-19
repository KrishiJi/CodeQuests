require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const challengeRoutes = require('./routes/Challenges');
const submissionRoutes = require('./routes/Submissions');

const seederRoutes = require('./routes/seeder');


const app = express();
app.use('/api/seeder', seederRoutes);
app.use(cors());
app.use(express.json());
app.use('/api/challenges', challengeRoutes);
app.use('/api/submissions', submissionRoutes);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.get('/', (req, res) => res.send('CodeQuests API running!'));

// TODO: Add routes here

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
