import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: ""
    };
  }

  // componentDidMount() {
  //   fetch('/test').then(res => {
  //     if (res.ok) {
  //       return res.json();
  //     } else {
  //       throw Error(`Request rejected with status ${res.status}`);
  //     }
  //   }).then(json => {
  //     this.setState({
  //       response: json.express
  //     });
  //   }).catch(console.error);
  // }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/test");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  render() {
    return (
      <div className="App">
        <p className="App-intro">{this.state.response}</p>
      </div>
    );
  }
}

export default App;
