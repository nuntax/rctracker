window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-MDKG6MSR3F');
    
    var query = window.location.search.substring(1);
    query = query.replace("username=", "");
    if(query == ""){
        $( "#usernameheader" ).text("Enter a username\n to search for.");
        $('.table-auto').attr('hidden', true);
    }
    else{
        $( "#usernameheader" ).text("Stats from: "+query);
    }
    console.log(query);
    let url = "https://rollerapi.herokuapp.com/stats?username="+query;

    $.get(url, function( data ) {
        console.log(data);
        data = data.replace("[", '');
        data = data.replace("]", '');
        let jsonr = JSON.parse(data);
        console.log(jsonr);
        let stats = jsonr.profiles.stats;
        console.log(stats)
        if(stats["MatchPlayedGamemode.gamemode.QuickMatch"].value == 0){
            alert("No stats found for this user. Check the spelling and try again.");
        }
        let workmmr = stats.tsrmeandef.value;
        //switch(workmmr){

        //}

        let use = {
  "MMR": stats.tsrmeandef.value,
  "Casual MMR" : stats.tsmeandef.value,
  "Casual Matches": stats["MatchPlayedGamemode.gamemode.QuickMatch"].value,
  "Ranked Matches": stats["MatchPlayedGamemode.gamemode.Ranked"].value,
  "Total Draws": stats["MatchResult.endreason.Draw"].value,
  "Total Wins": stats["MatchResult.endreason.Win"].value,
  "Total Losses": stats["MatchResult.endreason.Lost"].value,
  "Casual Draws": stats["MatchResultGamemode.gamemode.QuickMatch.endreason.Draw"].value,
  "Casual Wins": stats["MatchResultGamemode.gamemode.QuickMatch.endreason.Win"].value,
  "Ranked Wins": stats["MatchResultGamemode.gamemode.Ranked.endreason.Win"].value,
  "Total 1PT Goals": stats.progression1ptGoalGlobal.value,
  "Total 3PT Goals": stats.progression3ptGoalGlobal.value,
  "Total 5PT Goals": stats.progression5ptGoalGlobal.value,
  "1PT Goals Casual": stats["performance1ptGoalGamemode.gamemodeid.QuickMatch"].value,
  "3PT Goals Casual": stats["performance3ptGoalGamemode.gamemodeid.QuickMatch"].value,
  "5PT Goals Casual": stats["performance5ptGoalGamemode.gamemodeid.QuickMatch"].value,
  "1PT Goals Ranked": stats["performance1ptGoalGamemode.gamemodeid.Ranked"].value,
  "3PT Goals Ranked": stats["performance3ptGoalGamemode.gamemodeid.Ranked"].value,
  "5PT Goals Ranked": stats["performance5ptGoalGamemode.gamemodeid.Ranked"].value,
  "Total Dodges": stats.performanceDodge.value,
  "Dodges Casual": stats["performanceDodgeGamemode.gamemodeid.QuickMatch"].value,
  "Dodges Ranked": stats["performanceDodgeGamemode.gamemodeid.Ranked"].value,
  "Total Gates": stats.progressionGatesGlobal.value,
  "Gates Casual": stats["performanceGatesGamemode.gamemodeid.QuickMatch"].value,
  "Gates Ranked": stats["performanceGatesGamemode.gamemodeid.Ranked"].value,
  "Total Goals": stats.progressionGoalsGlobal.value,
  "Goals Casual": stats["performanceGoalsGamemode.gamemodeid.QuickMatch"].value,
  "Goals Ranked": stats["performanceGoalsGamemode.gamemodeid.Ranked"].value,
  "Total Passes": stats.progressionPassGlobal.value,
  "Passes Casual": stats["performancePassGamemode.gamemodeid.QuickMatch"].value,
  "Passes Ranked": stats["performancePassGamemode.gamemodeid.Ranked"].value,
  "Casual Tackles": stats["performanceTacklesGamemode.gamemodeid.QuickMatch"].value,
  "Ranked Tackles": stats["performanceTacklesGamemode.gamemodeid.Ranked"].value,
  "Items in Inventory": stats.progressionCollection.value,
  "Matches on Acapulco": stats["progressionEnvironmentPlayedSpecific.map.Arena_Acapulco"].value,
  "Matches on Chichen Itza": stats["progressionEnvironmentPlayedSpecific.map.Arena_ChichenItza"].value,
  "Matches on Mexico": stats["progressionEnvironmentPlayedSpecific.map.Arena_Mexico"].value,
  "Hours in Casual": (stats["progressionPlaytimeGamemode.gamemodeid.QuickMatch"].value/3600).toFixed(2),
  "Hours in Ranked": (stats["progressionPlaytimeGamemode.gamemodeid.Ranked"].value/3600).toFixed(2),
  "Total playtime": (stats.playtimeAbsolute.value/3600).toFixed(2), //includes just having the game open 
  "Fans": stats.progressionTotalFans.value     
    };

    display(use);
    });
    function display(stats){
        let length = _.size(stats);
        console.log(length+" Objects");
        for(let i = 0; i< length; i++){
            let key = Object.keys(stats)[i];
            let value = stats[key];
            console.log(key+" : "+value);
            $("table").append('<tr><td>'+key+'</td><td>'+value+'</td></tr>');
        }
    }
    let url2 = window.location.href.split('?')[0];
    $(document).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            submitted(); 
        }
    });
    ;
    $( "#submit" ).click(function() {
        submitted();
    })
    function submitted(){
        if($("#search input").val() == ""){
            alert("Please enter a username.");
        }
        else{
            window.location.href = url2+"?username="+$("#search input").val();
        }
    }
