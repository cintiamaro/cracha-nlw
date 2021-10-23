
        const linksSocialMedia = {
            github: "cintiamaro",
            youtube: "cintiamaro",
            facebook: "cintiamaro",
            instagram: "cintiamarod",
            twitter: "cintiamaro"
        }

        function changeSocialMediaLinks(){
            for(let li of socialLinks.children){
                const social = li.getAttribute('class')
                
                li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
              
            }
        }

        changeSocialMediaLinks()

        function getGitHubInfos(){
            const url = `https://api.github.com/users/${linksSocialMedia.github}`

            fetch(url)
            .then(response => response.json())
            .then(data => {
                userName.textContent = data.name
                userBio.textContent = data.bio
                userLink.href = data.html_url
                userGit.textContent = data.login  
                userImage.src = data.avatar_url
                              })

            
        }
   
        getGitHubInfos()
 