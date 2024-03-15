-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "URI" VARCHAR(255),
    "icon" TEXT,
    "comments" VARCHAR(2500),
    "tags" TEXT DEFAULT '[]',

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Credentials" (
    "id" SERIAL NOT NULL,
    "pid" INTEGER NOT NULL,
    "key" VARCHAR(255) NOT NULL,
    "value" VARCHAR(255) NOT NULL,
    "input_type" VARCHAR(50) NOT NULL,
    "order" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Credentials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_title_key" ON "Project"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Credentials_order_key" ON "Credentials"("order");

-- AddForeignKey
ALTER TABLE "Credentials" ADD CONSTRAINT "Credentials_pid_fkey" FOREIGN KEY ("pid") REFERENCES "Project"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
