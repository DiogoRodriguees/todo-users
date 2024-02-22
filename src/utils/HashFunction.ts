import * as bcrypt from 'bcrypt';

export async function generateHash(password: string) {
  const saltOrRounds: number = 10;
  const hash: string = await bcrypt.hash(password, saltOrRounds);
  return hash;
}
