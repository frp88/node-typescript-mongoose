import { config } from "dotenv"
import { join } from "path"

const ENVFILE_BY_NODE_ENV = {
  local: "../../.env.local",
  development: "../../.env.development",
  staging: "../../.env.staging"
};

const DEFAULT_ENV = "../../.env";

const ENVFILE_PATH = (ENVFILE_BY_NODE_ENV as any)[process.env.NODE_ENV!] || DEFAULT_ENV

config({ path: join(__dirname, ENVFILE_PATH) })

const {
  PORT,
  API_KEY,
  MONGO_DB_URL,
  NODE_ENV,
  JWT_SECRET,
} = process.env

const Config = {
  PORT,
  API_KEY,
  MONGO_DB_URL,
  NODE_ENV,
  JWT_SECRET,
};

export default Config
