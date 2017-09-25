module.exports = {
  date: 'dddd, MMMM DD, YYYY',
  link: '',
  name: '',
  selectors: {
    author: '.post_age',
    date: '.post_age',
    dateRegex: /\w+, \w+ \d+, \d+/i,
    description: '.story_description',
    item: '.story_block',
    title: 'h3.story_title',
    url: 'h3.story_title a',
  },
};
