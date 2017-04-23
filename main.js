var myOptions = {
	"nativeControlsForTouch": false,
	"logo": { "enabled": false },
	heuristicProfile: "HighQuality",
        techOrder: ["azureHtml5JS", "html5", "flashSS", "silverlightSS", ],
	controls: true,
	autoplay: true,
	width: "640",
	height: "400",
}
myPlayer = amp("azuremediaplayer", myOptions);
myPlayer.src([
        {
                "src": "http://mobicom.streaming.mediaservices.windows.net/4082234e-de8e-46f6-bff0-01df846795e8/b35e7f08-a06c-46dc-9a9a-504b4f1360d3.ism/manifest",
                "type": "application/vnd.ms-sstr+xml"
        }
]);
