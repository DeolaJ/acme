describe("Landing page", () => {
    it("Landing page loads successfully", () => {
        cy.visit("/");
    });

    it("Hero section is rendered properly", () => {
        cy.visit("/");

        cy.get("#hero-section").within(() => {
            // Assert desktop Hero content
            cy.contains("Build high-performance composable applications").should("be.visible");
            cy.contains(
                "Equip your team with the industry’s leading native GraphQL Content APIs, Content Federation capabilities and rich set of developer tools, to build truly composable applications.",
            ).should("be.visible");

            // Assert mobile Hero content
            cy.contains("Beautiful analytics to grow smarter").should("not.be.visible");
            cy.contains(
                "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
            ).should("not.be.visible");

            cy.get("button").should("have.text", "Get started");
        });
    });

    it("Navigation links are all rendered properly", () => {
        cy.visit("/");

        const expectedLinks = ["Home", "Features", "Pricing", "About"];
        const expectedAuthButtons = ["Log in", "Sign up"];

        // Assert published navigation links
        cy.get("nav #desktop-menu a")
            .should("have.length", expectedLinks.length)
            .each((link, index) => {
                cy.wrap(link).should("have.text", expectedLinks[index]);
            });

        cy.get("nav #auth-buttons a")
            .should("have.length", expectedAuthButtons.length)
            .each((link, index) => {
                cy.wrap(link).should("have.text", expectedAuthButtons[index]);
            });
    });

    it("Footer links are all rendered properly", () => {
        cy.visit("/");

        const expectedLinks = ["Terms", "Privacy", "Cookies"];

        // Assert published navigation links
        cy.get("footer #footer-menu a")
            .should("have.length", expectedLinks.length)
            .each((link, index) => {
                cy.wrap(link).should("have.text", expectedLinks[index]);
            });
    });

    it("Feature blocks are all rendered properly", () => {
        cy.visit("/");

        const features = [
            {
                label: "Versatile",
                title: "Works with all modern web technologies",
                description:
                    "As a composable and headless platform, Acme works with all your preferred frontend frameworks, existing systems, GraphQL and REST APIs.",
                button: "View GitHub repository",
            },
            {
                title: "Product roundup Q2 2023",
                description:
                    "Keep your customers in the flow by embedding help articles right on your website. With Beacon, they never have to leave the page to find an answer.",
            },
        ];

        // Assert published features links
        cy.get(".feature")
            .should("have.length", 2)
            .each((feature, index) => {
                cy.wrap(feature).should("include.text", features[index].title);
                cy.wrap(feature).should("include.text", features[index].description);
                if (features[index].button) {
                    cy.wrap(feature).should("include.text", features[index].button);
                }
                if (features[index].label) {
                    cy.wrap(feature).should("include.text", features[index].label);
                }
            });
    });

    it("Callout blocks are all rendered properly", () => {
        cy.visit("/");

        const calloutContent = [
            {
                title: "Start your 30-day free trial",
                description: "Join over 4,000+ startups already growing with us.",
                button: "Get started",
            },
        ];

        // Assert published callout sections
        cy.get(".callout")
            .should("have.length", 1)
            .each((callout, index) => {
                cy.wrap(callout).should("include.text", calloutContent[index].title);
                cy.wrap(callout).should("include.text", calloutContent[index].description);
                cy.wrap(callout).should("include.text", calloutContent[index].button);
            });
    });
});

describe("Landing page (Mobile)", { viewportWidth: 360 }, () => {
    it("Landing page loads successfully", () => {
        cy.visit("/");
    });

    it("Mobile hero section is rendered properly", () => {
        cy.visit("/");

        cy.get("#hero-section").within(() => {
            // Assert desktop Hero content
            cy.contains("Build high-performance composable applications").should("not.be.visible");
            cy.contains(
                "Equip your team with the industry’s leading native GraphQL Content APIs, Content Federation capabilities and rich set of developer tools, to build truly composable applications.",
            ).should("not.be.visible");

            // Assert mobile Hero content
            cy.contains("Beautiful analytics to grow smarter").should("be.visible");
            cy.contains(
                "Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.",
            ).should("be.visible");

            cy.get("button").should("have.text", "Get started");
        });
    });
});
