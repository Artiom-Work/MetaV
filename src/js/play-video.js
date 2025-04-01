const videoList = document.querySelectorAll('.preview__video-block');

videoList.forEach(videoBlock => {

	if (videoBlock) {
		const video = videoBlock.querySelector('.preview__video');
		const playBtn = videoBlock.querySelector('.play-button');

		playBtn.addEventListener('click', () => {
			const videoName = videoBlock.querySelector('.video-name');
			if (video.paused) {
				video.play();
				video.controls = true;
				if (playBtn) {
					playBtn.classList.add('visually-hidden');
					videoName.style.display = 'none';
				}
			}
		});
	}
});
