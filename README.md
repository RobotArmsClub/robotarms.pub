# robotarms.pub

This is the repo for the site. It's running on Django 1.9.5 and uses Node.js
build tools to operate the front-end build chain.

## Development

You'll need:

- Python, pip, and preferably [virtualenv](https://www.dabapps.com/blog/introduction-to-pip-and-virtualenv-python/)
and [virtualenvwrapper](http://docs.python-guide.org/en/latest/dev/virtualenvs/)
- Node version 4.4.3. I recommend using [Node Version Manager](https://github.com/creationix/nvm) to manage
your Node versions.

### Getting set up

1. Clone down the repository and navigate to the folder
2. `npm install`
3. `pip install -r requirements.txt`
4. `python manage.py runserver`
5. You should now have a server up and running!

If you're having issues, yell at @wayspurrchen or file an issue.

### Developing Front-end Assets

All front-end assets are served out of the `static` folder. The `static/src`
folder contains all of the source code. The `static/build` folder contains the
source code as it is temporarily built during development and deployment. Since
Django has its own static asset collection system, we also have a third `static/serve`
folder from where Django serves static assets in production. If you're developing,
you can pretty much ignore this folder.

The front-end build chain uses [Sass](http://sass-lang.com/) and [Grunt](http://gruntjs.com/)
for development. To use grunt, install it with NPM (Node Package Manager):

```
npm install -g grunt-cli
```

You should now have `grunt` available at your command line. Run:

```
grunt watch
```

Grunt should now automatically compile any changes you make to the SCSS files.