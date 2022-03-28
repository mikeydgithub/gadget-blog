const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    comment: 'Parish so enable innate ptance at precaution asts. Who Frder first. Fo sendingeneral.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    comment: 'As absolute is by amounted repeated entirely ye returned. These ready timedering orieved endeavor.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    comment: 'Be at miss or each good play home they. It leave taste mr in it fancy. She son o my it done.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    comment: 'Acceptance middletons me if discretion boisterous travelling an. She prosperous coMiddulged marriage ent offering landlord.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    comment: 'Lorem Ipsum comes from a latin text wrem ipsum is the following:',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    comment: 'Lorem ipsum dolderit in voluptate velit esse catat mollit anim id est laborum.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    comment: 'The text is a corrupted vhere it originates discusses the Ascalon.',
    user_id: 1
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
