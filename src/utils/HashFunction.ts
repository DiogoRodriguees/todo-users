import * as bcrypt from 'bcrypt';

export async function generateHash(password: string) {
  const saltOrRounds = Number(process.env.SALT);
  const hash = await bcrypt.hash(password, saltOrRounds);
  return hash;
}
