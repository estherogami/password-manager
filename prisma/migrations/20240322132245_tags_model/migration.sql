-- DropIndex
DROP INDEX "Credentials_order_key";

-- AlterTable
CREATE SEQUENCE credentials_order_seq;
ALTER TABLE "Credentials" ALTER COLUMN "order" SET DEFAULT nextval('credentials_order_seq');
ALTER SEQUENCE credentials_order_seq OWNED BY "Credentials"."order";
