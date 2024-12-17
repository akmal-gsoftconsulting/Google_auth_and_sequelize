const sequelize = require('./config/db');
const {User} = require('./config/association');
const {Post} = require('./config/association');
const { Op} = require('sequelize');


async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection to PostgreSQL has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


async function syncDatabase() {
  try {
    // await sequelize.sync({ force: true }); 
    await sequelize.sync(); 
    console.log('All models were synchronized successfully.');

    // Example: Create a user
    // await User.create({
    //   username: 'hamza',
    //   email: 'hamza@example.com',
    //   password: '123456',
    // });

    // console.log('User added!');
  } catch (error) {
    console.error('Error syncing database:', error);
  } 
  // finally {
  //   await sequelize.close(); 
  // }
}



async function queryUsers() {
  try {

    // 1. Fetch all users
    // const users = await User.findAll();
    // console.log('All Users:', users.map(user => user.toJSON()));

    // 2. Find one user by condition (username)
    // const user = await User.findOne({ where: { username: 'john_doe' } });
    // if (user) console.log('Found User:', user.toJSON());

    // 3. Find a user by primary key
    // const userById = await User.findByPk(1);
    // console.log('User by Primary Key:', userById ? userById.toJSON() : 'Not Found');

    // // 4. Count total users
    // const userCount = await User.count();
    // console.log('Total User Count:', userCount);

    // // 5. Find users with specific attributes
    // const selectedFields = await User.findAll({
    //   attributes: ['id', 'username', 'email'], // Only fetch specific fields
    // });
    // console.log('Users with Selected Fields:', selectedFields.map(u => u.toJSON()));

    // // 6. Find users with a condition (e.g., username starts with 'john')
    // const filteredUsers = await User.findAll({
    //   where: { username: { [Op.like]: 'john%' } }, // Like operator
    // });
    // console.log('Users matching condition:', filteredUsers.map(u => u.toJSON()));

    // // 7. Update a user's data
    // await User.update({ email: 'updated_email@example.com' }, {
    //   where: { username: 'john_doe' },
    // });
    // console.log('User email updated.');

    // // 8. Fetch updated user
    // const updatedUser = await User.findOne({ where: { username: 'john_doe' } });
    // console.log('Updated User:', updatedUser ? updatedUser.toJSON() : 'Not Found');

    // // 9. Delete a user 
    // await User.destroy({ where: { username: 'hamza' } });
    // console.log('User deleted.');

    // // 10. Restore soft-deleted user (if paranoid mode is on)
    // await User.restore({ where: { username: 'john_doe' } });
    // console.log('User restored.');

    // // 11. Find users with pagination (limit and offset)
    // const paginatedUsers = await User.findAll({ limit: 3, offset: 0 });
    // console.log('Paginated Users:', paginatedUsers.map(u => u.toJSON()));

    // // 12. Aggregate function: Find max ID
    // const maxId = await User.max('id');
    // console.log('Max User ID:', maxId);

    // // 13. Bulk create users
    // await User.bulkCreate([
    //   { username: 'jane_doe', email: 'jane@example.com', password: '123456' },
    //   { username: 'mark_smith', email: 'mark@example.com', password: '654321' },
    // ]);
    // console.log('Bulk users created.');

    // // 14. Fetch users sorted by username
    // const sortedUsers = await User.findAll({ order: [['id', 'DESC']] });
    // console.log('Sorted Users:', sortedUsers.map(u => u.toJSON()));

  } catch (error) {
    console.error('Error fetching users:', error);
  }
}


async function queryPosts() {
  try {
    // 1. Create a new post with a user
    // const newPost = await Post.create({
    //   title: 'My 1st Sequelize post',
    //   content: 'This is a sample post content.',
    //   userId: 4,  
    // });
    // console.log("post created");
    
    // const Posts = await Post.findAll();
    // console.log('Fetched posts:', Posts.map(p => p.toJSON()));

    // const posts = await Post.findAll({
    //   where: {
    //     userId: 4,  
    //   },
    //   include: {
    //     model: User,
    //     attributes: ['username', 'email'],
    //   },
    // });
    // console.log('Posts with User info:', JSON.stringify(posts, null, 2));



    // const maxTitleLength = await Post.findOne({
    //   attributes: [[sequelize.fn('LENGTH', sequelize.col('title')), 'title_length']],
    //   order: [[sequelize.fn('LENGTH', sequelize.col('title')), 'desc']],
    // });
    
    // console.log('Maximum Title Length:', maxTitleLength?.get('title_length'));



    // const sumContentLengths = await Post.findAll({
    //   attributes: [[sequelize.fn('SUM', sequelize.fn('LENGTH', sequelize.col('content'))), 'total_content_length']],
    // });
    
    // console.log('Sum of Content Lengths:', sumContentLengths[0]?.get('total_content_length'));
    

    // const distinctUsernames = await User.findAll({
    //   attributes: [[sequelize.fn('DISTINCT', sequelize.col('username')), 'distinct_username']],
    // });
    // console.log('Distinct Usernames:', distinctUsernames.map(user => user.get('distinct_username')));


    

  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}




async function main()
{
  await testConnection();
  await syncDatabase();
  await queryUsers();
  await queryPosts();
}


main();


