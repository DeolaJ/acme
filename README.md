# Acme

This is a simple marketing landing page built with [Next.js](https://nextjs.org/)

## Instructions

### Getting Started

    git clone https://github.com/deolaj/acme.git
    cd acme
    npm install

### Development

To run the local server,

    npm run dev

`Prettier`, `Typescript`, and `Eslint` libraries are used for formating and error checking. Install their corresponding vscode extensions to use with VSCode.

### Production

To generate build files for production,

    npm run build

### Test

Some end to end tests were written using `Cypress`.

To run these tests

    npm run test

## Comments

- The `Inter` Google font weights are not consistent with Figma. This causes minor weight discrepancies in the final result.
- The Youtube embed was modified to use the videoId and start instead of the URL provided because the Hygraph URL type does not accept some special characters.
- Modified the logo to create a suitable favicon for the website.
- There were some text and color discrepancies on the Figma design. For example, the mobile and desktop hero section content are different, and the color of the footer links are not consistent across the boards. I improvised with this.
