# README

This is the GitHub repository for https://fastcode.org.

We welcome your contributions to this website.

The website is generated using [Eleventy](https://www.11ty.dev/), a Node.js package for building static websites. All the content used to generate the site is in the `src/` folder. Published content apppears in the following folders:

- `src/about/`: introducing SPE and Fastcode
- `src/get-involved/`: inviting people to use Fastcode open-source content and contribute back
- `src/events/`: inviting people to participate in Fastcode events

## Installing locally

Clone the repository and `cd` to it. With Node.js installed, execute the following to install Node dependences and perform the first build.

```bash
> npm install

> npm run build
```
Then to launch the website, execute the following:
```bash
> npm run start
```

Navigate to `localhost:8080` (or sometimes `localhost:8081`) in a browser and you should see your local instance of the site.
