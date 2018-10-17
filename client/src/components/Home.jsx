import React from 'react';

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className='home-container'>
        <p>Insert Home Content Here!</p>
      </section>
    );
  }
}

export default Home;