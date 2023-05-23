import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import ShortUniqueId from 'short-unique-id';

const prisma = new PrismaClient()
const uid = new ShortUniqueId({ length: 16 });

async function hashPassword(password: string): Promise<string> {
  const salts = 12;
  const salt = await bcrypt.genSalt(salts);
  const hash = await bcrypt.hash(password, salt);

  return hash;
}

async function main() {
  const init_password = uid();
  const default_user = await prisma.user.upsert({
    where: { username: 'jailtoncruz01@gmail.com' },
    update: {
      password: await hashPassword(init_password),
    },
    create: {
      id: uid(),
      username: 'jailtoncruz01@gmail.com',
      name: 'Jailton Cruz',
      password: await hashPassword(init_password),
    },
  })

  console.log({ default_user, init_password })
}
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })