import React from 'react';
import ReactPlayer from 'react-player';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: 0, 
      songs: [{ title: "Lith Harbor OST", url: "https://s3-us-west-1.amazonaws.com/ms2-analytics/lith-harbor.mp3", duration: 175 }], 
      volume: 0.5,
      previousVolume: 0.5, 
      muted: false, 
      trackLength: 0, 
      played: 0, 
      inSeek: false,
      volumeClass: 'volume-icon',
      playing: false };

    this.endSong = this.endSong.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  formatTime(seconds) {
    let date = new Date(null);
    date.setSeconds(seconds);

    return (
      date.toTimeString().slice(4, 8)
    );  
  }

  initiatePlayer(player) {
    this.player = player;
  }

  endSong() {

  }

  onProgress(state) {
    if (!this.state.inSeek) {
      this.setState({ played: state.played });
    }
  }

  onDuration(duration) {
    this.setState({ trackLength: duration });
  }

  seekChange(e) {
    this.setState({ played: parseFloat(e.target.value) });
  }

  seekClick() {
    this.setState({ inSeek: true });
  }

  seekUnClick(e) {
    this.setState({ inSeek: false });
    this.player.seekTo(parseFloat(e.target.value));
  }

  pausePlay() {
    const button = (document.querySelector('.media-player-buttons').childNodes[0]);
    if (button.classList.contains('media-pause-button')) {
      this.setState({ playing: false });

      button.classList.remove('media-pause-button');
      button.classList.add('media-play-button');
    } else if (button.classList.contains('media-play-button')) {
      this.setState({ playing: true });

      button.classList.remove('media-play-button');
      button.classList.add('media-pause-button');
    }
  }

  toggleMute() {
    if (this.state.muted) {
      this.setState({ volumeClass: 'volume-icon' });
      this.setState({ volume: this.state.previousVolume });
    } else {
      this.setState({ previousVolume: this.state.volume });
      this.setState({ volumeClass: 'muted-icon' });
      this.setState({ volume: 0 });
    }

    this.setState({ muted: !this.state.muted });
  }

  changeVolume(e) {
    this.setState({ volume: parseFloat(e.target.value) });
  }

  render() {
    return (
      <section className='media-player-container'>
        <div className='media-player-controls'>
          <ReactPlayer 
            url={this.state.songs[this.state.counter].url} 
            playing={this.state.playing}
            width="0px"
            height="0px"
            volume={this.state.volume}
            muted={this.state.muted}
            onEnded={this.endSong}
            onDuration={(duration) => this.onDuration(duration)}
            onProgress={(state) => this.onProgress(state)}
            ref={(player) => this.initiatePlayer(player)}
            />

          <div className="media-player-buttons">
            <button
              className="media-play-button"
              onClick={() => this.pausePlay()}
            >
            </button>
          </div>

          <div className="track-slider-container">
            <div className="track-current-time">
              {this.formatTime(Math.round(this.state.played * this.state.trackLength))}
            </div>

            <div className="track-slider">
              <input
                className="track-progress"
                type='range' min={0} max={1}
                step='any' value={this.state.played}
                onChange={(e) => this.seekChange(e)}
                onMouseDown={() => this.seekClick()}
                onMouseUp={(e) => this.seekUnClick(e)}
              />
              <div className="playback-slider-track"></div>
              <div
                className="playback-progress"
                style={{ "width": this.state.played * 487 }}>
              </div>
            </div>
            <div className="track-progress-length">
              {this.formatTime(Math.round(this.state.trackLength))}
            </div>
          </div>

          <div className="volume-wrapper">
            <div className="volume-modal">
              <div className={this.state.volumeClass} onClick={() => this.toggleMute()}></div>
              <p className="pointer"></p>
              <div className="volume-content">
                <div className="volume-line-box">
                  <div className="volume-line"></div>
                </div>

                <input className="volume-slider" type="range"
                  step="any" min="0" max="1"
                  value={this.state.volume}
                  onChange={(e) => this.changeVolume(e)}
                  style={Object.assign({}, { position: 'absolute' },
                    { bottom: '45px' },
                    { right: '-24px' },
                    { width: '92px' })}
                />
              </div>
            </div>
          </div>
          <div className="info-container">
            <p className="song-title">
              {this.state.songs[this.state.counter].title}
            </p>
          </div>
        </div>

      </section>
    );
  }
}

export default MediaPlayer;