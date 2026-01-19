import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { StudentsModule } from './students/students.module';
import { SurveysModule } from './surveys/surveys.module';
import { ParticipationModule } from './participation/participation.module';
import { AwardsModule } from './awards/awards.module';
import { ClearanceModule } from './clearance/clearance.module';
import { RotationsModule } from './rotations/rotations.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    StudentsModule,
    SurveysModule,
    ParticipationModule,
    AwardsModule,
    ClearanceModule,
    RotationsModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
