 $(document).ready(function () {
	var myOptions = {
		"nativeControlsForTouch": false,
		"logo": { "enabled": false },
		controls: true,
		autoplay: true,
		width: "640",
		height: "400",
};

	 var myPlayer = amp("azuremediaplayer", myOptions, function () {
                //this is the Ready function, which executes after the player is loaded.
                this.addEventListener(amp.eventName.loadedmetadata, function () {
                    
                    var shareOption = new Amp.Plugin.Share.ShareOptions;
                    shareOption.socialShare.shareIcons.push(Amp.Plugin.Share.SocialShareIcon.getPredefinedShareIcon(0 /* Facebook */));
                    shareOption.socialShare.shareIcons.push(Amp.Plugin.Share.SocialShareIcon.getPredefinedShareIcon(1 /* Twitter */));
                    shareOption.socialShare.shareIcons.push(Amp.Plugin.Share.SocialShareIcon.getPredefinedShareIcon(2 /* LinkedIn */));
                    shareOption.socialShare.shareIcons.push(Amp.Plugin.Share.SocialShareIcon.getPredefinedShareIcon(3 /* Mail */));
                    this.share(shareOption);/* plugin initialization*/
                });
                            });
	 
myPlayer = amp("azuremediaplayer", myOptions);

myPlayer.src([
    { src: "http://mobicom.streaming.mediaservices.windows.net/3d30369e-0658-4ff5-a79c-3659cde656a1/Kal Ho Naa Ho - Title Track Video  Shahrukh Khan, Saif, Preity.ism/manifest", type: "application/vnd.ms-sstr+xml", streamingFormats: ["SMOOTH", "HLS","HLS-V3", "HLS-V4"]}, 
]);
