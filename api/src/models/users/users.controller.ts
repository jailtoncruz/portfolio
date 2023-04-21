import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDTO } from './interfaces/create-user-dto';
import { UsersService } from './users.service';
import { HelperService } from '../../common/helpers/helper.service';
import { Public } from '../../common/decorators/public';
import { AuthenticationService } from '../../authentication/authentication.service';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('users')
export class UsersController {
  constructor(
    private service: UsersService,
    private helper: HelperService,
    private authService: AuthenticationService) { }

  @Post('sign-up')
  async create(@Body() createUserDTO: CreateUserDTO) {
    const { name, password, username } = createUserDTO;

    const user = await this.service.create({
      id: this.helper.getID(),
      name, username,
      password: await this.service.hashPassword(password)
    });

    delete user.password;
    const access = await this.authService.signIn(username, password);


    return { ...user, access };
  }
}
