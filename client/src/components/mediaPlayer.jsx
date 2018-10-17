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
      inSeek: false};

    this.endSong = this.endSong.bind(this);
    this.onDuration = this.onDuration.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.initiatePlayer = this.initiatePlayer.bind(this);
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

  render() {
    return (
      <section className='media-player-container'>
        <div className='media-player-controls'>
          <ReactPlayer 
            url={this.state.songs[this.state.counter].url} 
            playing={true}
            width="0px"
            height="0px"
            volume={this.state.volume}
            muted={this.state.muted}
            onEnded={this.endSong}
            onDuration={this.onDuration}
            onProgress={this.onProgress}
            ref={this.initiatePlayer}
            />
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