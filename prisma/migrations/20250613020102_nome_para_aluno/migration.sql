/*
  Warnings:

  - The primary key for the `Aluno` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `nome` on the `Aluno` table. All the data in the column will be lost.
  - You are about to drop the column `professorId` on the `Aluno` table. All the data in the column will be lost.
  - The primary key for the `Exercicio` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ExercicioAluno` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ExercicioFichaTreino` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `FichaTreino` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Professor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `createdAt` to the `Aluno` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Aluno` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Aluno" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL
);
INSERT INTO "new_Aluno" ("email", "id") SELECT "email", "id" FROM "Aluno";
DROP TABLE "Aluno";
ALTER TABLE "new_Aluno" RENAME TO "Aluno";
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");
CREATE TABLE "new_Exercicio" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,
    CONSTRAINT "Exercicio_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Exercicio" ("descricao", "id", "nome", "professorId") SELECT "descricao", "id", "nome", "professorId" FROM "Exercicio";
DROP TABLE "Exercicio";
ALTER TABLE "new_Exercicio" RENAME TO "Exercicio";
CREATE TABLE "new_ExercicioAluno" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "alunoId" TEXT NOT NULL,
    "exercicioId" TEXT NOT NULL,
    "dataAtribuicao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL,
    CONSTRAINT "ExercicioAluno_exercicioId_fkey" FOREIGN KEY ("exercicioId") REFERENCES "Exercicio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ExercicioAluno" ("alunoId", "dataAtribuicao", "exercicioId", "id", "status") SELECT "alunoId", "dataAtribuicao", "exercicioId", "id", "status" FROM "ExercicioAluno";
DROP TABLE "ExercicioAluno";
ALTER TABLE "new_ExercicioAluno" RENAME TO "ExercicioAluno";
CREATE TABLE "new_ExercicioFichaTreino" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fichaTreinoId" TEXT NOT NULL,
    "exercicioId" TEXT NOT NULL,
    "ordem" INTEGER NOT NULL,
    "repeticoes" INTEGER NOT NULL,
    "series" INTEGER NOT NULL,
    CONSTRAINT "ExercicioFichaTreino_fichaTreinoId_fkey" FOREIGN KEY ("fichaTreinoId") REFERENCES "FichaTreino" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ExercicioFichaTreino_exercicioId_fkey" FOREIGN KEY ("exercicioId") REFERENCES "Exercicio" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ExercicioFichaTreino" ("exercicioId", "fichaTreinoId", "id", "ordem", "repeticoes", "series") SELECT "exercicioId", "fichaTreinoId", "id", "ordem", "repeticoes", "series" FROM "ExercicioFichaTreino";
DROP TABLE "ExercicioFichaTreino";
ALTER TABLE "new_ExercicioFichaTreino" RENAME TO "ExercicioFichaTreino";
CREATE TABLE "new_FichaTreino" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "alunoId" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,
    "dataCriacao" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "FichaTreino_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "Professor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_FichaTreino" ("alunoId", "dataCriacao", "id", "nome", "professorId") SELECT "alunoId", "dataCriacao", "id", "nome", "professorId" FROM "FichaTreino";
DROP TABLE "FichaTreino";
ALTER TABLE "new_FichaTreino" RENAME TO "FichaTreino";
CREATE TABLE "new_Professor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_Professor" ("email", "id", "nome") SELECT "email", "id", "nome" FROM "Professor";
DROP TABLE "Professor";
ALTER TABLE "new_Professor" RENAME TO "Professor";
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
