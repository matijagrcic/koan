# koan
A blogging platform and a learning project

## Tech

Koan uses [ASP.NET 5](https://github.com/aspnet/Home) on the back-end, and [Aurelia](http://aurelia.io/) for the front-end, because *shiny*.

OK, not because "shiny", but because this is a learning project, albeit one that may (hopefully) become something useful in and of itself.

## Getting it running

You will these two basic things:

* ASP.NET 5 - see [my blog post about installing this on Linux](http://blog.markrendle.net/fun-with-asp-net-5-and-docker/)
* [Node.js](http://nodejs.org)

You will also need a couple of Node packages installed globally:

```
sudo npm install -g gulp-cli
sudo npm install -g jspm
```

Obviously if you're not on a \*nix system you don't need the `sudo`.

Once you've got that, go to the Koan folder and run these things:

```
kpm restore
npm install
jspm install -i
```

to restore all the packages needed, and then run

```
gulp watch
```

to start the application, which will now be running at [localhost:9000](http://localhost:9000).

## Koan is recruiting

As already stated, this is a learning project. I'm doing it to learn all about ASP.NET 5 and Aurelia. The public blog (posts, etc) will be rendered server-side using MVC 6, while the owner pages (editing posts, etc) will be done in Aurelia.

If you'd like to learn this stuff too, or you'd like to contribute in some other way (e.g. design/UX expertise) then please [ping me on Twitter](https://twitter.com/markrendle).

As you might be able to tell from the initial commit, I'm not using Visual Studio for this one. Learning how to develop ASP.NET effectively on Linux is another thing I'm learning. But if you want to use Visual Studio, that's OK too.