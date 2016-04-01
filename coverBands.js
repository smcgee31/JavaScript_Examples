var bands = [
    {
    name: "Joe",
    email: "Joe@Icansingreallyhigh.com",
    artist: "Queen"
    },
    {
    artist: "LedZepplin",
    email: "DeadMepplin@gmail.com",
    name: "Dead Mepplin"
    },
    {
    artist: "DavidBowie",
    name: "Johnny Depp",
    email: "Imnotreallyhim@johnnydeppfan.com"
    },
    {
    name: "Joe",
    email: "Joe@Icansingreallyhigh.com",
    artist: "Queen"
    },
    {
    artist: "LedZepplin",
    email: "DeadMepplin@gmail.com",
    name: "Dead Mepplin"
    },
    {
    artist: "DavidBowie",
    name: "Johnny Depp",
    email: "Imnotreallyhim@johnnydeppfan.com"
    },
    {
    name: "Joey",
    email: "Joe@Icansingreallyhigh.com",
    artist: "BritneySpears"
    },
    {
    artist: "LedZepplin",
    email: "DeadMepplin@gmail.com",
    name: "Dead Mepplin"
    },
    {
    artist: "DavidBowie",
    name: "Johnny Mepp",
    email: "Imnotreallyhim@johnnydeppfan.com"
    },
    {
    artist: "DavidBowie",
    name: "Johnny Gepp",
    email: "Imnotreallyhim@johnnydeppfan.com"
    },
    {
    artist: "DavidBowie",
    name: "Johnny Smepp",
    email: "Imnotreallyhim@johnnydeppfan.com"
    }
];

function countCoverBands(coverRequests){
  /*
    var bands = {}

    var artist
    var artistCount

    for coverRequests
      increment artistCount

    return bands
  */

    var bands = {}

    for(var i = 0; i < coverRequests.length; i++){
    var request = coverRequests[i];

        if(bands.hasOwnProperty(request.artist)){
            bands[request.artist] += 1;
        }
        else {
            bands[request.artist] = 1;
        }
    }

    return bands;
}

var totalResults = countCoverBands(bands);

console.log("total", totalResults)


function countCoverBands2(coverRequests){
    var bands = {};
    for(var i = 0; i < coverRequests.length; i++){
        var request = coverRequests[i];

////   ----------------- this would be if you used an array ---------------
    // var existingBand = null;
    // for(var j = 0; j < bands.length; j++){
    //     if(bands[j].artist === request.artist){
    //         existingBand = bands[j];
    //         break;
    //     }
    // }

// ------------------ this would be if you used an object --------------
        if(existingBand){
            existingBand.count += 1;
        }
        else {
            bands.push({
                artist: request.artist,
                count: 1
            });
        }
    }

  return bands;
}
