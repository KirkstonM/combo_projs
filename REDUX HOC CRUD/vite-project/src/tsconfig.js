const config = [
  {
    name: "home",
    path: "/web/home",
    components: [
      {
        name: "TEST",
        enable: true,  // This component will render
        data: {
          title: "Welcome to the Home Page",
        },
      },
    ],
  },
  {
    name: "about",
    path: "/web/about",
    components: [
      {
        name: "TEST",
        enable: true,  // This component will render
        data: {
          title: "Welcome to the Home Page",
          style : {
            background : "blue"
          }
        },
      },{
        name: "TEST",
        enable: true,  // This component will render
        data: {
          title: "Welcome to the Home Page",
        },
      },
    ],
  },
];

export default config;
