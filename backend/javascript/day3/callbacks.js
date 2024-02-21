function greet(name,callback){
    const greeting="Hello "+name
    callback(greeting)
}

function displayGreeting(message){
    console.log(message)
}
greet("Rohit",displayGreeting)

/**
 * callback hell | Pyramid of doom
 */
getuser(function(user){
    getposts(user.id,function(post){
        displayUserinfoAndPost(user,posts,function(){
            console.log("user info and posts successfully displayed")
        })
    })
})