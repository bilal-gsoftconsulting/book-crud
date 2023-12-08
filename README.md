Project Directory Structure:
src/
|-- config/
|   |-- configuration.ts
|-- auth/
|   |-- decorators/
|   |   |-- roles.decorator.ts
|   |   |-- public.decorator.ts
|   |-- guards/
|   |   |-- auth.guard.ts
|   |   |-- roles.guard.ts
|   |-- strategies/
|   |   |-- local.strategy.ts
|   |   |-- jwt.strategy.ts
|   |-- dto/
|   |   |-- login.dto.ts
|   |   |-- signup.dto.ts
|   |-- auth.controller.ts
|   |-- auth.module.ts
|   |-- auth.service.ts
|-- users/
|   |-- dto/
|   |   |-- create-user.dto.ts
|   |-- schemas/
|   |   |-- user.schema.ts
|   |-- users.controller.ts
|   |-- users.module.ts
|   |-- users.service.ts
|-- common/
|   |-- interfaces/
|   |   |-- user.interface.ts
|   |-- enums/
|   |   |-- role.enum.ts
|   |-- filters/
|   |   |-- http-exception.filter.ts
|-- books/  
|   |-- dto/
|   |   |-- create-book.dto.ts
|   |-- books.controller.ts
|   |-- books.module.ts
|   |-- books.service.ts
|-- app.module.ts
|-- main.ts
|-- .env
