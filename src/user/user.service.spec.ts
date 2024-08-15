import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from 'src/database/prisma.service';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, PrismaService],
    }).compile();

    service = module.get<UserService>(UserService);
    prisma = module.get<PrismaService>(PrismaService);
    prisma.user.deleteMany();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should be defined', async () => {
    // await service.create({});
    const test = await prisma.user.findMany();
    console.log(test);
  });
  it('should be defined', async () => {
    // await service.create({});
    const test = await prisma.user.findMany();
    console.log(test);
  });
});
