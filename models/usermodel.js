const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

// Pre-save hook to hash the password before saving the user
userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
  });

const User = mongoose.model('User', userSchema);

module.exports = User;