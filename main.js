var myOptions = {
	"nativeControlsForTouch": false,
	controls: true,
	autoplay: true,
	width: "640",
	height: "400",
}
myPlayer = amp("azuremediaplayer", myOptions);
myPlayer.src([
        {
                "src": "http://hectagonmedia.streaming.mediaservices.windows.net/31767238-2d11-4c29-bc7c-17476b38e4eb/d2f1ff1a-f877-4e9d-99c6-a8b271582a5c.ism/manifest",
                "type": "application/vnd.ms-sstr+xml"
        }
]);
