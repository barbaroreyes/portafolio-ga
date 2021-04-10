$.ajax('https://spreadsheets.google.com/feeds/list/1Ni_GyfAJSOjG4CN5CK3YO-ruB7rCRCh-aCDulo3q_UE/1/public/full?alt=json')
.then(data => {
    console.log(data)
    //map over data
    const projects = data.feed.entry.map(item =>{
        return {  description: item.gsx$description.$t,
                 urllive: item.gsx$urllive.$t,
                 githuburl: item.gsx$githuburl.$t,
                image: item.gsx$image.$t,
                
                   
                }
    })
    console.log(projects)












})
.catch(console.log)