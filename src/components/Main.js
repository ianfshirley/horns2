import React from 'react';
import HornedBeast from './HornedBeast';

class Main extends React.Component {

  render() {
    return (
      <main>
        <HornedBeast
          title='Trolloc'
          src="https://i.ibb.co/YTR1M4V/trolloc.jpg"
          alt='Trolloc'
          imgTitle='Trolloc'
          description='Shadowspawn, a horrifying cross of human and animal. Predators who delight in killing. Avoid at all costs.'
        />
        <HornedBeast
          title='Unicorn'
          src="https://i.ibb.co/ssw3VNt/unicorn.jpg"
          alt="Unicorn"
          imgTitle='Unicorn'
          description='Majestic creature with magical abilities. Extremely rare.'
        />
      </main>
    );
  }
}

export default Main;