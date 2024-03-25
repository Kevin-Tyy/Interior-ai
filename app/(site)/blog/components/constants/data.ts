export interface Blog {
  id: number;
  banner_imgUrl: string;
  title: string;
  img_url: string;
  author: {
    avatar_imgUrl: string;
    names: string;
  };
  publish_date: string;
  readTime: string;
  content: string[];
}

export const blogs: Array<Blog> = [
  {
    id: 1,
    banner_imgUrl: "/assets/Article_Image1.png",
    title: "Lorem ipsum dolor sit",
    img_url: "/assets/Article_Banner_ImgUrl.png",
    author: {
      avatar_imgUrl: "/assets/Article_author1.jpeg",
      names: "Dasteen",
    },
    publish_date: "Jan 10, 2022",
    readTime: "3 min read",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Auctor tincidunt ac sit at adipiscing ut. Turpis massa magna id tincidunt. Amet luctus sapien egestas dapibus nullam diam urna amet. Turpis amet viverra felis vestibulum nisl massa orci adipiscing. Magna suspendisse sagittis et risus urna tincidunt pretium. Imperdiet luctus quisque id ultrices pellentesque leo lacus volutpat elit. Non purus turpis nunc pretium ipsum at massa morbi mauris. Quam facilisis cursus tempor at adipiscing sodales at platea quis. Odio ut condimentum sed egestas. Mattis tortor diam orci diam gravida consectetur libero.",
      "Dictum praesent ultrices et tortor egestas bibendum ultrices praesent lectus. Lectus amet purus nullam diam vulputate vitae imperdiet. Massa ante ultricies phasellus id a quisque felis in tellus. Non eget ultrices ultricies urna maecenas. Duis vestibulum amet dictum turpis vitae interdum. Ultricies eget libero diam fermentum. Morbi aliquet sagittis pellentesque neque diam feugiat tempus aenean. Sed purus nec at viverra tellus sed commodo cras. Consequat fringilla et faucibus blandit nulla parturient tincidunt sed sed. Facilisis mollis eget enim tellus vitae. Velit orci lacus erat tellus volutpat interdum ultricies malesuada. Ut sodales in feugiat sagittis risus ligula. Cursus ornare vel donec tempus dignissim.",
      "Odio sagittis suscipit sed massa semper. Pretium massa egestas quis commodo sodales orci. Augue eget morbi commodo aliquam sem eget. Vulputate feugiat massa sed elementum mauris ornare. Neque nam sodales mauris tincidunt aliquet urna cursus. Odio vestibulum sit aliquet mollis tempus. Porta ac sit fringilla at placerat dui nulla. Malesuada ullamcorper ullamcorper quam aliquet purus. Amet volutpat urna faucibus nunc tortor ullamcorper proin. Sed lectus integer bibendum amet rhoncus. Viverra sollicitudin lacus nisl sit nunc metus sed sodales. Gravida integer nullam in faucibus ultricies sit. Maecenas vitae commodo neque lectus.",
    ],
  },
  {
    id: 2,
    banner_imgUrl: "/assets/Article_Image2.png",
    title: "Lorem ipsum dolor sit",
    img_url: "/assets/Article_Banner_ImgUrl.png",
    author: {
      avatar_imgUrl: "/assets/Article_author1.jpeg",
      names: "Dasteen",
    },
    publish_date: "Jan 10, 2022",
    readTime: "3 min read",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Auctor tincidunt ac sit at adipiscing ut. Turpis massa magna id tincidunt. Amet luctus sapien egestas dapibus nullam diam urna amet. Turpis amet viverra felis vestibulum nisl massa orci adipiscing. Magna suspendisse sagittis et risus urna tincidunt pretium. Imperdiet luctus quisque id ultrices pellentesque leo lacus volutpat elit. Non purus turpis nunc pretium ipsum at massa morbi mauris. Quam facilisis cursus tempor at adipiscing sodales at platea quis. Odio ut condimentum sed egestas. Mattis tortor diam orci diam gravida consectetur libero.",
      "Dictum praesent ultrices et tortor egestas bibendum ultrices praesent lectus. Lectus amet purus nullam diam vulputate vitae imperdiet. Massa ante ultricies phasellus id a quisque felis in tellus. Non eget ultrices ultricies urna maecenas. Duis vestibulum amet dictum turpis vitae interdum. Ultricies eget libero diam fermentum. Morbi aliquet sagittis pellentesque neque diam feugiat tempus aenean. Sed purus nec at viverra tellus sed commodo cras. Consequat fringilla et faucibus blandit nulla parturient tincidunt sed sed. Facilisis mollis eget enim tellus vitae. Velit orci lacus erat tellus volutpat interdum ultricies malesuada. Ut sodales in feugiat sagittis risus ligula. Cursus ornare vel donec tempus dignissim.",
      "Odio sagittis suscipit sed massa semper. Pretium massa egestas quis commodo sodales orci. Augue eget morbi commodo aliquam sem eget. Vulputate feugiat massa sed elementum mauris ornare. Neque nam sodales mauris tincidunt aliquet urna cursus. Odio vestibulum sit aliquet mollis tempus. Porta ac sit fringilla at placerat dui nulla. Malesuada ullamcorper ullamcorper quam aliquet purus. Amet volutpat urna faucibus nunc tortor ullamcorper proin. Sed lectus integer bibendum amet rhoncus. Viverra sollicitudin lacus nisl sit nunc metus sed sodales. Gravida integer nullam in faucibus ultricies sit. Maecenas vitae commodo neque lectus.",
    ],
  },
  {
    id: 3,
    banner_imgUrl: "/assets/Article_Image3.png",
    title: "Lorem ipsum dolor sit",
    img_url: "/assets/Article_Banner_ImgUrl.png",
    author: {
      avatar_imgUrl: "/assets/Article_author1.jpeg",
      names: "Dasteen",
    },
    publish_date: "Jan 10, 2022",
    readTime: "3 min read",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Auctor tincidunt ac sit at adipiscing ut. Turpis massa magna id tincidunt. Amet luctus sapien egestas dapibus nullam diam urna amet. Turpis amet viverra felis vestibulum nisl massa orci adipiscing. Magna suspendisse sagittis et risus urna tincidunt pretium. Imperdiet luctus quisque id ultrices pellentesque leo lacus volutpat elit. Non purus turpis nunc pretium ipsum at massa morbi mauris. Quam facilisis cursus tempor at adipiscing sodales at platea quis. Odio ut condimentum sed egestas. Mattis tortor diam orci diam gravida consectetur libero.",
      "Dictum praesent ultrices et tortor egestas bibendum ultrices praesent lectus. Lectus amet purus nullam diam vulputate vitae imperdiet. Massa ante ultricies phasellus id a quisque felis in tellus. Non eget ultrices ultricies urna maecenas. Duis vestibulum amet dictum turpis vitae interdum. Ultricies eget libero diam fermentum. Morbi aliquet sagittis pellentesque neque diam feugiat tempus aenean. Sed purus nec at viverra tellus sed commodo cras. Consequat fringilla et faucibus blandit nulla parturient tincidunt sed sed. Facilisis mollis eget enim tellus vitae. Velit orci lacus erat tellus volutpat interdum ultricies malesuada. Ut sodales in feugiat sagittis risus ligula. Cursus ornare vel donec tempus dignissim.",
      "Odio sagittis suscipit sed massa semper. Pretium massa egestas quis commodo sodales orci. Augue eget morbi commodo aliquam sem eget. Vulputate feugiat massa sed elementum mauris ornare. Neque nam sodales mauris tincidunt aliquet urna cursus. Odio vestibulum sit aliquet mollis tempus. Porta ac sit fringilla at placerat dui nulla. Malesuada ullamcorper ullamcorper quam aliquet purus. Amet volutpat urna faucibus nunc tortor ullamcorper proin. Sed lectus integer bibendum amet rhoncus. Viverra sollicitudin lacus nisl sit nunc metus sed sodales. Gravida integer nullam in faucibus ultricies sit. Maecenas vitae commodo neque lectus.",
    ],
  },
  {
    id: 4,
    banner_imgUrl: "/assets/Article_Image4.png",
    title: "Lorem ipsum dolor sit",
    img_url: "/assets/Article_Banner_ImgUrl.png",
    author: {
      avatar_imgUrl: "/assets/Article_author1.jpeg",
      names: "Dasteen",
    },
    publish_date: "Jan 10, 2022",
    readTime: "3 min read",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Auctor tincidunt ac sit at adipiscing ut. Turpis massa magna id tincidunt. Amet luctus sapien egestas dapibus nullam diam urna amet. Turpis amet viverra felis vestibulum nisl massa orci adipiscing. Magna suspendisse sagittis et risus urna tincidunt pretium. Imperdiet luctus quisque id ultrices pellentesque leo lacus volutpat elit. Non purus turpis nunc pretium ipsum at massa morbi mauris. Quam facilisis cursus tempor at adipiscing sodales at platea quis. Odio ut condimentum sed egestas. Mattis tortor diam orci diam gravida consectetur libero.",
      "Dictum praesent ultrices et tortor egestas bibendum ultrices praesent lectus. Lectus amet purus nullam diam vulputate vitae imperdiet. Massa ante ultricies phasellus id a quisque felis in tellus. Non eget ultrices ultricies urna maecenas. Duis vestibulum amet dictum turpis vitae interdum. Ultricies eget libero diam fermentum. Morbi aliquet sagittis pellentesque neque diam feugiat tempus aenean. Sed purus nec at viverra tellus sed commodo cras. Consequat fringilla et faucibus blandit nulla parturient tincidunt sed sed. Facilisis mollis eget enim tellus vitae. Velit orci lacus erat tellus volutpat interdum ultricies malesuada. Ut sodales in feugiat sagittis risus ligula. Cursus ornare vel donec tempus dignissim.",
      "Odio sagittis suscipit sed massa semper. Pretium massa egestas quis commodo sodales orci. Augue eget morbi commodo aliquam sem eget. Vulputate feugiat massa sed elementum mauris ornare. Neque nam sodales mauris tincidunt aliquet urna cursus. Odio vestibulum sit aliquet mollis tempus. Porta ac sit fringilla at placerat dui nulla. Malesuada ullamcorper ullamcorper quam aliquet purus. Amet volutpat urna faucibus nunc tortor ullamcorper proin. Sed lectus integer bibendum amet rhoncus. Viverra sollicitudin lacus nisl sit nunc metus sed sodales. Gravida integer nullam in faucibus ultricies sit. Maecenas vitae commodo neque lectus.",
    ],
  },
  {
    id: 5,
    banner_imgUrl: "/assets/Article_Image5.png",
    title: "Lorem ipsum dolor sit",
    img_url: "/assets/Article_Banner_ImgUrl.png",
    author: {
      avatar_imgUrl: "/assets/Article_author1.jpeg",
      names: "Dasteen",
    },
    publish_date: "Jan 10, 2022",
    readTime: "3 min read",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Auctor tincidunt ac sit at adipiscing ut. Turpis massa magna id tincidunt. Amet luctus sapien egestas dapibus nullam diam urna amet. Turpis amet viverra felis vestibulum nisl massa orci adipiscing. Magna suspendisse sagittis et risus urna tincidunt pretium. Imperdiet luctus quisque id ultrices pellentesque leo lacus volutpat elit. Non purus turpis nunc pretium ipsum at massa morbi mauris. Quam facilisis cursus tempor at adipiscing sodales at platea quis. Odio ut condimentum sed egestas. Mattis tortor diam orci diam gravida consectetur libero.",
      "Dictum praesent ultrices et tortor egestas bibendum ultrices praesent lectus. Lectus amet purus nullam diam vulputate vitae imperdiet. Massa ante ultricies phasellus id a quisque felis in tellus. Non eget ultrices ultricies urna maecenas. Duis vestibulum amet dictum turpis vitae interdum. Ultricies eget libero diam fermentum. Morbi aliquet sagittis pellentesque neque diam feugiat tempus aenean. Sed purus nec at viverra tellus sed commodo cras. Consequat fringilla et faucibus blandit nulla parturient tincidunt sed sed. Facilisis mollis eget enim tellus vitae. Velit orci lacus erat tellus volutpat interdum ultricies malesuada. Ut sodales in feugiat sagittis risus ligula. Cursus ornare vel donec tempus dignissim.",
      "Odio sagittis suscipit sed massa semper. Pretium massa egestas quis commodo sodales orci. Augue eget morbi commodo aliquam sem eget. Vulputate feugiat massa sed elementum mauris ornare. Neque nam sodales mauris tincidunt aliquet urna cursus. Odio vestibulum sit aliquet mollis tempus. Porta ac sit fringilla at placerat dui nulla. Malesuada ullamcorper ullamcorper quam aliquet purus. Amet volutpat urna faucibus nunc tortor ullamcorper proin. Sed lectus integer bibendum amet rhoncus. Viverra sollicitudin lacus nisl sit nunc metus sed sodales. Gravida integer nullam in faucibus ultricies sit. Maecenas vitae commodo neque lectus.",
    ],
  },
  {
    id: 6,
    banner_imgUrl: "/assets/Article_Image6.png",
    title: "Lorem ipsum dolor sit",
    img_url: "/assets/Article_Banner_ImgUrl.png",
    author: {
      avatar_imgUrl: "/assets/Article_author1.jpeg",
      names: "Dasteen",
    },
    publish_date: "Jan 10, 2022",
    readTime: "3 min read",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Auctor tincidunt ac sit at adipiscing ut. Turpis massa magna id tincidunt. Amet luctus sapien egestas dapibus nullam diam urna amet. Turpis amet viverra felis vestibulum nisl massa orci adipiscing. Magna suspendisse sagittis et risus urna tincidunt pretium. Imperdiet luctus quisque id ultrices pellentesque leo lacus volutpat elit. Non purus turpis nunc pretium ipsum at massa morbi mauris. Quam facilisis cursus tempor at adipiscing sodales at platea quis. Odio ut condimentum sed egestas. Mattis tortor diam orci diam gravida consectetur libero.",
      "Dictum praesent ultrices et tortor egestas bibendum ultrices praesent lectus. Lectus amet purus nullam diam vulputate vitae imperdiet. Massa ante ultricies phasellus id a quisque felis in tellus. Non eget ultrices ultricies urna maecenas. Duis vestibulum amet dictum turpis vitae interdum. Ultricies eget libero diam fermentum. Morbi aliquet sagittis pellentesque neque diam feugiat tempus aenean. Sed purus nec at viverra tellus sed commodo cras. Consequat fringilla et faucibus blandit nulla parturient tincidunt sed sed. Facilisis mollis eget enim tellus vitae. Velit orci lacus erat tellus volutpat interdum ultricies malesuada. Ut sodales in feugiat sagittis risus ligula. Cursus ornare vel donec tempus dignissim.",
      "Odio sagittis suscipit sed massa semper. Pretium massa egestas quis commodo sodales orci. Augue eget morbi commodo aliquam sem eget. Vulputate feugiat massa sed elementum mauris ornare. Neque nam sodales mauris tincidunt aliquet urna cursus. Odio vestibulum sit aliquet mollis tempus. Porta ac sit fringilla at placerat dui nulla. Malesuada ullamcorper ullamcorper quam aliquet purus. Amet volutpat urna faucibus nunc tortor ullamcorper proin. Sed lectus integer bibendum amet rhoncus. Viverra sollicitudin lacus nisl sit nunc metus sed sodales. Gravida integer nullam in faucibus ultricies sit. Maecenas vitae commodo neque lectus.",
    ],
  },
  {
    id: 7,
    banner_imgUrl: "/assets/Article_Image7.png",
    title: "Lorem ipsum dolor sit",
    img_url: "/assets/Article_Banner_ImgUrl.png",
    author: {
      avatar_imgUrl: "/assets/Article_author1.jpeg",
      names: "Dasteen",
    },
    publish_date: "Jan 10, 2022",
    readTime: "3 min read",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Auctor tincidunt ac sit at adipiscing ut. Turpis massa magna id tincidunt. Amet luctus sapien egestas dapibus nullam diam urna amet. Turpis amet viverra felis vestibulum nisl massa orci adipiscing. Magna suspendisse sagittis et risus urna tincidunt pretium. Imperdiet luctus quisque id ultrices pellentesque leo lacus volutpat elit. Non purus turpis nunc pretium ipsum at massa morbi mauris. Quam facilisis cursus tempor at adipiscing sodales at platea quis. Odio ut condimentum sed egestas. Mattis tortor diam orci diam gravida consectetur libero.",
      "Dictum praesent ultrices et tortor egestas bibendum ultrices praesent lectus. Lectus amet purus nullam diam vulputate vitae imperdiet. Massa ante ultricies phasellus id a quisque felis in tellus. Non eget ultrices ultricies urna maecenas. Duis vestibulum amet dictum turpis vitae interdum. Ultricies eget libero diam fermentum. Morbi aliquet sagittis pellentesque neque diam feugiat tempus aenean. Sed purus nec at viverra tellus sed commodo cras. Consequat fringilla et faucibus blandit nulla parturient tincidunt sed sed. Facilisis mollis eget enim tellus vitae. Velit orci lacus erat tellus volutpat interdum ultricies malesuada. Ut sodales in feugiat sagittis risus ligula. Cursus ornare vel donec tempus dignissim.",
      "Odio sagittis suscipit sed massa semper. Pretium massa egestas quis commodo sodales orci. Augue eget morbi commodo aliquam sem eget. Vulputate feugiat massa sed elementum mauris ornare. Neque nam sodales mauris tincidunt aliquet urna cursus. Odio vestibulum sit aliquet mollis tempus. Porta ac sit fringilla at placerat dui nulla. Malesuada ullamcorper ullamcorper quam aliquet purus. Amet volutpat urna faucibus nunc tortor ullamcorper proin. Sed lectus integer bibendum amet rhoncus. Viverra sollicitudin lacus nisl sit nunc metus sed sodales. Gravida integer nullam in faucibus ultricies sit. Maecenas vitae commodo neque lectus.",
    ],
  },
  {
    id: 8,
    banner_imgUrl: "/assets/Article_Image8.png",
    title: "Lorem ipsum dolor sit",
    img_url: "/assets/Article_Banner_ImgUrl.png",
    author: {
      avatar_imgUrl: "/assets/Article_author1.jpeg",
      names: "Dasteen",
    },
    publish_date: "Jan 10, 2022",
    readTime: "3 min read",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Auctor tincidunt ac sit at adipiscing ut. Turpis massa magna id tincidunt. Amet luctus sapien egestas dapibus nullam diam urna amet. Turpis amet viverra felis vestibulum nisl massa orci adipiscing. Magna suspendisse sagittis et risus urna tincidunt pretium. Imperdiet luctus quisque id ultrices pellentesque leo lacus volutpat elit. Non purus turpis nunc pretium ipsum at massa morbi mauris. Quam facilisis cursus tempor at adipiscing sodales at platea quis. Odio ut condimentum sed egestas. Mattis tortor diam orci diam gravida consectetur libero.",
      "Dictum praesent ultrices et tortor egestas bibendum ultrices praesent lectus. Lectus amet purus nullam diam vulputate vitae imperdiet. Massa ante ultricies phasellus id a quisque felis in tellus. Non eget ultrices ultricies urna maecenas. Duis vestibulum amet dictum turpis vitae interdum. Ultricies eget libero diam fermentum. Morbi aliquet sagittis pellentesque neque diam feugiat tempus aenean. Sed purus nec at viverra tellus sed commodo cras. Consequat fringilla et faucibus blandit nulla parturient tincidunt sed sed. Facilisis mollis eget enim tellus vitae. Velit orci lacus erat tellus volutpat interdum ultricies malesuada. Ut sodales in feugiat sagittis risus ligula. Cursus ornare vel donec tempus dignissim.",
      "Odio sagittis suscipit sed massa semper. Pretium massa egestas quis commodo sodales orci. Augue eget morbi commodo aliquam sem eget. Vulputate feugiat massa sed elementum mauris ornare. Neque nam sodales mauris tincidunt aliquet urna cursus. Odio vestibulum sit aliquet mollis tempus. Porta ac sit fringilla at placerat dui nulla. Malesuada ullamcorper ullamcorper quam aliquet purus. Amet volutpat urna faucibus nunc tortor ullamcorper proin. Sed lectus integer bibendum amet rhoncus. Viverra sollicitudin lacus nisl sit nunc metus sed sodales. Gravida integer nullam in faucibus ultricies sit. Maecenas vitae commodo neque lectus.",
    ],
  },
  {
    id: 9,
    banner_imgUrl: "/assets/Article_Image9.png",
    title: "Lorem ipsum dolor sit",
    img_url: "/assets/Article_Banner_ImgUrl.png",
    author: {
      avatar_imgUrl: "/assets/Article_author1.jpeg",
      names: "Dasteen",
    },
    publish_date: "Jan 10, 2022",
    readTime: "3 min read",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Auctor tincidunt ac sit at adipiscing ut. Turpis massa magna id tincidunt. Amet luctus sapien egestas dapibus nullam diam urna amet. Turpis amet viverra felis vestibulum nisl massa orci adipiscing. Magna suspendisse sagittis et risus urna tincidunt pretium. Imperdiet luctus quisque id ultrices pellentesque leo lacus volutpat elit. Non purus turpis nunc pretium ipsum at massa morbi mauris. Quam facilisis cursus tempor at adipiscing sodales at platea quis. Odio ut condimentum sed egestas. Mattis tortor diam orci diam gravida consectetur libero.",
      "Dictum praesent ultrices et tortor egestas bibendum ultrices praesent lectus. Lectus amet purus nullam diam vulputate vitae imperdiet. Massa ante ultricies phasellus id a quisque felis in tellus. Non eget ultrices ultricies urna maecenas. Duis vestibulum amet dictum turpis vitae interdum. Ultricies eget libero diam fermentum. Morbi aliquet sagittis pellentesque neque diam feugiat tempus aenean. Sed purus nec at viverra tellus sed commodo cras. Consequat fringilla et faucibus blandit nulla parturient tincidunt sed sed. Facilisis mollis eget enim tellus vitae. Velit orci lacus erat tellus volutpat interdum ultricies malesuada. Ut sodales in feugiat sagittis risus ligula. Cursus ornare vel donec tempus dignissim.",
      "Odio sagittis suscipit sed massa semper. Pretium massa egestas quis commodo sodales orci. Augue eget morbi commodo aliquam sem eget. Vulputate feugiat massa sed elementum mauris ornare. Neque nam sodales mauris tincidunt aliquet urna cursus. Odio vestibulum sit aliquet mollis tempus. Porta ac sit fringilla at placerat dui nulla. Malesuada ullamcorper ullamcorper quam aliquet purus. Amet volutpat urna faucibus nunc tortor ullamcorper proin. Sed lectus integer bibendum amet rhoncus. Viverra sollicitudin lacus nisl sit nunc metus sed sodales. Gravida integer nullam in faucibus ultricies sit. Maecenas vitae commodo neque lectus.",
    ],
  },
  {
    id: 10,
    banner_imgUrl: "/assets/Article_Image10.png",
    title: "Lorem ipsum dolor sit",
    img_url: "/assets/Article_Banner_ImgUrl.png",
    author: {
      avatar_imgUrl: "/assets/Article_author1.jpeg",
      names: "Dasteen",
    },
    publish_date: "Jan 10, 2022",
    readTime: "3 min read",
    content: [
      "Lorem ipsum dolor sit amet consectetur. Auctor tincidunt ac sit at adipiscing ut. Turpis massa magna id tincidunt. Amet luctus sapien egestas dapibus nullam diam urna amet. Turpis amet viverra felis vestibulum nisl massa orci adipiscing. Magna suspendisse sagittis et risus urna tincidunt pretium. Imperdiet luctus quisque id ultrices pellentesque leo lacus volutpat elit. Non purus turpis nunc pretium ipsum at massa morbi mauris. Quam facilisis cursus tempor at adipiscing sodales at platea quis. Odio ut condimentum sed egestas. Mattis tortor diam orci diam gravida consectetur libero.",
      "Dictum praesent ultrices et tortor egestas bibendum ultrices praesent lectus. Lectus amet purus nullam diam vulputate vitae imperdiet. Massa ante ultricies phasellus id a quisque felis in tellus. Non eget ultrices ultricies urna maecenas. Duis vestibulum amet dictum turpis vitae interdum. Ultricies eget libero diam fermentum. Morbi aliquet sagittis pellentesque neque diam feugiat tempus aenean. Sed purus nec at viverra tellus sed commodo cras. Consequat fringilla et faucibus blandit nulla parturient tincidunt sed sed. Facilisis mollis eget enim tellus vitae. Velit orci lacus erat tellus volutpat interdum ultricies malesuada. Ut sodales in feugiat sagittis risus ligula. Cursus ornare vel donec tempus dignissim.",
      "Odio sagittis suscipit sed massa semper. Pretium massa egestas quis commodo sodales orci. Augue eget morbi commodo aliquam sem eget. Vulputate feugiat massa sed elementum mauris ornare. Neque nam sodales mauris tincidunt aliquet urna cursus. Odio vestibulum sit aliquet mollis tempus. Porta ac sit fringilla at placerat dui nulla. Malesuada ullamcorper ullamcorper quam aliquet purus. Amet volutpat urna faucibus nunc tortor ullamcorper proin. Sed lectus integer bibendum amet rhoncus. Viverra sollicitudin lacus nisl sit nunc metus sed sodales. Gravida integer nullam in faucibus ultricies sit. Maecenas vitae commodo neque lectus.",
    ],
  },
];
