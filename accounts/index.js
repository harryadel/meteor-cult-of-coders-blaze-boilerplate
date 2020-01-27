AccountsTemplates.configure({
  defaultLayout: 'main-layout',
  defaultContentRegion: 'main',
  // defaultLayoutRegions: {
  //     nav: 'navbar',
  //     footer: 'footer'
  // },
});

AccountsTemplates.configureRoute('signIn');
AccountsTemplates.configureRoute('signUp');
AccountsTemplates.configureRoute('ensureSignedIn');
