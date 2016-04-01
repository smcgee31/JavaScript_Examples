/*A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
of Data is to have an Array full of objects. */

var data = [
    {
        artist: 'shakira',
        album: 'hips don\'t lie',
        tracks: 16
    },
    {
        artist: 'shakira',
        album: 'mariposa',
        tracks: 12
    },
    {
        artist: 'shakira',
        album: 'greatest hits',
        tracks: 19
    }
];

//Create an empty array called users.

var users = [];

/*Now add three user objects to your users array. Each user object should contain the
following properties. name, email, password, username.*/

var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
};
var user2 = {
    name: 'Steve McGee',
    email: 'solodesign31@gmail.com',
    password: 'oihj84hh43er',
    username: 'smcgee31'
};
var user3 = {
    name: 'Sally Smith',
    email: 'ssmith@gmail.com',
    password: 'jfopwe4746sger',
    username: 'ssmith2323'
};

users.push(user1, user2, user3);
/*Now you have a very common data structure. Twitter is a good use case.
It's easy to imagine that your followers list on Twitter is an Array full or objects
and those objects contain properties about the specific person you follow.*/

/*Now let's say that Tyler decided to delete his account. Loop through your array of
objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
Once you find the particular index he's located in, delete him from the array.*/

for (var i = 0; i < users.length; i++) {
    if (users[i].email === 'tylermcginnis33@gmail.com') {
        users.splice(i,1);
    }
}

//The activity we just did is very much how data works in 'the real world'.
