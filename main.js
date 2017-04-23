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
                "src": "//amssamples.streaming.mediaservices.windows.net/91492735-c523-432b-ba01-faba6c2206a2/AzureMediaServicesPromo.ism/manifest",
                "type": "application/vnd.ms-sstr+xml"
        }
]);
