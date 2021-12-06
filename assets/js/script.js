var repoContainerEl = document.querySelector('#repos-container');

// Navigation grow section

$(function() {
    $("#button1").mouseenter(function() {$("#effect1").addClass("wide")});
    $("#button1").mouseleave(function() {$("#effect1").removeClass("wide")})
});
$(function() {
    $("#button2").mouseenter(function() {$("#effect2").addClass("wide")});
    $("#button2").mouseleave(function() {$("#effect2").removeClass("wide")})
});
$(function() {
    $("#button3").mouseenter(function() {$("#effect3").addClass("wide")});
    $("#button3").mouseleave(function() {$("#effect3").removeClass("wide")})
});
$(function() {
    $("#button4").mouseenter(function() {$("#effect4").addClass("wide")});
    $("#button4").mouseleave(function() {$("#effect4").removeClass("wide")})
});
$(function() {
    $("#button5").mouseenter(function() {$("#effect5").addClass("wide")});
    $("#button5").mouseleave(function() {$("#effect5").removeClass("wide")})
});


// Accordion section

$(function(){
    $("#accordion").accordion({header: "h3" , clearStyle: true ,  heightStyle: "fill", collapsible: true});
    //this will open 1st accordian.
    $('#openfirst').click(function(){
        $(".accordion").accordion({active:0 , clearStyle: true ,  heightStyle: "fill", collapsible: true});
        $(".accordionTitle").text("About Me")
    });
    //this will open 2nd accordian.
    $('#opensecond').click(function(){
        $(".accordion").accordion({active:1 , clearStyle: true ,  heightStyle: "fill", collapsible: true});
        $(".accordionTitle").text("Resume")
    });
    //this will open 3rd accordian.
    $('#openthird').click(function(){
        $(".accordion").accordion({active:2, clearStyle: true ,  heightStyle: "fill", collapsible: true});
        $(".accordionTitle").text("My Work")
    });
    //this will open 4th accordian.
    $('#openfourth').click(function(){
        $(".accordion").accordion({active:3 , clearStyle: true ,  heightStyle: "fill", collapsible: true});
        $(".accordionTitle").text("GitHub")
    });    
    //this will open 5th accordian.
    $('#openfifth').click(function(){
        $(".accordion").accordion({active:4 , clearStyle: true ,  heightStyle: "fill", collapsible: true});
        $(".accordionTitle").text("Contact Me")
    });
});

     
// GitHub API link creator

var getUserRepos = function (user) {
        var apiUrl = 'https://api.github.com/users/interceptr83/repos';
      
        fetch(apiUrl)
          .then(function (response) {
            if (response.ok) {
              response.json().then(function (data) {
                displayRepos(data, user);
              });
            } else {
              alert('Error: ' + response.statusText);
            }
          })
          .catch(function (error) {
            alert('Unable to connect to GitHub');
          });
      };

      var displayRepos = function (repos, searchTerm) {
        
        for (var i = 0; i < repos.length; i++) {
          var repoName = repos[i].name;
      
          var repoEl = document.createElement('div');
          repoEl.classList = 'list-item flex-row justify-space-between align-center';
      
          var titleEl = document.createElement('a');
          titleEl.classList = "github";
          titleEl.href = "http://github.com/Interceptr83/" + repoName;
          titleEl.target = "newtab";
          titleEl.innerText = repoName;
      
          repoEl.appendChild(titleEl);
      
          var statusEl = document.createElement('span');
          statusEl.classList = 'flex-row align-center';
      
          repoEl.appendChild(statusEl);
      
          repoContainerEl.appendChild(repoEl);
        }
      };

      getUserRepos();