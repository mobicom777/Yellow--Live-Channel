
	var myOptions = {
		"nativeControlsForTouch": false,
		techOrder: ["azureHtml5JS", "flashSS", "html5FairPlayHLS","silverlightSS", "html5"],
		"logo": { "enabled": false },
		controls: true,
		autoplay: true,
		width: "640",
		height: "400",
		poster: ""
}

	
	 
myPlayer = amp("azuremediaplayer", myOptions);

myPlayer.src([
    { src: "http://mobicom.streaming.mediaservices.windows.net/bc3f1b68-137e-40a3-8bbd-f1bd16cbdd17/f0c965ef-aa63-473b-96fd-71a1faca8a69.ism/manifest", type: "application/vnd.ms-sstr+xml", streamingFormats: ["SMOOTH", "HLS","HLS-V3", "HLS-V4"]}, 
]);
