'use strict';

const e = React.createElement;

const b = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      liked: false,
      alsoLiked: false 
    };
  }

  render() {
    if (this.state.liked) {
      return b(
        'button',
        {onClick: () => this.setState({ alsoLiked: true })},
        'YOLO'
      );
    }

    if (this.state.alsoLiked) {
      return 'HELLO!'
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);
