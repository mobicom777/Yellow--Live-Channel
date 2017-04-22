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
                "src": "//mobicom.streaming.mediaservices.windows.net/7af2ac44-27ea-4382-b689-aca1b24049e4/1f4a1421-162e-44df-b112-10adddb19219.ism/manifest",
                "type": "application/vnd.ms-sstr+xml"
        }
]);
