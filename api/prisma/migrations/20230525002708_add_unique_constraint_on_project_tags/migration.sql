/*
  Warnings:

  - A unique constraint covering the columns `[project_id,tag_id]` on the table `project_tags` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "project" ADD COLUMN     "cover_url" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "project_tags_project_id_tag_id_key" ON "project_tags"("project_id", "tag_id");
