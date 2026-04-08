import { Component } from 'react';

class Fun2 extends Component {
  constructor(prom) {
    super(prom);
    this.link = 'https://www.youtube.com/embed/MtwaFpoVS8M?si=qn935Z_4JyXvZTbH';
  }
  render() {
    return (
      <iframe
        width='560'
        height='315'
        src={this.link}
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerpolicy='strict-origin-when-cross-origin'
        allowfullscreen
      ></iframe>
    );
  }
}
export default Fun2;
