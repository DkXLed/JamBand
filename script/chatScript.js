
import { userData } from "./userData.js"

const chatScript = document.getElementById('chat-script')



function getFeedHtml(){
    let feedHtml = ''
    userData.forEach(function(user){
    
    feedHtml +=
        `
<div class="feed">
    <div class="feed-inner">
        <img src="${user.profilePic}" class="profile-pic">
        <div>
            <p class="handle">${user.handle}</p>
            <p class="tweet-text">${user.chatText}</p> 
        </div>            
    </div>
</div>
`
})
return feedHtml
}


function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()
