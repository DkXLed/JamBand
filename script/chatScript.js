
import { userData } from "./userData.js"
import { v4 as uuidv4 } from 'https://jspm.dev/uuid';

const chatScript = document.getElementById('chat-script')
const inputArea = document.getElementById('input-area')

document.addEventListener('click', function(e){
    if (e.target.id = `send-btn`){
        handleBtnClick()
    }
})

function getFeedHtml(){
    let feedHtml = ''
    userData.forEach(function(user){
    
    feedHtml +=
        `
        <div class="feed">
            <div class="feed-inner">
                <img src="${user.profilePic}" class="profile-pic">
                <div class="user-chat-info">
                    <p class="handle">${user.handle}</p>
                    <p class="chat-text">${user.chatText}</p> 
                </div>            
            </div>
        </div>
        `
    })
    return feedHtml
}

function handleBtnClick(){
    if (inputArea.value){
        userData.unshift({
            handle:`derek`,
            profilePic: `./images/JBuser.jpg`,
            chatText: inputArea.value,
            uuid: uuidv4()
        })
    }
    inputArea.value = ''
    render()
}


function render(){
    document.getElementById('feed').innerHTML = getFeedHtml()
}

render()
