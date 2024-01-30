
// let imageURL = document.querySelector('.userImg');
// let followersURL = document.querySelector('.followers');
// let btn =  document.querySelector('.btn');
// async function linkOfUserInfo() {
//     const mainURL = "https://api.github.com/users/MohdKaif1729"
//     const promise = await fetch(mainURL);
//     const response = await promise.json();

//     imageURL = response.avatar_url;
//     followersURL = response.followers_url;

//    btn.addEventListener('click', () => {
//         imageURL.style.src = imageURL;
//         followersURL.style.innnerHTML = followersURL;
        
//     })
    
//     console.log(imageURL);
//     console.log(followersURL);
// }

// linkOfUserInfo();

let imageURL = document.querySelector('.userImg');
let followersURL = document.querySelector('.followers');
let btn = document.querySelector('.btn');

async function linkOfUserInfo() {
  const mainURL = "https://api.github.com/users/MohdKaif1729"
  const promise = await fetch(mainURL);
  const response = await promise.json();

  
  btn.addEventListener('click', () => {
      imageURL.src = response.avatar_url;
      followersURL.innerHTML = `Followers: ` + response.followers;
    // Do something on button click if needed
  });

  console.log(imageURL);
  console.log(followersURL);
}

linkOfUserInfo();

