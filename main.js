var myOptions = {
	"nativeControlsForTouch": false,
	"logo": { "enabled": false },
	controls: true,
	autoplay: true,
	width: "640",
	height: "400",
}
myPlayer = amp("azuremediaplayer", myOptions);
myPlayer.src([
        {
                "src": "http://mobicom.streaming.mediaservices.windows.net/356e806d-7ff9-4b0e-b8eb-cc45c5a70739/ec109c84-9c31-4cbc-a016-a65d9893aead.ism/manifest",
                "type": "application/vnd.ms-sstr+xml"
        }
]);
