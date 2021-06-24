const repos = ['tasks', 'muj-dms', 'bitcoin-ticker', 'bonk-chat', 'bubby-tasks', 'bubby-weather']

const getRepo = async (name) => {
  const response = await fetch('https://api.github.com/repos/shreeyansb/' + encodeURIComponent(name));
  const repoJson = await response.json();
  return {
    name: repoJson.name,
    description: repoJson.description,
    language: repoJson.language,
    url: repoJson.html_url
  }
}


const getRepoCard = (data) => {
  var card = `
  <div class="col col-12 col-xl-5 m-3 px-4 pt-3 pb-2 repo-border">
  <a href="`+ data.url + `" target="_blank">
            <h2 class="repo-head">`+ data.name + `</h2>
            <div class="pt-2 pb-2">
              <h5 class="repo-text">`+ data.description + `</h5>
            </div>
            <p>
              <i class="fas fa-terminal fa-xs"></i><span class="repo-sub">&nbsp;&nbsp;`+ data.language + `</span>
            </p>
            </a>
          </div>
  `
  return card
}

async function loadRepo() {
  var repoHtml = ''
  var repoRow = document.getElementById('repo-row')
  for (let index = 0; index < repos.length; index++) {
    await getRepo(repos[index]).then(function (data) {
      repoHtml = repoHtml + getRepoCard(data)
    })
  }
  repoRow.innerHTML = repoHtml
  document.getElementById('interests-row').innerHTML = `<h1 class="head-text mt-5 mb-5 ps-3">My Interests.</h1>
  <div class="col-12 col-md-5 col-xxl-2 text-center repo-border p-4 m-3 my-xxl-3 mx-xxl-5" data-aos="fade-up" data-aos-delay="100">
  <a href="https://flutter.dev/" target="_blank">
    <img src="https://miro.medium.com/max/400/1*gH1iKXJH8T12LIqhboZWEA.png" alt="Flutter" class="img-fluid pe-4 mb-3 myimg">
    <h4>Flutter</h4>
    </a>
  </div>
  <div class="col-12 col-md-5 col-xxl-2 text-center repo-border p-4 m-3 my-xxl-3 mx-xxl-5" data-aos="fade-up" data-aos-delay="150">
  <a href="https://nodejs.org/en/" target="_blank">
    <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="Node.js" class="img-fluid mb-3 myimg">
    <h4>Node.js</h4>
    </a>
  </div>
  <div class="col-12 col-md-5 col-xxl-2 text-center repo-border p-4 m-3 my-xxl-3 mx-xxl-5" data-aos="fade-up" data-aos-delay="200">
  <a href="https://expressjs.com/" target="_blank">
    <img src="https://i.imgur.com/lRKcmDu.png" alt="Express" class="img-fluid mb-3 myimg">
    <h4>Express</h4>
    </a>
  </div>
  <div class="col-12 col-md-5 col-xxl-2 text-center repo-border p-4 m-3 my-xxl-3 mx-xxl-5" data-aos="fade-up" data-aos-delay="250">
  <a href="https://www.mongodb.com/" target="_blank">
    <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-mongodb/events/mon.png" alt="MongoDB" class="img-fluid mb-3 myimg">
    <h4>MongoDB</h4>
    </a>
  </div>`
}
