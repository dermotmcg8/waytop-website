/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // We use plain <img> with pre-optimized assets, so keep the built-in
    // optimizer out of the way and stay fully static-exportable.
    unoptimized: true,
  },
};

export default nextConfig;
