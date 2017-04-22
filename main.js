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
                "src": "http://mobicom.streaming.mediaservices.windows.net/37b5ef05-174e-44c7-afe7-1e24e7ac8da7/c6d4bfcc-7fb3-4697-b418-7a44daf250b6.ism/manifest",
                "type": "application/vnd.ms-sstr+xml"
        }
]);
