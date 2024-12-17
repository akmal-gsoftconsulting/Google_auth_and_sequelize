const User = require('../models/User');
const Post = require('../models/Post');


User.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE' });
Post.belongsTo(User, { foreignKey: 'userId' });


module.exports = { User, Post };