export const mockData = {
  users: [
    {
      id:1,
      name:'Tony',
      password: '123456'
    }
  ],
  activeSessions: [

  ],
  feed: [
    {
      showTo: 'all',
      id: 1,
      post_header: 'New post',
      post_link:'/post1',
      post_brief: 'This is new post',
      post_img: 'post1.jpg',
      post_tags: ['info', 'new']
    },
    {
      showTo: 'user',
      id: 2,
      post_header: 'New post 2',
      post_link:'/post2',
      post_brief: 'This is new post',
      post_img: ['post1.jpg'],
      post_tags: ['info', 'new', 'tobacco']
    }
  ],
  posts: [
    {
      id:1,
      post_header: 'New post 1',
      post_text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      post_image: ['post1.jpg'],
      post_action: 'goToMixer',
      post_button_text: 'Try it now!',
      post_slider: ['post1.jpg', "post2.jpg", "post2.jpg","post1.jpg"]
    },
    {
      id:2,
      post_header: 'New post 2',
      post_text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
      post_image: ['post2.jpg'],
      post_action: 'goToMixer',
      post_button_text: 'Try it now!',
      post_slider: ['post2.jpg', "post1.jpg", "post2.jpg","post1.jpg"]
    }
  ]
};
