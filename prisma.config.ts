/*
 * @Author: anqiao anqiao10@gmail.com
 * @Date: 2026-06-03 23:05:37
 * @LastEditors: anqiao anqiao10@gmail.com
 * @LastEditTime: 2026-06-03 23:10:32
 * @description: 
 * @FilePath: /ai-task-manager/prisma.config.ts
 */
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"),
  },
});