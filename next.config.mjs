import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  
};
 
export default withNextIntl(nextConfig);

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   i18n: {
//     locales: ['en', 'es'],
//     defaultLocale: 'es',
//   }
// };

// export default nextConfig;
