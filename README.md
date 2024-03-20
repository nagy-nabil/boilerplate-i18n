# Task

We're setting up a website with internationalization (i18n) on Next.js, but we've encountered a problem with the i18n part. Our website supports English ("en") and Spanish ("es"), and we don't want to add "en" to the URL if the browser's detected language is English. However, we're facing an issue with page redirection.

- Navigating to `https://example.com/es/test` works correctly.
- Navigating to `https://example.com/test` doesn't work as expected.

Here's what we expect to happen:

- If a user navigates to `https://example.com/test` and their browser is detected as using English, it should display the test page with English content.
- If a user navigates to `https://example.com/en/test` and their browser is detected as using English, it should redirect to `/test` and display the test page with English content.
- If a user navigates to `https://example.com/es/test`, and their browser is detected as using Spanish, it should display the test page with Spanish content.
- It should be possible to add new languages in the future, not just English and Spanish.

Since we're using Next.js 14, we also want to continue using App Router and React Server Components to handle SEO in the future, and we wish to keep this as part of our ongoing work.

The task will be considered complete once you open a Pull Request to the boilerplate repository detailing the changes you've made.
