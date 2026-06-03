import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (user && user.passwordHash) {
      const isMatch = await bcrypt.compare(pass, user.passwordHash);
      if (isMatch) {
        const { passwordHash, ...result } = user;
        return result;
      }
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    
    // Create or update session
    const token = this.jwtService.sign(payload);
    
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7); // 7 days from now

    await this.prisma.session.create({
      data: {
        userId: user.id,
        sessionToken: token,
        expires: expiresAt,
      },
    });

    return {
      access_token: token,
      user: user,
    };
  }

  async register(registerDto: RegisterDto) {
    const { email, password, name } = registerDto;
    
    // Check if user exists
    const existingUser = await this.prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    // Hash password
    const saltOrRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltOrRounds);

    // Create user
    const user = await this.prisma.user.create({
      data: {
        email,
        name,
        passwordHash,
      },
    });

    const { passwordHash: _, ...result } = user;
    return this.login(result);
  }
}
