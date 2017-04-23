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
    { src: "http://mobicom.streaming.mediaservices.windows.net/3d30369e-0658-4ff5-a79c-3659cde656a1/Kal Ho Naa Ho - Title Track Video  Shahrukh Khan, Saif, Preity.ism/manifest", type: "application/vnd.ms-sstr+xml", streamingFormats: ["SMOOTH", "HLS","HLS-V3", "HLS-V4"]}, 
]);
