var myOptions = {
	"nativeControlsForTouch": false,
	"logo": { "enabled": false },
	controls: true,
	autoplay: true,
	width: "auto",
	height: "auto",
}
myPlayer = amp("azuremediaplayer", myOptions);

myPlayer.src([
    { src: "http://mobicom.streaming.mediaservices.windows.net/15fa66fe-250d-4f69-8be3-85f37f7e4942/c228dc66-4ae9-432c-ad8d-60a465b10c37.ism/manifest", type: "application/vnd.ms-sstr+xml", streamingFormats: ["SMOOTH", "HLS","HLS-V3", "HLS-V4"]}, 
]);
