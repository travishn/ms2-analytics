import React from 'react';
import ReactPlayer from 'react-player';

class MediaPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: 0, 
      songs: [{ url: "https://s3-us-west-1.amazonaws.com/ms2-analytics/lith-harbor.mp3", duration: 175 }], 
      volume: 0.75, 
      muted: false, 
      trackLength: 0, 
      played: 0, 
      inSeek: false,
      playing: true };

    this.endSong = this.endSong.bind(this);
    this.formatTime = this.formatTime.bind(this);
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps);
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
        </div>

        <div className="media-player-buttons">
          <button
            className="media-pause-button"
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
            <div
              className="playback-progress"
              style={{ "width": this.state.played * 487 }}>
            </div>
          </div>

          <div className="track-progress-length">
            {this.formatTime(Math.round(this.state.trackLength))}
          </div>
        </div>
      </section>
    );
  }
}

export default MediaPlayer;