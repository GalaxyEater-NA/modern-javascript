// object literal
let user = {
    name: "John",
    age: 50,
    email: "johndoe@gmail.com",
    location: 'New York',
    blogs: ["why mac & cheese rules", "10 things to make with marmite"],
    login: function(){
        console.log('the user logged in');
    },
    logout: function(){
        console.log('the user logged out');
    },
    logBlogs: function(){
        // console.log(this.blogs);
        console.log('this user has written the following blogs: ');
        this.blogs.forEach(blog =>{
            console.log(blog);
        })
    }
};
console.log(user)
console.log(user.name);

user.age = 62
console.log(user.age);

console.log(user['email']);
user['name'] = 'chun-li';
console.log(user['name']);

console.log(typeof user);

// methods
user.login();
const name = 'mario';
name.toUpperCase();

user.logBlogs();