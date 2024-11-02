import dotenv from "dotenv";
dotenv.config({ path: "../.env" }); // use .env in parent repo

/** @type {import('next').NextConfig} */
const config = {
  eslint: {
    dirs: ["next"],
  },
};

export default config;
